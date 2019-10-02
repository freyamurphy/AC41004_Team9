import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { SqlapiService }from '../sqlapi.service';

import { HostListener } from "@angular/core";
import { GelocatorService }from '../gelocator.service';
import { ClassmanagerService }from '../classmanager.service';
import { ComunicationService } from '../comunication.service';
import { searchWithStateAndDRGCodeInterface,test }from '../classmanager.service';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
data:any;
    array_or_test_clases: any;
        testip: any;
        location:any;
        setPosition: any;


value:any;

testdistances:any;


arrayofstuff:test[];


  testofvarpassing:any;
  testofvarpassing2:any;


         userlocation;
         usersIPAddress;
         userlat;
         userlong;
         lat = 51.678418;
         lng = 7.809007;
         public innerHeight: any;
         public innerWidth: any;

          isHidden: boolean;

         constructor(private sqlapi:SqlapiService ,private interact:ComunicationService,private locate:GelocatorService , private classmanager:ClassmanagerService ) { }






      ngOnInit() {
          this.innerWidth = window.innerWidth;
          this.innerHeight= window.innerHeight;

          this.interact.runtestsearch().subscribe((res: test[]) => {this.arrayofstuff =res;});
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
