import { Component, OnInit, HostListener } from '@angular/core';
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

hospitalList: any[]=[];

public innerHeight: any;
public innerWidth: any;
public code: any;
public state: any;
 testvar:any;

//hospitalPrice: any = (this.hospitalList.averageTotalPayments - this.hospitalList.averageMedicarePrice);
//console.log(hospitalPrice);


oldcontext:any;// used for selecting in the function highlight
boolforselector:any="white";


p: number = 1;


constructor(private interact:ComunicationService, private database:ClassmanagerService,private sqlapi:SqlapiService ,private locate:GelocatorService) { }

steven(index,p):any{
if(index==0){
//index =p-1;

}

  var display = this.hospitalList[index*p].averageTotalPayments - this.hospitalList[index*p].averageMedicarePayments;
  //var t = this.hospitalList[index];
//  console.log(display);
  return display;
}
steven2(index,p):any{
  if(index==0){
  //  index =p-1;

  }
  return this.hospitalList[index*p].providerName;
}//fuck steve

steven3(index,p):any{
  if(index==0){
  //  index =p-1;

  }
  return this.hospitalList[index*p].Distance;
}
ngOnInit() {


  this.innerWidth = window.innerWidth;
  this.innerHeight= window.innerHeight;
  //this.interact.runsearch("a","b");
  this.interact.getsearchresults().subscribe((res: any) => {this.hospitalList =res;console.log(res);});
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
getdistance(hospitalID,index,pagenumber){
  if(index==0){
  index =pagenumber-1;

  }
  var userlocation;
  var user = this.interact.getuserlocation().subscribe((res: any) => {userlocation =res;console.log(res);});

//  console.log(userlocation.lat," aa ",userlocation.lng);
//  return  this.locate.getdistance(this.hospitalList[index*pagenumber].lat,this.hospitalList[index*pagenumber].lng,userlocation.lat,userlocation.lng);


  return  this.locate.getdistance(this.hospitalList[index*pagenumber].lat,this.hospitalList[index*pagenumber].lng,userlocation.lat,userlocation.lng);



}


senddatatocommunicationservice(data:any){

  this.interact.setfocusedlocation(data);
}
getuser(data:any){

  this.interact.setfocusedlocation(data);
}


getColor(index,pagenumber)
{
  if(this.hospitalList[index*pagenumber].pricingYEAR <2012)
  {

    return "red";

  }
  return "green";

}





highlight(index){
  var temp = {
    lat:this.hospitalList[index].lat,
    lng:this.hospitalList[index].lng
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


this.putinfocus(index);


}
putinfocus(index){

// focus map on selected hospital

}

testfunction(){
//  console.log("a");
//  console.log(this.hospitalList);
}

//[style.height]="getheight(50)"[style.width]="getwidth(50)"



}
