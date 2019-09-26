import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { SqlapiService }from '../sqlapi.service';
import { searchWithStateAndDRGCodeInterface }from '../classmanager.service';
import { HostListener } from "@angular/core";
import { GelocatorService }from '../gelocator.service';
import { ClassmanagerService }from '../classmanager.service';
import { ComunicationService } from '../comunication.service';

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




testdistances:any;


arrayofstuff:any;


  testofvarpassing:any;
  testofvarpassing2:any;


         userlocation;
         usersIPAddress;
         userlat;
         userlong;
         lat = 51.678418;
         lng = 7.809007;
         public innerHeight: any;
         public innerWidth: any;

          isHidden: boolean;

         constructor(private sqlapi:SqlapiService ,private locate:GelocatorService , private classmanager:ClassmanagerService ) { }



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





      ngOnInit() {
          this.innerWidth = window.innerWidth;
            this.innerHeight= window.innerHeight;
          this.isHidden = true;
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

      // this needs to be in master
      getuserlocation()
      {
            document.getElementById("99").style.visibility = "visible";
                  document.getElementById("44").style.visibility = "hidden";

          this.locate.getIpCliente().subscribe((res: any) => {this.usersIPAddress =res.ip;});// gets the user ip address

          // 5 seconds after that, uses the ip address to get latitude and longitude
          setTimeout( ()=>{
                this.locate.getlocation(this.usersIPAddress).subscribe((res: any) => {this.userlocation =JSON.stringify(res);});
                this.timerfunction();
           }, 5000)
      }


      timerfunction(){
        document.getElementById("99").style.visibility = "hidden";
        document.getElementById("44").style.visibility = "visible";
      }


      gethospitallocation(){

      }
    }
