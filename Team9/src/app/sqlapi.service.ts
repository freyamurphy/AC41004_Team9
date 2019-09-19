import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SqlapiService {


  baseUrl = 'http://localhost:3000';

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
        return res['data'];
     }));
  }



}
