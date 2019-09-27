import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SqlapiService {
  temp: number[];


test:any;
  baseUrl = 'http://localhost/phptest/test.php';
//baseUrl = 'https://zeno.computing.dundee.ac.uk/2019-projects/team9/AC41004_Team9/Team9/angular-php/backend/api/search.php';


   constructor(private http: HttpClient, ) { }

/*
GET
test data is in the following format '{"data":[{"first":"a","last":"b"},{"first":"a","last":"b"}}]
will use class from class manager tomerge

function on sql is named
*/
   gettestdata(): Observable<any> {
     return this.http.get(this.baseUrl).pipe(
       map((res) => {
        return res['name'];
     }));
  }


  searchWithStateAndDRGCodeFunction(state, drgcode ): Observable<any> {
    console.log("inside sqlapi");
        console.log(state, drgcode );
var temp = "https://zeno.computing.dundee.ac.uk/2019-projects/team9/AC41004_Team9/echotest.php?state="+state+"&condition_Code="+drgcode;
  console.log(temp );
    return this.http.get(temp).pipe(
      map((res) => {
       return res['data'];
    }));
 }


    postTestData(data : any): Observable<any> {
      return this.http.post<any>(this.baseUrl, "Hello")



    }


//accepts provider id returns a value if it has one if not it finds it and inserts it into the database..
inserthospical(data,lat,long) {

      var temp = "https://zeno.computing.dundee.ac.uk/2019-projects/team9/AC41004_Team9/hospitalone.php?ID="+data+"&lat="+lat+"&lng="+long;
console.log("inswerting "+lat +"  "+ long+ "   " +data);
    this.http.get(temp);


}






    sliderTest(): Observable<number> {
      return of(50);
    }


}
