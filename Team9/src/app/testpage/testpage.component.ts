import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { SqlapiService }from '../sqlapi.service';
import { test }from '../classmanager.service';
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
        testofvarpassing:any;
  constructor(private sqlapi:SqlapiService ,private locate:GelocatorService , private classmanager:ClassmanagerService ) { }

  ngOnInit() {
    //this.sqlapi.gettestdata().subscribe((res: any) => {this.data =res;});

 
this.classmanager.givedata().subscribe((res: any) => {this.testofvarpassing =res;});




      this.locate.getIpCliente().subscribe((res: any) => {this.testip =res.ip;});

        this.locate.getlocation(this.testip).subscribe((res: any) => {this.location =JSON.stringify(res);});

  }
 ngAfterViewInit(){

  console.log(this.testip);


    if(this.testip != undefined){
      console.log(this.testip);
      this.locate.getlocation("8.8.8.8").subscribe((res: any) => {this.location =JSON.stringify(res);});
    }else{
      console.log("test ip undef");
    }
}

}
