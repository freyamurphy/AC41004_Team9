import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


//-------------------------------------------------------
@Injectable({
  providedIn: 'root'
})



export class ClassmanagerService {



  constructor() { }





}
export interface LabelInfo {
  providerID: any,
  providerName: any,
  providerLat: any,
  providerLng: any,
  cost: any
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
 
export interface searchWithStateAndDRGCodeInterface {
  pricingID:any;
  totalDischarges:any;
  averageCoveredCharges:any;
  averageTotalPayments:any;
  averageMedicarePayments:any;
  pricingYEAR:any;
  condition_Code:any;
  providers_ID:any;
  providerName:any;
  City:any;
  StreetAddress:any;
  State:any;
  ZipCode:any;
  lat:any;
  lng:any;
  Description:any;
}
