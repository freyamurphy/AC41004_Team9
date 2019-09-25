import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {

  constructor() { }

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
    console.log("Lat: " + position.coords.latitude)
    console.log("Lng: " + position.coords.longitude)
  }

  showError(error) {
    console.log(error)
  }

}
