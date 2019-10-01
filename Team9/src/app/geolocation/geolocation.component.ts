/// <reference types="@types/googlemaps" />
import { HttpClient } from '@angular/common/http';
import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { ComunicationService } from '../comunication.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  lat: any;
  long: any;
  zipcode : any;
  baseUrl : string;
  temp: any;
  text: any;
  textValue = "";// state
  error: boolean = false;
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
  reverseGeo(lat: any, lng: any){
    var reverseUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat + "," + lng +"&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8"
    this.http.get(reverseUrl).subscribe(data => {
      var temp = data['results'];
      this.text = (temp[0].formatted_address);
      this.sendtocomunicationservice(temp[0]);
    });

  }

  sendtocomunicationservice(locationInput:any){
  this.comunicate.setuseraddress(locationInput);

    console.log(locationInput);
  }


  getMLocation()
  {
//test
    this.zipcode = ((document.getElementById("addressBox") as HTMLInputElement).value);
    this.zipcode = this.zipcode.replace('#','');
    if(!this.zipcode){
      return;
    }
    
    this.baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.zipcode + "&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8&region=US";

    this.http.get(this.baseUrl).subscribe(data => {
      this.temp = data['results'];
      console.log(this.temp);
      console.log(this.zipcode);


      if(this.temp.length == 0){
        this.error = true;
        this.text=' ';
        this.openSnackBar("Invalid address", "");
      }
      else{
        this.error = false;
        this.text = (this.temp[0].formatted_address);
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
