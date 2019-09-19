import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";


@Component({
  selector: 'app-mapoutlineareas-test',
  templateUrl: './mapoutlineareas-test.component.html',
  styleUrls: ['./mapoutlineareas-test.component.css']
})
export class MapoutlineareasTESTComponent implements OnInit {



    lat = 51.678418;
    lng = 7.809007;
    public innerHeight: any;
    public innerWidth: any;
    constructor() { }


  ngOnInit() {
      this.innerWidth = window.innerWidth;
        this.innerHeight= window.innerHeight;
  }

// Sort function
 sortTable(n) {
         var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
         table = document.getElementById("myTable");
         switching = true;
         //Set the sorting direction to ascending:
         dir = "asc";
         /*Make a loop that will continue until
         no switching has been done:*/
         while (switching) {
             //start by saying: no switching is done:
             switching = false;
             rows = table.rows;
             /*Loop through all table rows (except the
             first, which contains table headers):*/
             for (i = 1; i < (rows.length - 1); i++) {
                 //start by saying there should be no switching:
                 shouldSwitch = false;
                 /*Get the two elements you want to compare,
                 one from current row and one from the next:*/
                 x = rows[i].getElementsByTagName("TD")[n];
                 y = rows[i + 1].getElementsByTagName("TD")[n];
                 /*check if the two rows should switch place,
                 based on the direction, asc or desc:*/
                 if (dir == "asc") {
                     if (Number(x.innerHTML) > Number(y.innerHTML)) {
                         //if so, mark as a switch and break the loop:
                         shouldSwitch= true;
                         break;
                     }
                 } else if (dir == "desc") {
                     if (Number(x.innerHTML) < Number(y.innerHTML)) {
                         //if so, mark as a switch and break the loop:
                         shouldSwitch = true;
                         break;
                     }
                 }
             }
             if (shouldSwitch) {
                 /*If a switch has been marked, make the switch
                 and mark that a switch has been done:*/
                 rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                 switching = true;
                 //Each time a switch is done, increase this count by 1:
                 switchcount ++;
             } else {
                 /*If no switching has been done AND the direction is "asc",
                 set the direction to "desc" and run the while loop again.*/
                 if (switchcount == 0 && dir == "asc") {
                     dir = "desc";
                     switching = true;
                 }
             }
         }
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







    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;
      this.innerHeight= window.innerHeight;
      this.resize()
    }

  getheight(heightpercentage){
  var tempvar =(this.innerHeight/100)*heightpercentage;
  console.log(tempvar);
  return tempvar.toString();
  }



  getwidth(widthpercentage){
  var tempvar =(this.innerWidth/100)*widthpercentage;
  console.log(tempvar);
  return tempvar.toString();
  }


  resize(){




  }

  //[style.height]="getheight(50)"[style.width]="getwidth(50)"



}
