import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {

  constructor( private comunicate:ComunicationService) { }

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
    this.comunicate.setuserlocation(position.coords.latitude , position.coords.longitude);

  }

  showError(error) {
    console.log(error)
  }

}
