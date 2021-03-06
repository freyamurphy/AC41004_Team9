import { Component, OnInit } from '@angular/core';
import { SqlapiService }from '../../sqlapi.service';
@Component({
  selector: 'app-rangeslider',
  templateUrl: './rangeslider.component.html',
  styleUrls: ['./rangeslider.component.css']
})
export class RangesliderComponent implements OnInit {

  ranges:number;
  description:string;
  constructor(private sqlapi:SqlapiService) { }

  ngOnInit() {
    this.description = "temp"
    this.getRange();
  }
  getRange() : void {
    this.sqlapi.sliderTest().subscribe(ranges => this.ranges = ranges);
  }
  

}
