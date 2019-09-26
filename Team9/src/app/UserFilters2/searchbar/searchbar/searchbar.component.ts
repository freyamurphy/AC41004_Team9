import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit{
  public innerHeight: any;
  public innerWidth: any;

  //@HostListener('window:resize', ['$event'])

  constructor() { }

  ngOnInit() {

}

  scroll(){
    document.getElementById("hospitals").scrollIntoView({behavior:"smooth"});

  }


submit(){


  
}


}
