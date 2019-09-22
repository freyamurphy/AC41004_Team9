import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public innerHeight: any;
  public innerWidth: any;
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
      this.innerHeight= window.innerHeight;
}


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight= window.innerHeight;
    this.resize()
  }

getheight(heightpercentage){
var tempvar =(this.innerHeight/100)*heightpercentage;
return tempvar.toString();
}

getwidth(widthpercentage){
var tempvar =(this.innerWidth/100)*widthpercentage;
return tempvar.toString();
}
resize(){
}
//Search function
  searchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];

        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
      
  }
}
