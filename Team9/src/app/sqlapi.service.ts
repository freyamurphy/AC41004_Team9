import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//import { test }from '../classmanager.service';

@Injectable({
  providedIn: 'root'
})
export class SqlapiService {
  temp: number[];


test:any;
  baseUrl = 'http://localhost/phptest/test.php';




   constructor(private http: HttpClient) { }

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

    postTestData(data : any): Observable<any> {
      return this.http.post<any>(this.baseUrl, "Hello")
    


    }


    sliderTest(): Observable<number> {
      return of(50);
    }


}
