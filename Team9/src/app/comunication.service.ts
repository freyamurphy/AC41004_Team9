import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Observable } from 'rxjs';
import { searchWithStateAndDRGCodeInterface,test }from './classmanager.service';
import { SqlapiService }from './sqlapi.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { GelocatorService }from './gelocator.service';

import { map, catchError } from 'rxjs/operators';

import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

private focusedlocationSource = new Subject<any>();
focusedlocation$ = this.focusedlocationSource.asObservable();

userlat:any=0;
userlong:any=0;

usersort:any;

flag:any=0;

private arrayOfObjectsFromSQLSource = new Subject<any>();
arrayofstuff$ = this.arrayOfObjectsFromSQLSource.asObservable();

private userlocationSource = new Subject<any>();
userlocation$ = this.userlocationSource.asObservable();

private useruseraddressSource = new Subject<any>();
useraddress$ = this.useruseraddressSource.asObservable();


private autoCompleteSource = new Subject<any>();
autoComplete$ = this.autoCompleteSource.asObservable();

tempvar:any;
distancecalcvariable:any;
resultlength:any;
userstate:any;



testvariables:test[];

constructor(private http: HttpClient,private sqlapi:SqlapiService ,private locate:GelocatorService) { }

runtestsearch(): Observable<test[]>
{
  return  this.sqlapi.gettestdata().pipe(
  map((res) => {

      this.testvariables =  res['data'];
      return this.testvariables;
  }));




}
  private distancebeingsearchedSource = new Subject<any>();

  distancebeingsearched$ = this.distancebeingsearchedSource.asObservable();

  setdistancebeingsearched(dist){

    this.distancebeingsearchedSource.next(dist);

  }

  getdistancebeingsearched(): Observable<any> {

      return this.distancebeingsearched$;

  }
runsearch(code) {
// todo make sure this runs as an * if there is no address

  this.sqlapi.searchWithStateAndDRGCodeFunction(this.userstate,code).subscribe((res: any) =>
  {
    this.arrayOfObjectsFromSQLSource.next(res);
    this.resultlength=res.length;
    this.hospitalHandler(res);
    this.usersort=res;
    this.distancecalcvariable=res;
    //console.log(res);
    this.ryanssort(0);
  });
  setTimeout( ()=>{
    for(var i = 0; i <  this.resultlength ; i++) {


        //console.log(this.arrayOfObjectsFromSQLSource[i].Distance);
    }
  }, 3000)



}

//to use put the following in init setautoComplete(what you are searching for ) and subscibe to getautocompete
setautoComplete(locationInput:any)
{

  this.sqlapi.hellolenny(locationInput).subscribe((res: any) => {this.autoCompleteSource.next(res)});


}

getautoComplete(): Observable<any> {


    return this.autoCompleteSource.asObservable();
}



limitdataByDistance(number){
   let reservationArr :  any  = [];
for(var i = 0; i < this.resultlength-1; i++){
//console.log(this.locate.getdistance(this.distancecalcvariable[i].lat,this.distancecalcvariable[i].lng,this.userlat,this.userlong));
if(this.locate.getdistance(this.distancecalcvariable[i].lat,this.distancecalcvariable[i].lng,this.userlat,this.userlong) < number){

// delete row
 reservationArr.push(this.distancecalcvariable[i]);

}


}

this.arrayOfObjectsFromSQLSource.next(reservationArr);

}



ryanssort(whatsort){
  for(var i = 0; i < this.usersort.length ; i++) {
    this.usersort[i].Distance = this.locate.getdistance(this.usersort[i].lat,this.usersort[i].lng,this.userlat,this.userlong);
  }

  var array =  this.usersort;
  for(var i = 0; i < this.usersort.length ; i++) {
    //console.log(array[i].Distance );
  }
  if(whatsort==1)
  {
    if (this.flag==0)
    {
    this.flag++;
      this.arrayOfObjectsFromSQLSource.next(array.sort(this.compareprice));
    }
    else if (this.flag==1){
      this.flag=0;
     this.arrayOfObjectsFromSQLSource.next(array.sort(this.compareprice).reverse());
    }
  }
  else
  {
    if (this.flag==0)
    {this.arrayOfObjectsFromSQLSource.next(array.sort(this.comparedist2));
    this.flag++;
    this.arrayOfObjectsFromSQLSource.next(array.sort(this.comparedist));
    }
    else if (this.flag==1){   this.arrayOfObjectsFromSQLSource.next(array.sort(this.comparedist2).reverse());
      this.flag=0;
    this.arrayOfObjectsFromSQLSource.next(array.sort(this.comparedist).reverse());
    }
  }

/*  for(var i = 0; i < this.usersort.length ; i++) {
    console.log(array[i].Distance);
  }*/

}


compareprice( a, b ){
  if ( a.averageTotalPayments-a.averageMedicarePayments < b.averageTotalPayments-b.averageMedicarePayments ){
    return -1;
  }
  if ( a.averageTotalPayments-a.averageMedicarePayments > b.averageTotalPayments-b.averageMedicarePayments ){
    return 1;
  }
  return 0;
}

comparedist( a, b ){
  if ( Math.round(a.Distance)  < Math.round(b.Distance) ){

    return -1;
  }
  if ( Math.round(a.Distance)  >Math.round(b.Distance) ){
    return 1;
  }
  return 0;
}
comparedist2( a, b ){
  if ( a.Distance   <  b.Distance  ){

    return -1;
  }
  if (  a.Distance   > b.Distance ){
    return 1;
  }
  return 0;
}









// returns search results from runsearch function
getsearchresults(): Observable<any>
{
    return this.arrayOfObjectsFromSQLSource.asObservable();
}

getstatefromaddress(locationInput:any):string{

    for(let i = 0 ; i < locationInput.address_components.length; i++)
    {
        if(locationInput.address_components[i].types[0]=="administrative_area_level_1")
        {
          //console.log(locationInput.address_components[i].short_name);
          this.userstate=locationInput.address_components[i].short_name;
          return locationInput.address_components[i].short_name;
        }
    }
//todo check if this can ever be missed (not likely)
}





hospitalHandler(dataset){


  var templat =new Array(1000);
  var templng =new Array(1000);
      for(let i = 0 ; i < this.resultlength; i++)
      {
        templat[i]=1000;
         templng[i]=1000;
      //   console.log(dataset[i].lat);
        if(dataset[i].lat ==null){
            this.getlocationfromaddress(dataset[i].State,dataset[i].StreetAddress).subscribe((res: any) => {
              templat[i]=res.results[0].geometry.location.lat;
              templng[i]=res.results[0].geometry.location.lng;
            });
        }



      }

    setTimeout( ()=>{
        for(let i = 0 ; i < this.resultlength; i++)
        {
          if(templng[i]!=1000 && templng[i]!=undefined)
          {
            //console.log(dataset[i].State,dataset[i].StreetAddress,dataset[i].providers_ID,templat[i],templng[i]);
            this.sqlapi.inserthospical(dataset[i].providers_ID,templat[i],templng[i]).subscribe((res: any) => {});
        }

        }
      }, 50000)


}
getlocationfromaddress(state: string,address: string): Observable<any>{

  var temp = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+" "+state+"&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8";
  return this.http.get<any>(temp).pipe(
    map((res) => {
     return res;
  }));
}



setuseraddress(locationInput:any)
{
    this.useruseraddressSource.next(this.getstatefromaddress(locationInput));
}
// get the location the map is focused on
getuseraddress(): Observable<any> {
    return this.useruseraddressSource.asObservable();
}




// set the location the map is focusing on
setfocusedlocation(locationInput:any)
{
  //console.log("locationInput ", locationInput);
  locationInput.lat = Number(locationInput.lat);
  locationInput.lng = Number(locationInput.lng);

  this.focusedlocationSource.next(locationInput);
}
// get the location the map is focused on
getfocusedlocation(): Observable<any> {
    return this.focusedlocationSource.asObservable();
}

// reset the map to the user location/
resetfocused(){
  this.focusedlocationSource.next({lat:this.userlat, lng:this.userlong});
}



getuserlocation(): Observable<any>{
  //console.log("inside get user location function");
  //return {lat:this.userlat, lng:this.userlong};

  return this.userlocation$;

}



setuserlocation(lat,long){
//console.log("user location set ");

//console.log(lat," ",long)
  this.userlat=lat;
  this.userlong=long;

  this.userlocationSource.next({lat:this.userlat, lng:this.userlong});
  //console.log(this.userlat," ",this.userlong);
 this.resetfocused();
}


}
