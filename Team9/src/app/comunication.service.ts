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

userlat:any;
userlong:any;

private arrayofstufflocationSource = new Subject<any>();
arrayofstuff$ = this.arrayofstufflocationSource.asObservable();



  constructor(private sqlapi:SqlapiService ) { }

// runs a search
runsearch(state,code) {
    console.log("runsearch");
     console.log(state+code);
  this.sqlapi.searchWithStateAndDRGCodeFunction("NY","032").subscribe((res: any) => {this.arrayofstufflocationSource.next(res);});

}
// returns search results from runsearch function
getsearchresults(): Observable<any> {
    return this.arrayofstufflocationSource.asObservable();
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
  //this.userlat=lat;
  //this.userlong=long;
//  this.resetfocused();
}


}
