/// <reference types="@types/googlemaps" />
import { HttpClient } from '@angular/common/http';
import { ElementRef, NgZone, OnInit, ViewChild, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  lat: any;
  long: any;
  addressInput : any;
  baseUrl : string;
  temp: any;
  text: any;
  textValue = "";
  public searchControl: FormControl;
  @ViewChild("search", {static:false})
  public searchElementRef: ElementRef;

  constructor( private http: HttpClient, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private comunicate:ComunicationService) {
    this.showPosition = this.showPosition.bind(this);
    
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
    console.log("button has been clicked.")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
      
    }
    else {
      console.log("Geolocation is not supported by this browser.")
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
    console.log(error)
  }
  //---------------------------------------------
  //Function to take a lat and long and turn them into an address
  reverseGeo(lat: any, lng: any){
    var reverseUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat + "," + lng +"&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8"
    this.http.get(reverseUrl).subscribe(data => {
      var temp = data['results'];
    this.text = (temp[0].formatted_address);
    });
    
  }
  //Function to get location if entered by the user manual
  getMLocation()
  {

    this.addressInput = ((document.getElementById("addressBox") as HTMLInputElement).value);
    //Gets users address input
    this.baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.addressInput + "&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8&region=US";
    //This url request to Google to get an array containing the possible addresses 
    this.http.get(this.baseUrl).subscribe(data => {

      this.temp = data['results'];
      console.log(this.temp.length);
      if(this.temp.length ==0  ){
        this.text="Can't find address";
      }
      else{
        this.text = (this.temp[0].formatted_address);
        console.log(this.text)
      }
      
    });
    //Requests data from Google and accesses the first full address that the JSON from google contains
  }
  resetText(){
    this.text = "";
  }
}
