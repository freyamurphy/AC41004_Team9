import { Component, OnInit } from '@angular/core';
import { SqlapiService }from '../sqlapi.service';
import { test }from '../classmanager.service';
import { GelocatorService }from '../gelocator.service';
@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
data:any;
    array_or_test_clases: any;
        testip: any;
        setPosition: any;
  constructor(private sqlapi:SqlapiService ,private locate:GelocatorService  ) { }

  ngOnInit() {
    //this.sqlapi.gettestdata().subscribe((res: any) => {this.data =res;});
 

     console.log("a");
      this.locate.getIpCliente().subscribe((res: any) => {this.testip =res.ip;});

  }

}
