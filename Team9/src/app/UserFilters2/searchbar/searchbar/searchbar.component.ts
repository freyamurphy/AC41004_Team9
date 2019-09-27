import { Component, OnInit, HostListener } from '@angular/core';
import { ComunicationService } from '../../../comunication.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})


export class SearchbarComponent implements OnInit{
  public innerHeight: any;
  public innerWidth: any;
  value:any;
  placeholder : string = "Search for DRG Code or Description of Condition";
  //@HostListener('window:resize', ['$event'])

  constructor(private comunicate:ComunicationService) { }

  ngOnInit() {
    //this.placeholder = "hello";
  }


submitfunction(){



}



  scroll(){
    document.getElementById("hospitals").scrollIntoView({behavior:"smooth"});
  }


 
submit(){
 console.log(this.value);
 this.comunicate.runsearch(this.value);
//////////////////////////////

}

 
}
