import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';
import { Subscription } from 'rxjs/Subscription';
import { ClassmanagerService }from '../classmanager.service';
import { Observable, throwError, of  } from 'rxjs';
import { SqlapiService }from '../sqlapi.service';
import { GelocatorService }from '../gelocator.service';


@Component({
  selector: 'app-hospitalselecter',
  templateUrl: './hospitalselecter.component.html',
  styleUrls: ['./hospitalselecter.component.css']
})

export class HospitalselecterComponent implements OnInit {
  @ViewChild('hospitalselector' , {static: false}) elementView: ElementRef;
  viewHeight: number;
hospitalList: any[]=[];

public innerHeight: any;
public innerWidth: any;
public code: any;
public state: any;
 testvar:any;

//hospitalPrice: any = (this.hospitalList.averageTotalPayments - this.hospitalList.averageMedicarePrice);
//(hospitalPrice);


oldcontext:any;// used for selecting in the function highlight
boolforselector:any="white";


p: number = 1;


constructor(private interact:ComunicationService, private database:ClassmanagerService,private sqlapi:SqlapiService ,private locate:GelocatorService) { }

steven(index,p):any{

 //("index",index,"page",p,"muiltpy",index+8*(p-1));
  var display = this.hospitalList[index+8*(p-1)].averageTotalPayments - this.hospitalList[index+8*(p-1)].averageMedicarePayments;
  //var t = this.hospitalList[index];
//  (display);
  return display;

}
steven2(index,p):any{
//console.log("seven2 position", index , " on page " , p , " = ",this.hospitalList[index+8*(p-1)].providerName, " lat : ",this.hospitalList[index+8*(p-1)].lat, "lng : ",this.hospitalList[index+8*(p-1)].lng, " year : ",this.hospitalList[index+8*(p-1)].pricingYEAR);
  return this.hospitalList[index+8*(p-1)].providerName;

}

steven3(index,p):any{

  return this.hospitalList[index+8*(p-1)].Distance;

}
ngOnInit() {


  this.innerWidth = window.innerWidth;
  this.innerHeight= window.innerHeight;
  //this.interact.runsearch("a","b");
  this.interact.getsearchresults().subscribe((res: any) => {
  //  this.interact.limitdataByDistance(100);
  //  this.interact.setdistancebeingsearched(100);
    this.hospitalList =res;
  //   this.interact.limitdataByDistance(100);
  });

//this.sqlapi.searchWithStateAndDRGCodeFunction("NY","033").subscribe((res: any) => {this.hospitalList =res;});
}
@HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  this.innerHeight= window.innerHeight;
}
getheight(heightpercentage){
  var tempvar =(this.innerHeight/100)*heightpercentage;
  return tempvar.toString();
}

getwidth(widthpercentage){
  var tempvar =(this.innerWidth/100)*widthpercentage;
  return tempvar.toString();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
getdistance(hospitalID,index,p){


this.hospitalList[index+8*(p-1)].Distance;
}


senddatatocommunicationservice(data:any){

  this.interact.setfocusedlocation(data);
}
getuser(data:any){

  this.interact.setfocusedlocation(data);
}


getColor(index,p)
{
  if(this.hospitalList[index+8*(p-1)].pricingYEAR ==2016)
  {

    return "yellow";

  }else if (this.hospitalList[index+8*(p-1)].pricingYEAR ==2017){

  return "green";

}else {

return "red";

}
}

getReliability(index,p)
{
  if(this.hospitalList[index+8*(p-1)].pricingYEAR ==2016)
  {

    return "Reliability Rating - How Recent is the Data? This data is reliable";

  }else if (this.hospitalList[index+8*(p-1)].pricingYEAR ==2017){

  return "Reliability Rating - How Recent is the Data? This data is very reliable";

}else {

return "Reliability Rating - How Recent is the Data? This data is unreliable";

}


}





highlight(index, p){
  var temp = {
    lat:this.hospitalList[index+8*(p-1)].lat,
    lng:this.hospitalList[index+8*(p-1)].lng
  };

  if(this.oldcontext != undefined)
  {
    if(index!=this.oldcontext)
    {
      document.getElementById(this.oldcontext).style.backgroundColor = "white";
      document.getElementById(index).style.backgroundColor = "lightblue";
      this.oldcontext= index;
      this.senddatatocommunicationservice(temp);
    }
    else  if(index==this.oldcontext && this.boolforselector=="blue")
    {
      document.getElementById(index).style.backgroundColor = "white";
      this.oldcontext= index;
      this.boolforselector="white";
     this.interact.resetfocused();
    }
    else  if(index==this.oldcontext && this.boolforselector=="white")
    {
      document.getElementById(index).style.backgroundColor = "lightblue";
      this.oldcontext= index;
      this.boolforselector="blue";
      this.senddatatocommunicationservice(temp);
    }

  }
  else
  {
    document.getElementById(index).style.backgroundColor = "lightblue";
    this.oldcontext= index;
    this.senddatatocommunicationservice(temp);
  }


}





}
