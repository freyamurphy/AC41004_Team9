import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SqlapiService {


  baseUrl = 'http://localhost:3000';

   constructor(private http: HttpClient) {
     //console.log("Hey");
    }

    

   gettestdata(): Observable<any> {
     return this.http.get(this.baseUrl).pipe(
       map((res) => {
         
        //console.log(res.toString());
        
        return res['first'];
        //return this.http.get(`${this.baseUrl}`);

   //}
     }));
  }
}


 





