import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {SharelocationService} from '../sharelocation.service'
import { ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
@Component({
  selector: 'app-manuallocation',
  templateUrl: './manuallocation.component.html',
  styleUrls: ['./manuallocation.component.css']
})
export class ManuallocationComponent implements OnInit {
  zipcode : any;
  baseUrl : string;
  reverseUrl: string;
  temp : any;
  temp2 : any;
  autoValue: any;
  message: any;
  lat: any;
  lng: any;
  constructor(private http: HttpClient, private share: SharelocationService) { }

  ngOnInit() {
    this.share.currentMessage.subscribe(message => this.message = message)
    //this.setLocation();
  }
  setLocation(){
    var t = JSON.stringify(this.message);
    console.log(this.message);
    /*this.reverseUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.message+"&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8"
    this.http.get(this.reverseUrl).subscribe(data => {
      this.temp2 = data['results'];
      console.log(this.temp[0]);
    });*/
  }
  getLocation()
  {
    console.log(this.message);

    this.zipcode = ((document.getElementById("addressM") as HTMLInputElement).value);
    
    this.baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.zipcode + "&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8&region=US";
    
    this.http.get(this.baseUrl).subscribe(data => {
      this.temp = data['results'];
      console.log(this.temp[0].geometry.bounds.northeast);
    });
  }
}


