import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ComunicationService } from '../../../comunication.service';
import { SqlapiService } from 'src/app/sqlapi.service';
import {FormControl} from '@angular/forms';
import {INgxSelectOption} from '../../../../../node_modules/ngx-select-ex/ngx-select/ngx-select.interfaces';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  

 
    public ngxControl = new FormControl();
 
    private _ngxDefaultTimeout;
    private _ngxDefaultInterval;
    private _ngxDefault;

  public innerHeight: any;
  public innerWidth: any;
  t;
  selected: string = "";
  list: any[] =[];
  description: any[] = [];
  placeholder : string = "Search for DRG Code or Description of Condition";
  //Almost all of this stuff was copied and altered from https://optimistex.github.io/ngx-select-ex/
  constructor(private interact:ComunicationService, private sql:SqlapiService) {
    this._ngxDefaultTimeout = setTimeout(() => {
      this._ngxDefaultInterval = setInterval(() => {
          const idx = Math.floor(Math.random() * (this.description.length - 1));
          this._ngxDefault = this.description[idx];
          // console.log('new default value = ', this._ngxDefault);
        }, 2000);
      }, 2000);
   }
   public doNgxDefault(): any {
    return this._ngxDefault;
}

public inputTyped = (source: string, text: string) => console.log('SingleDemoComponent.inputTyped', source, text);

public doFocus = () => console.log('SingleDemoComponent.doFocus');

public doBlur = () => console.log('SingleDemoComponent.doBlur');

public doOpen = () => console.log('SingleDemoComponent.doOpen');

public doClose = () => console.log('SingleDemoComponent.doClose');

public doSelect = (value: any) => console.log('SingleDemoComponent.doSelect', value);

public doRemove = (value: any) => console.log('SingleDemoComponent.doRemove', value);

public doSelectOptions = (options: INgxSelectOption[]) => console.log('SingleDemoComponent.doSelectOptions', options);
  ngOnInit() {
    //this.placeholder = "hello";
    this.interact.getautoComplete().subscribe((res: any) => {
      this.list =res; 
      console.log(this.list);
      var i = 0;
      for(let item of this.list){
        this.description[i] = item.Description; 
        i++;
      } 
    });
    this.t = this.interact.setautoComplete("");
    //console.log(t);
  }

  autocomplete(name){
    //console.log(name);
    //console.log(this.selected);

  }
  complete(){
    console.log("hello");
  }
  scroll(){
    document.getElementById("hospitals").scrollIntoView({behavior:"smooth"});
  }

  submit(){
    var addressBox = (document.getElementById("addressBox") as HTMLInputElement).value;
    if(!addressBox){
      addressBox = "216 N Meech Rd, Dansville, MI 48819, USA";
      (document.getElementById("addressBox") as HTMLInputElement).value = addressBox;
      
    }
    this.interact.runsearch(this.selected);
    document.getElementById("bottom").style.display = "block";

    this.scroll();
    
  }
  reset(){
    this.selected="";
  }
}
