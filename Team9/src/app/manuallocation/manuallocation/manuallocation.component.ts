import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-manuallocation',
  templateUrl: './manuallocation.component.html',
  styleUrls: ['./manuallocation.component.css']
})
export class ManuallocationComponent implements OnInit {

  zipcode : any;
  baseUrl : string;
  temp : any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  getLocation()
  {
    
    this.zipcode = ((document.getElementById("addressM") as HTMLInputElement).value);
    console.log("H");
    
    this.baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.zipcode + "&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8&region=US";
    
    this.http.get(this.baseUrl).subscribe(data => {
      this.temp = data['results'];
      console.log(this.temp[0].geometry.bounds.northeast);
    });
  }
}


