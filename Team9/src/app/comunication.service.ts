import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Observable } from 'rxjs';
import { searchWithStateAndDRGCodeInterface }from './classmanager.service';
import { SqlapiService }from './sqlapi.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

private focusedlocationSource = new Subject<any>();
focusedlocation$ = this.focusedlocationSource.asObservable();

userlat:any=0;
userlong:any=0;

private arrayofstufflocationSource = new Subject<any>();
arrayofstuff$ = this.arrayofstufflocationSource.asObservable();

private userlocationSource = new Subject<any>();
userlocation$ = this.userlocationSource.asObservable();

private useruseraddressSource = new Subject<any>();
useraddress$ = this.useruseraddressSource.asObservable();


private autoCompleteSource = new Subject<any>();
autoComplete$ = this.autoCompleteSource.asObservable();



resultlength:any;
userstate:any;

  constructor(private http: HttpClient,private sqlapi:SqlapiService ) { }

// runs a search
runsearch(code) {
// todo make sure this runs as an * if there is no address
  console.log("runnign a sql search inside communicaton manager with code ",code);
   console.log(this.userstate);
  this.sqlapi.searchWithStateAndDRGCodeFunction(this.userstate,code).subscribe((res: any) => {this.arrayofstufflocationSource.next(res);this.resultlength=res.length;this.hospitalHandler(res);});



}



//to use put the following in init setautoComplete(what you are searching for ) and subscibe to getautocompete
setautoComplete(locationInput:any)
{

  this.sqlapi.hellolenny(locationInput).subscribe((res: any) => {this.autoCompleteSource.next(res)});


}

getautoComplete(): Observable<any> {


    return this.autoCompleteSource.asObservable();
}










// returns search results from runsearch function
getsearchresults(): Observable<any>
{
    return this.arrayofstufflocationSource.asObservable();
}

getstatefromaddress(locationInput:any):string{

    for(let i = 0 ; i < locationInput.address_components.length; i++)
    {
        if(locationInput.address_components[i].types[0]=="administrative_area_level_1")
        {
          console.log(locationInput.address_components[i].short_name);
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
         console.log(dataset[i].lat);
         if(dataset[i].lat ==null){
          this.getlocationfromaddress(dataset[i].State,dataset[i].StreetAddress).subscribe((res: any) => {templat[i]=res.results[0].geometry.location.lat ;templng[i]=res.results[0].geometry.location.lng;console.log("long"+res.results[0].geometry.location.lng);console.log("lat"+res.results[0].geometry.location.lat);});//templat= res.geometry.lat; templng= res.geometry.lng
          }



      }

      setTimeout( ()=>{
        for(let i = 0 ; i < this.resultlength; i++)
        {
          if(templng[i]!=1000 && templng[i]!=undefined)
          {
            this.sqlapi.inserthospical(dataset[i].providers_ID,templat[i],templng[i]).subscribe((res: any) => {console.log(res);});
        }

        }
      }, 10000)


}
getlocationfromaddress(state: string,address: string): Observable<any>{

var apikey="AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8";

var temp = "https://maps.googleapis.com/maps/api/geocode/json?address="+address+" "+state+"&key="+apikey;
//    https://maps.googleapis.com/maps/api/geocode/json?address=90210&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8;
return this.http.get<any>(temp);
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



getuserlocation(){
  console.log("inside get user location function");
  return {lat:this.userlat, lng:this.userlong};
}



setuserlocation(lat,long){

  this.userlat=lat;
  this.userlong=long;
 this.resetfocused();
}


}
