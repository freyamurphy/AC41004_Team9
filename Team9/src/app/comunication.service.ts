import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

private focusedlocationSource = new Subject<any>();
focusedlocation$ = this.focusedlocationSource.asObservable();



  constructor() { }

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
