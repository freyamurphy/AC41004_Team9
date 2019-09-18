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



   gettestdata(): Observable<any> {
     return this.http.get(`${this.baseUrl}`).pipe(
       map((res) => {

         return res['obj'];
     }));
  }


  posttestdata(a,b){
     this.http.post(`${this.baseUrl}`,a,b);
 }




}
