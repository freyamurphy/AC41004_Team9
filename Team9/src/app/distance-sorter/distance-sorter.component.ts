import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../comunication.service';


@Component({
  selector: 'app-distance-sorter',
  templateUrl: './distance-sorter.component.html',
  styleUrls: ['./distance-sorter.component.css']
})
export class DistanceSorterComponent implements OnInit {

  constructor(private interact:ComunicationService) { }

  ngOnInit() {
  }

  limitByDistance(limitNumber){
      this.interact.limitdataByDistance(limitNumber);
  }

}
