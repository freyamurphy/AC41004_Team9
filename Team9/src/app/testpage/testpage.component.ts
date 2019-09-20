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
    array_or_test_clases: any;
  constructor(private sqlapi:SqlapiService) { }

  ngOnInit() {

    this.sqlapi.gettestdata().subscribe((res: any) => {this.data =res;});

  }

}
