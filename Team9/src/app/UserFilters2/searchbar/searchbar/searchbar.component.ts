import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

}



  scroll(){
      document.getElementById("hospitals").scrollIntoView({behavior: 'smooth'});
    }


}
