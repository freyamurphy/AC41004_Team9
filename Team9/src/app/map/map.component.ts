import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom = 13;

  userLocation = {lat: 56.4620, lng: -2.9707};

  // marker for each hospital
  ninewells = {
    lat: 56.4643,
    lng: -3.0379,
    label: "1",
    info: "Ninewells Hospital: $1000",
  };
  royalVictoria = {
    lat: 56.4628,
    lng: -3.0141,
    label: "2",
    info: "Royal Victoria Hospital: $1500",
  };
  kingsCross = {
    lat: 56.4762,
    lng: -2.9856,
    label: "3",
    info: "Kings Cross Hospital: $900",
  };

  hospitals = [this.ninewells, this.royalVictoria, this.kingsCross]

  constructor() { }

  ngOnInit() {
  }

}
