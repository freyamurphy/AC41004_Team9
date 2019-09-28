import { Component, OnInit, HostListener } from '@angular/core';
import { ComunicationService } from '../../../comunication.service';
import { SqlapiService } from 'src/app/sqlapi.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{
  public innerHeight: any;
  public innerWidth: any;
  t;
  selected: string = "";
  value:any;
  list: any[] =[];
  placeholder : string = "Search for DRG Code or Description of Condition";
  constructor(private interact:ComunicationService, private sql:SqlapiService) { }

  ngOnInit() {
    //this.placeholder = "hello";
    this.interact.getautoComplete().subscribe((res: any) => {this.list =res;console.log(res);});
    this.t = this.interact.setautoComplete("");
    //console.log(t);
  }

  autocomplete(name){
    console.log(name);
    console.log(this.selected);

  }

  scroll(){
    document.getElementById("hospitals").scrollIntoView({behavior:"smooth"});
  }

  submit(){
    console.log(this.value);
    this.interact.runsearch(this.value);
    this.scroll();
  }
  reset(){
    this.selected="";
  }
}
