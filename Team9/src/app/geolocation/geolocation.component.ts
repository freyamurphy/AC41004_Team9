/// <reference types="@types/googlemaps" />
import { HttpClient } from '@angular/common/http';
import { ElementRef, NgZone, OnInit, ViewChild, Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { ComunicationService } from '../comunication.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { INgxSelectOption } from 'ngx-select-ex';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  lat: any;
  long: any;
  zipcode : any;
  baseUrl : string;
  temp: any;
  text: any;
  textValue = "";// state
  error: boolean = false;
  stateValue: any;
  public ngxControl = new FormControl();

stateselecrotran:boolean=false;
  states: string[] =[ //List of states

    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
   "West Virginia",
    "Wisconsin",
    "Wyoming",
  ]
  public searchControl: FormControl;
  @ViewChild("search", {static:false})
  public searchElementRef: ElementRef;

  constructor( private http: HttpClient, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private comunicate:ComunicationService, private _snackBar: MatSnackBar) {
    this.showPosition = this.showPosition.bind(this);


   }
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  switch(){
    if((document.getElementById("stateSelector") as HTMLInputElement).disabled == true){

      (document.getElementById("addressBox") as HTMLInputElement).value = "";

      (document.getElementById("addressBox") as HTMLInputElement).disabled = true;
      (document.getElementById("save") as HTMLInputElement).disabled = true;

      (document.getElementById("stateSelector") as HTMLInputElement).disabled = false;

    }
    else{
      (document.getElementById("addressBox") as HTMLInputElement).disabled = false;
      (document.getElementById("save") as HTMLInputElement).disabled = false;
      (document.getElementById("addressBox") as HTMLInputElement).value = "";

      (document.getElementById("stateSelector") as HTMLInputElement).disabled = true;
      this.stateValue = "";
    }

  }
  ngOnInit() {
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }

  getLocation() {
    this.error = false;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    }
    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log("Lat: " +  position.coords.latitude);
    console.log("Lng: " + position.coords.longitude);
    this.reverseGeo(lat,lng);
    this.comunicate.setuserlocation(position.coords.latitude , position.coords.longitude);

  }

  showError(error) {
    console.log(error);
  }
  //---------------------------------------------
  reverseGeo(lat: any, lng: any){ //Method to translate lat and long to an address
    var reverseUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat + "," + lng +"&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8"
    this.http.get(reverseUrl).subscribe(data => {
      var temp = data['results'];
      this.text = (temp[0].formatted_address);
      this.sendtocomunicationservice(temp[0]);
    });

  }

  sendtocomunicationservice(locationInput:any){

    if(this.stateselecrotran){this.comunicate.setuseraddress(locationInput,1);}else{this.comunicate.setuseraddress(locationInput,0);}// 1 for state selector 0 for address
  //this.comunicate.setuseraddress(locationInput);

//    console.log(locationInput);
  }
  //RYAN
  stateSelector(){
    this.textValue = this.stateValue + ", USA";
    this.stateselecrotran=true;
      console.log( ", USA");
      this.comunicate.settypeofseaech(false);
  }
  getMLocation()
  {

    this.zipcode = this.textValue; //Gets value in textbox
    this.zipcode = this.zipcode.replace('#',''); //# screws search up
    console.log(this.zipcode);
    //this.comunicate.settypeofseaech(0);

    this.baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.zipcode + "&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8&region=US";
    //queries google
    this.http.get(this.baseUrl).subscribe(data => {
      this.temp = data['results'];
      if(this.temp.length == 0){ //If no results are found
        this.error = true;
        this.text=' ';
        this.openSnackBar("Invalid address", "");
      }
      else{
        this.error = false;
        this.text = (this.temp[0].formatted_address);
        console.log(this.text);
        this.sendtocomunicationservice(this.temp[0]);
            this.comunicate.setuserlocation(this.temp[0].geometry.location.lat,this.temp[0].geometry.location.lng);
      }
//test

    });

  }
  resetText(){
    this.text = "";
  }
}
