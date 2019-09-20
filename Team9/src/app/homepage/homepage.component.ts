import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

      public innerHeight: any;
      public innerWidth: any;
      constructor() { }


    ngOnInit() {
        this.innerWidth = window.innerWidth;
          this.innerHeight= window.innerHeight;
    }


      @HostListener('window:resize', ['$event'])
      onResize(event) {
        this.innerWidth = window.innerWidth;
        this.innerHeight= window.innerHeight;
        this.resize()
      }

    getheight(heightpercentage){
    var tempvar =(this.innerHeight/100)*heightpercentage;
    console.log(tempvar);
    return tempvar.toString();
    }



    getwidth(widthpercentage){
    var tempvar =(this.innerWidth/100)*widthpercentage;
    console.log(tempvar);
    return tempvar.toString();
    }


    resize(){




    }

    //[style.height]="getheight(50)"[style.width]="getwidth(50)"



  }
