import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Observable } from 'rxjs';
import { searchWithStateAndDRGCodeInterface }from './classmanager.service';
import { SqlapiService }from './sqlapi.service';
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






  constructor(private sqlapi:SqlapiService ) { }

// runs a search
runsearch(code) {
// todo make sure this runs as an * if there is no address
  console.log("runnign a sql seaech inside communicaton manager with code ",code);


//this.useruseraddressSource  todo escape this shit
  this.sqlapi.searchWithStateAndDRGCodeFunction("CA",code).subscribe((res: any) => {this.arrayofstufflocationSource.next(res);});

}
// returns search results from runsearch function
getsearchresults(): Observable<any> {

    return this.arrayofstufflocationSource.asObservable();
}

getstatefromaddress(locationInput:any):string{
    for(let i = 0 ; i < locationInput.address_components.length; i++)
    {
        if(locationInput.address_components[i].types[0]=="administrative_area_level_1")
        {
          console.log(locationInput.address_components[i].short_name);
          return locationInput.address_components[i].short_name;
        }
    }
//todo check if this can ever be missed (not likely)
}

sortPriceFunction(){
this.usersort=this.getsearchresults();
alert(this.usersort.next(res));


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
