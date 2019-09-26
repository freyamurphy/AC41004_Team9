import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { SqlapiService }from '../sqlapi.service';
import { searchWithStateAndDRGCodeInterface }from '../classmanager.service';
import { GelocatorService }from '../gelocator.service';
import { ClassmanagerService }from '../classmanager.service';
import { ComunicationService } from '../comunication.service';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit,AfterViewInit {
data:any;
    array_or_test_clases: any;
        testip: any;
        location:any;
        setPosition: any;


value:any;

testdistances:any;


arrayofstuff:any;


  testofvarpassing:any;
  testofvarpassing2:any;

  constructor(private sqlapi:SqlapiService ,private locate:GelocatorService , private classmanager:ClassmanagerService , private comunicate:ComunicationService ) { }

  ngOnInit() {



    // this.comunicate.runsearch("a","b");
  //   this.comunicate.getsearchresults().subscribe((res: any) => {this.arrayofstuff =res;});



     setTimeout( ()=>{
   console.log(this.arrayofstuff);
    }, 5000)






























  //  this.sqlapi.searchWithStateAndDRGCodeFunction( ).subscribe((res:any;) => {this.arrayofstuff = res;});
//this.sqlapi.getlocation(this.usersIPAddress).subscribe((res: any) => {this.userlocation =JSON.stringify(res);});


 //this.sqlapi.searchWithStateAndDRGCodeFunction().subscribe((res: any) => {this.arrayofstuff =res;});


///this.testdistances = this.locate.getdistance(56.4643,-3.0379,56.4620,-2.9707);


////      TODO
      //this.locate.getIpCliente().subscribe((res: any) => {this.testip =res.ip;});

    //    this.locate.getlocation(this.testip).subscribe((res: any) => {this.location =JSON.stringify(res);});


  }
 ngAfterViewInit(){
   setTimeout( ()=>{
//this.locate.getlocation(this.testip).subscribe((res: any) => {this.location = res.location.lat;})
  }, 5000)
}






}
