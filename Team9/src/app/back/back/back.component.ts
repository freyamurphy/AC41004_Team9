import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {
  //position: TooltipPosition = 'right';
  position = new FormControl('right');
  constructor() { }

  ngOnInit() {
  }
  scroll(){
    document.getElementById("top").scrollIntoView({behavior:"smooth"});
    
  }

}
