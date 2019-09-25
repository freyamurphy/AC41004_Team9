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
    
    this.baseUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=99501&key=AIzaSyA7eaqYll1QlUO_OpGtshZQHhNbbKUjWd8";
    
    this.http.get(this.baseUrl).subscribe(value=>{
      this.temp = JSON.stringify(value);
      this.temp = JSON.parse(this.temp);
      console.log(this.temp);
}, error=>{ });;
  }
}


