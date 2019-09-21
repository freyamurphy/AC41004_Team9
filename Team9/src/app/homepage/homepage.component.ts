import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

      userlocation;
      usersIPAddress;
      lat = 51.678418;
      lng = 7.809007;
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

// this needs to be in master
getuserlocation(){
      this.locate.getIpCliente().subscribe((res: any) => {this.testip =res.ip;});// gets the user ip address
// 5 seconds after that, uses the ip address to get latitude and longitude
      setTimeout( ()=>{
   this.locate.getlocation(this.testip).subscribe((res: any) => {this.location =JSON.stringify(res);})
     }, 5000)


}

  }
