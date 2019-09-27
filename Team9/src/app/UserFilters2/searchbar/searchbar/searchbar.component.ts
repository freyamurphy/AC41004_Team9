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
  list: any[] =[];
  placeholder : string = "Search for DRG Code or Description of Condition";

  //@HostListener('window:resize', ['$event'])

  constructor(private interact:ComunicationService) { }

  ngOnInit() {
    //this.placeholder = "hello";
    this.interact.getsearchresults().subscribe((res: any) => {this.list =res;console.log(res);});
 
  }

  autocomplete(){
    //this.interact.runsearch(this.value);
    console.log(this.list[0]);
  }
submitfunction(){



}



  scroll(){
    document.getElementById("hospitals").scrollIntoView({behavior:"smooth"});
  }



submit(){
 console.log(this.value);
 this.interact.runsearch(this.value);
//////////////////////////////

}


}
