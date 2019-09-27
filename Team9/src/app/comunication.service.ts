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
usersort:any;

private arrayofstufflocationSource = new Subject<any>();
arrayofstuff$ = this.arrayofstufflocationSource.asObservable();

private userlocationSource = new Subject<any>();
userlocation$ = this.userlocationSource.asObservable();

private useruseraddressSource = new Subject<any>();
useraddress$ = this.useruseraddressSource.asObservable();


resultlength:any;
userstate:any;

  constructor(private http: HttpClient,private sqlapi:SqlapiService ) { }

// runs a search
runsearch(code) {
// todo make sure this runs as an * if there is no address
  console.log("runnign a sql seaech inside communicaton manager with code ",code);
 
   console.log(this.userstate);
  this.sqlapi.searchWithStateAndDRGCodeFunction(this.userstate,code).subscribe((res: any) => {this.arrayofstufflocationSource.next(res);this.resultlength=res.length;this.hospitalHandler(res);this.usersort=res;this.sortPriceFunction();});
 

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

 
sortPriceFunction(){
//Set the sorting direction to ascending:
/*
  var temp ;
      for(let i=0; i<this.usersort.length; i++) {

          for(let j=this.usersort.length-1; j>i; j--) {
              if(this.usersort[j].averageTotalPayments < this.usersort[j-1].averageTotalPayments)
              {
                //  [this.usersort[j+1], this.usersort[j]] = [this.usersort[j], this.usersort[j+1]];
  temp=this.usersort[j-1];
  this.usersort[j-1]=this.usersort[j];
  this.usersort[j]=temp;
              }
          }
      }
*/
var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

   switching = true;
   //Set the sorting direction to ascending:
   dir = "asc";
   /*Make a loop that will continue until
   no switching has been done:*/
   while (switching) {
       //start by saying: no switching is done:
       switching = false;
       rows = this.usersort;
      // rows=this.usersort.rows;
       /*Loop through all table rows (except the
       first, which contains table headers):*/
       for (i = 0; i < (rows.length - 1); i++) {
           //start by saying there should be no switching:
           shouldSwitch = false;
           /*Get the two elements you want to compare,
           one from current row and one from the next:*/
           x = rows[i].averageTotalPayments;
           y = rows[i + 1].averageTotalPayments;
           /*check if the two rows should switch place,
           based on the direction, asc or desc:*/
           if (dir == "asc") {
               if (x > y) {
                   //if so, mark as a switch and break the loop:
                   shouldSwitch= true;
                   break;
               }
           } else if (dir == "desc") {
               if (x < y) {
                   //if so, mark as a switch and break the loop:
                   shouldSwitch = true;
                   break;
               }
           }
       }
       if (shouldSwitch) {
           /*If a switch has been marked, make the switch
           and mark that a switch has been done:*/
           [this.usersort[i+1], this.usersort[i]] = [this.usersort[i], this.usersort[i+1]]
           switching = true;
           //Each time a switch is done, increase this count by 1:
           switchcount ++;
       } else {
           /*If no switching has been done AND the direction is "asc",
           set the direction to "desc" and run the while loop again.*/
           if (switchcount == 0 && dir == "asc") {
               dir = "desc";
               switching = true;
           }
       }
   }

        return this.usersort;


}

 hospitalHandler(dataset){

      for(let i = 0 ; i < this.resultlength; i++){
        var templat=1000;
        var templng=1000;
      //  this.getlocationfromaddress(dataset[i].State,dataset[i].StreetAddress).subscribe((res: any) => {templat= res.geometry.lat; templng= res.geometry.lng});;
if(templat!=1000){
    //    this.sqlapi.inserthospical(dataset[i].providers_ID,templat,templng);


      }

}
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







setuserlocation(lat,long){

  this.userlat=lat;
  this.userlong=long;
 this.resetfocused();
}


}
