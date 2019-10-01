import {Component} from '@angular/core';
import { ComunicationService } from '../../../comunication.service';

/**
 * @title Basic select
 */
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})


export class SelectComponent {
  filterOptions: string[] = ["Distance","Price"];
constructor(private comunicate:ComunicationService) { }


sortPrice(n){

     //this.comunicate.sortPriceFunction(n);
     this.comunicate.newSort(n);
     
 }



}
