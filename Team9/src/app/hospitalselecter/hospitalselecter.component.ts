import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitalselecter',
  templateUrl: './hospitalselecter.component.html',
  styleUrls: ['./hospitalselecter.component.css']
})

export class HospitalselecterComponent implements OnInit {

  hospitalList: Section[] = [
  {
    name: 'Hospital',
    address: '101 Dundee Street Dundee DD1 2AS',
  },
  {
    name: 'Maybe',
    address: '101 V&A Street Dundee DD1 2AG',
  },
  {
    name: 'This',
    address: 'University Dundee DD2 3AJ',
  },
  {
    name: 'Will',
    address: 'Not doing anymore Dundee DD4 1RC',
  },
  {
    name: 'Work',
    address: '101 V&A Street Dundee DD1 2AG',
  },
  {
    name: 'Maybe',
    address: '101 V&A Street Dundee DD1 2AG',
  },
];

  constructor() { }

  ngOnInit() {
  }

}
