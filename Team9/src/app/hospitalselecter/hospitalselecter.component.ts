import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hospitalselecter',
  templateUrl: './hospitalselecter.component.html',
  styleUrls: ['./hospitalselecter.component.css']
})

export class HospitalselecterComponent implements OnInit {

  hospitalList: any[] = [
  {
    dRGDefinition: 39,
    description: "EXTRACRANIAL PROCEDURES W/O CC/MCC",
    hospital: "SOUTHEAST ALABAMA MEDICAL CENTER",
    cost : 4000
  },
  {
    dRGDefinition: 41,
    description: "TOE AMPUTATION",
    hospital: "NORTH TEXAS MEDICAL SCHOOL",
    cost : 4003

  },
  {
    dRGDefinition: 15,
    description: "BROKEN LEG SURGERY",
    hospital: "WASHINGTON MEDICAL",
    cost : 210

  },
  {
    dRGDefinition: 10,
    description: "CRACKED RIB",
    hospital: "EASTERN MICHIGAN",
    cost : 953

  },
  {
    dRGDefinition: 29,
    description: "FRACTURED WRIST",
    hospital: "NORTH-EASTERN KENTUCKY WALK-IN CENTRE",
    cost : 120

  },
  {
    dRGDefinition: 93,
    description: "BURNT RETINA",
    hospital: "CALIFORNA CENTRAL",
    cost : 60000

  },
];

public innerHeight: any;
public innerWidth: any;


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


resize(){




}

//[style.height]="getheight(50)"[style.width]="getwidth(50)"



}
