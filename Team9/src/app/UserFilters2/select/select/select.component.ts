import {Component} from '@angular/core';


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
  
}
