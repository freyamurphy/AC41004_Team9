import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


//-------------------------------------------------------
@Injectable({
  providedIn: 'root'
})



export class ClassmanagerService {

userlat:any;
userlong:any;
latInContext:any;
longInContext:any;

private messagesource = new BehaviorSubject<any>({lat: 56.4620, lng: -2.9707});
 currentmessage= this.messagesource.asObservable();

  constructor() { }


givedata(){
  console.log("within class manager ");
  console.log(this.currentmessage);
   return this.currentmessage;
}
setdata(a){
   this.currentmessage=a;
   console.log(this.currentmessage);
}
getuserlatitude(){

return this.userlat;
}

getuserlongitude(){

return this.userlong;
}


getLatitudeInContext(){


return this.latInContext;
}

getLongitudeInContext(){


return this.longInContext;
}



setuserlatitude(a){

this.userlat=a;
}

setuserlongitude(a){

this.userlong=a;
}


setLatitudeInContext(a){

this.latInContext=a;

}

setLongitudeInContext(a){

 this.longInContext=a;

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
