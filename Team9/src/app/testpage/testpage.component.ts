import { Component, OnInit } from '@angular/core';
import { SqlapiService }from '../sqlapi.service';
import { test }from '../classmanager.service';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent implements OnInit {
data:any;
    array_or_test_clases: test[];
  constructor(private sqlapi:SqlapiService) { }

  ngOnInit() {
    console.log("U");
    this.sqlapi.gettestdata().subscribe((res: test[]) => {this.data =res;});
    console.log("y");

    this.sqlapi.gettestdata().subscribe((res: any) => {this.data =res;});

  }

}
