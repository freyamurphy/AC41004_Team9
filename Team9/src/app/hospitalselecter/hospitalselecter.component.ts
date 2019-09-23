import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hospitalselecter',
  templateUrl: './hospitalselecter.component.html',
  styleUrls: ['./hospitalselecter.component.css']
})

export class HospitalselecterComponent implements OnInit {

  hospitalList: any = [
  {
    dRGDefinition: 39,
    description: "EXTRACRANIAL PROCEDURES ",
    hospital: "SOUTHEAST ALABAMA MEDICAL CENTER",
    cost : 4000,
    lat: 56.4643,
    lng: -3.0379,
  },
  {
    dRGDefinition: 41,
    description: "TOE AMPUTATION",
    hospital: "NORTH TEXAS MEDICAL SCHOOL",
    cost : 4003,
    lat: 56.4762,
    lng: -2.9856,

  },
  {
    dRGDefinition: 15,
    description: "BROKEN LEG SURGERY",
    hospital: "WASHINGTON MEDICAL",
    cost : 210,
    lat: 56.4643,
    lng: -3.0379,

  },
  {
    dRGDefinition: 10,
    description: "CRACKED RIB",
    hospital: "EASTERN MICHIGAN",
    cost : 953,
    lat: 56.4643,
    lng: -3.0379,

  },
  {
    dRGDefinition: 29,
    description: "FRACTURED WRIST",
    hospital: "NORTH-EASTERN KENTUCKY WALK-IN CENTRE",
    cost : 120,
    lat: 56.4643,
    lng: -3.0379,

  },
  {
    dRGDefinition: 93,
    description: "BURNT RETINA",
    hospital: "CALIFORNA CENTRAL",
    cost : 60000,
    lat: 56.4643,
    lng: -3.0379,

  },
];

public innerHeight: any;
public innerWidth: any;
 testvar:any;

oldcontext:any;// used for selecting in the function highlight
boolforselector:any="white";


p: number = 1;


constructor() { }



ngOnInit() {
  this.innerWidth = window.innerWidth;
  this.innerHeight= window.innerHeight;
}
@HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  this.innerHeight= window.innerHeight;
  this.resize()
}
getheight(heightpercentage){
var tempvar =(this.innerHeight/100)*heightpercentage;
return tempvar.toString();
}

getwidth(widthpercentage){
var tempvar =(this.innerWidth/100)*widthpercentage;
return tempvar.toString();
}

highlight(index){
  if(this.oldcontext != undefined)
  {
    if(index!=this.oldcontext)
    {
      document.getElementById(this.oldcontext).style.backgroundColor = "white";
      document.getElementById(index).style.backgroundColor = "lightblue";
      this.oldcontext= index;
    }
    else  if(index==this.oldcontext && this.boolforselector=="blue")
    {
      document.getElementById(index).style.backgroundColor = "white";
      this.oldcontext= index;
      this.boolforselector="white";
    }
    else  if(index==this.oldcontext && this.boolforselector=="white")
    {
      document.getElementById(index).style.backgroundColor = "lightblue";
      this.oldcontext= index;
      this.boolforselector="blue";
    }

  }
  else
  {
    document.getElementById(index).style.backgroundColor = "lightblue";
    this.oldcontext= index;
  }


this.putinfocus(index);


}
putinfocus(index){

// focus map on selected hospital

}


resize(){




}

//[style.height]="getheight(50)"[style.width]="getwidth(50)"



}
