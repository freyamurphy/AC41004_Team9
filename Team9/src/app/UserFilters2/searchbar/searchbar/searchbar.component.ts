import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
  public innerHeight: any;
  public innerWidth: any;

  //@HostListener('window:resize', ['$event'])

  constructor() { }

  ngOnInit() {

}



  scroll(){
    console.log("t");
      document.getElementById("hospitals").scrollIntoView({behavior: 'smooth'});
    }



}
