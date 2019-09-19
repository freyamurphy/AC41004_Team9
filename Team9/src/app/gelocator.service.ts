import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class GelocatorService {
  ipAddress:any;
  constructor(private http: HttpClient) { }


  getIpCliente(): Observable<any> {
    return this.http.get<any>('https://jsonip.com');

  }



}
