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



private arrayofstufflocationSource = new Subject<any>();
arrayofstuff$ = this.arrayofstufflocationSource.asObservable();



  constructor(private sqlapi:SqlapiService ) { }


runsearch(state,code) {
    console.log("runsearch");
     console.log(state+code);
  this.sqlapi.searchWithStateAndDRGCodeFunction("NY","032").subscribe((res: any) => {this.arrayofstuff$ =res;});

}

getsearchresults(): Observable<any> {
    console.log("get search ");
        console.log(this.arrayofstufflocationSource);
    return this.arrayofstufflocationSource.asObservable();
}

// recieves the location information.
setfocusedlocation(locationInput:any)
{
  this.focusedlocationSource.next(locationInput);
  console.log("focused has changed ");
    console.log(this.focusedlocation$);
    console.log("-----------");
}

getfocusedlocation(): Observable<any> {
    return this.focusedlocationSource.asObservable();
}
resetfocused(){

this.focusedlocationSource.next({lat: 56.4620, lng: -2.9707});

}





}
