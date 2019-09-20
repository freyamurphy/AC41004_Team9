import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitalselecter',
  templateUrl: './hospitalselecter.component.html',
  styleUrls: ['./hospitalselecter.component.css']
})
export class HospitalselecterComponent implements OnInit {

  hospitalList: any[] = [
  {
    name: 'Hospital',
  },
  {
    name: 'Maybe',
  },
  {
    name: 'This',
  },
  {
    name: 'Will',
  },
  {
    name: 'Work',
  },
  {
    name: 'Maybe',
  },
];

  constructor() { }

  ngOnInit() {
  }

}
