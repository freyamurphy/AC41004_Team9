import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

import { SqlapiService }from '../sqlapi.service';
import { GelocatorService }from '../gelocator.service';
import { ClassmanagerService }from '../classmanager.service';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  status0='';
   curfontsize=10;
   curlineheight=18;


       userlocation;
       usersIPAddress;
       userlat;
       userlong;
       lat = 51.678418;
       lng = 7.809007;
       public innerHeight: any;
       public innerWidth: any;

        isHidden: boolean;

       constructor(private sqlapi:SqlapiService ,private locate:GelocatorService , private classmanager:ClassmanagerService ,private interact:ComunicationService) { }


    ngOnInit() {
        this.innerWidth = window.innerWidth;
          this.innerHeight= window.innerHeight;
        this.isHidden = true;
    }


      @HostListener('window:resize', ['$event'])
      onResize(event) {
        this.innerWidth = window.innerWidth;
        this.innerHeight= window.innerHeight;
        this.resize()
      }

    getheight(heightpercentage){
    var tempvar =(this.innerHeight/100)*heightpercentage;
    return tempvar.toString();
    }

    getwidth(widthpercentage){
    var tempvar =(this.innerWidth/100)*widthpercentage;
    return tempvar.toString();
    }

    resize(){
    }
    turnbig(){
            if(this.curfontsize<28){
                document.getElementById('test').style.fontSize=(++this.curfontsize)+'pt';
                document.getElementById('test').style.lineHeight=(++this.curlineheight)+'pt';
            }
        }

        turnsmall(){
              if(this.curfontsize>10){
                  document.getElementById('test').style.fontSize=(--this.curfontsize)+'pt';
                  document.getElementById('test').style.lineHeight=(--this.curlineheight)+'pt';
              }
          }



    limitByDistance(limitNumber){
this.interact.limitdataByDistance(limitNumber);



    }



    // this needs to be in master
    getuserlocation()
    {
          document.getElementById("99").style.visibility = "visible";
                document.getElementById("44").style.visibility = "hidden";

        this.locate.getIpCliente().subscribe((res: any) => {this.usersIPAddress =res.ip;});// gets the user ip address

        // 5 seconds after that, uses the ip address to get latitude and longitude
        setTimeout( ()=>{
              this.locate.getlocation(this.usersIPAddress).subscribe((res: any) => {this.userlocation =JSON.stringify(res);});
              this.timerfunction();
         }, 5000)
    }


    timerfunction(){
      document.getElementById("99").style.visibility = "hidden";
      document.getElementById("44").style.visibility = "visible";
    }


    gethospitallocation(){

    }
  }
