import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


//-------------------------------------------------------
@Injectable({
  providedIn: 'root'
})



export class ClassmanagerService {
  private messagesource = new BehaviorSubject<any>("defaultmessage");
  currentmessage= this.messagesource.asObservable();

  constructor() { }

givedata(){

  return this.currentmessage;
}


}






//-------------------------------------------------------
// class used to pull all data from test table in database
//------------------test--------------------------
@Injectable({
  providedIn: 'root'
})
export class test {
constructor(
first: string,
last: string
 ) {}
}
//-------------------------------------------------------


export interface LabelInfo {
  providerID: any,
  providerName: any,
  providerLat: any,
  providerLng: any,
  cost: any

}
