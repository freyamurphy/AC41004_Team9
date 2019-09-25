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
  constructor(private share: SharelocationService, private http: HttpClient) {
    this.showPosition = this.showPosition.bind(this);
   }

  ngOnInit() {

  }

  getLocation() {
    //this.share.changeMessage(this.lat + "" + this.long)
    
    
    console.log("button has been clicked.")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
      
    }
    else {
      console.log("Geolocation is not supported by this browser.")
    }
    

  }

  showPosition(position) {
    //this.lat = position.coords.latitude;
    //this.long = position.coords.longitude;
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log("Lat: " +  position.coords.latitude);
    console.log("Lng: " + position.coords.longitude);
    this.reverseGeo(lat,lng);
    //this.share.changeMessage("lat: " + lat + "," + + " lng" + lng);
  }
  reverseGeo(lat: any, lng: any){
    var reverseUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat + "," + lng +"&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8"
    this.http.get(reverseUrl).subscribe(data => {
      var temp = data['results'];
    this.share.changeMessage(temp[0].formatted_address);
    
    });
  }
  showError(error) {
    console.log(error)
  }

}
