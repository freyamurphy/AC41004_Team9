import { Component, OnInit } from '@angular/core';
import {SharelocationService} from '../manuallocation/sharelocation.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

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
  constructor(private share: SharelocationService, private http: HttpClient) {
    this.showPosition = this.showPosition.bind(this);
   }

  ngOnInit() {

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
  }
  
  showError(error) {
    console.log(error)
  }
  //---------------------------------------------
  reverseGeo(lat: any, lng: any){
    var reverseUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat + "," + lng +"&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8"
    this.http.get(reverseUrl).subscribe(data => {
      var temp = data['results'];
    this.text = (temp[0].formatted_address);
    });
    
  }
  getMLocation()
  {

    this.zipcode = ((document.getElementById("addressM") as HTMLInputElement).value);
    
    this.baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.zipcode + "&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8&region=US";
    
    this.http.get(this.baseUrl).subscribe(data => {
      this.temp = data['results'];
      this.text = (this.temp[0].formatted_address);
      console.log(this.text);
      
    });
  }
  resetText(){
    this.text = "";
  }
}
