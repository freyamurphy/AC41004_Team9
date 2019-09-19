import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { test }from '../classmanager.service';

@Injectable({
  providedIn: 'root'
})
export class SqlapiService {

test:test;
  baseUrl = 'http://localhost/phptest/test.php';

   constructor(private http: HttpClient) { }



   gettestdata(): Observable<any> {
     return this.http.get(this.baseUrl).pipe(
       map((res) => {

         return res['data'];
     }));
  }



  store(variable: test): Observable<test[]> {
      return this.http.post(`${this.baseUrl}/store`, { data: variable })
        .pipe(map((res) => {
          this.test.push(res['data']);
          return this.test;
        }),
        catchError(this.handleError));
  }




}
