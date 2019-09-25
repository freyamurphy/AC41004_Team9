import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { SqlapiService }from '../sqlapi.service';
import { searchWithStateAndDRGCodeInterface }from '../classmanager.service';
import { GelocatorService }from '../gelocator.service';
import { ClassmanagerService }from '../classmanager.service';



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







arrayofstuff:any;


  testofvarpassing:any;
  testofvarpassing2:any;

  constructor(private sqlapi:SqlapiService ,private locate:GelocatorService , private classmanager:ClassmanagerService ) { }

  ngOnInit() {
  //  this.sqlapi.searchWithStateAndDRGCodeFunction( ).subscribe((res:any;) => {this.arrayofstuff = res;});
//this.sqlapi.getlocation(this.usersIPAddress).subscribe((res: any) => {this.userlocation =JSON.stringify(res);});


 this.sqlapi.searchWithStateAndDRGCodeFunction().subscribe((res: any) => {this.arrayofstuff =res;});







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
