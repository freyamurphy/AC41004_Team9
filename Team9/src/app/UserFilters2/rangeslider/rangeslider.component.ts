import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-rangeslider',
  templateUrl: './rangeslider.component.html',
  styleUrls: ['./rangeslider.component.css']
})
export class RangesliderComponent implements OnInit {

  ranges:number[];
  constructor() { }

  ngOnInit() {
    this.ranges = [1, 10];
    
  }

  

}
