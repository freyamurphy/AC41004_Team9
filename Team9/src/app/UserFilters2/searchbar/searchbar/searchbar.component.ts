import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ComunicationService } from '../../../comunication.service';
import { SqlapiService } from 'src/app/sqlapi.service';
import {FormControl} from '@angular/forms';
import {INgxSelectOption} from '../../../../../node_modules/ngx-select-ex/ngx-select/ngx-select.interfaces';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit, OnDestroy{
  code: any;
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
  selected: any;
  list: any[] =[];
  description: any[] = [];
  placeholder : string = "Search for DRG Code or Description of Condition";
  //Almost all of this stuff was copied and altered from https://optimistex.github.io/ngx-select-ex/
  constructor(private interact:ComunicationService, private sql:SqlapiService, private _snackBar: MatSnackBar) {
    this._ngxDefaultTimeout = setTimeout(() => {
      this._ngxDefaultInterval = setInterval(() => {
          const idx = Math.floor(Math.random() * (this.description.length - 1));
          this._ngxDefault = this.description[0];
          //this.selected = this._ngxDefault;
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

public doSelect = (value: any) => { console.log("value: " + value); this.selected = value; console.log(this.selected)};

public doRemove = (value: any) => console.log('SingleDemoComponent.doRemove', value);

public doSelectOptions = (options: INgxSelectOption[]) =>{};
  ngOnInit() {
    this.code = 1;
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
 auto(){
    console.log(this.selected);
    for(var i = 0; i < this.list.length; i++){
      if(this.selected == this.list[i].Description)
      {
        this.code = this.list[i].conditionsCode;
      }
      //console.log(i);
    }
  }
  autocomplete(name){
    //console.log(name);
    //console.log(this.selected);

  }
  complete(){
    console.log("hello");
  }
  scroll(){
    document.getElementById("back").scrollIntoView({behavior:"smooth"});
  }
openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {

      duration: 5000,
    });
  }
  submit(){
    this.auto();
    if(!this.code){
      this.code = 1;
    }
    var addressBox = (document.getElementById("addressBox") as HTMLInputElement).value;

    if(!addressBox.includes(", USA")){
      //console.log("HELLO");
      this.openSnackBar("Address is not in the US!", "");
      document.getElementById("bottom").style.display = "none";

    }
    else{

      this.interact.runsearch(this.code);
      if(this.interact.gettosearchornottosearch()){
            //if the search is a address search
            setTimeout( () => {
                this.interact.limitdataByDistance(100);
                this.interact.setdistancebeingsearched(100);
                  this.interact.gettosearchornottosearch();
            }, 1000)
      }
    //  this.interact.limitdataByDistance(100);
  //    this.interact.setdistancebeingsearched(100);
      document.getElementById("bottom").style.display = "block";

      this.scroll();
    }


  }
  reset(){
    this.selected="";
  }
}
