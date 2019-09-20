import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserfiltersService {

  constructor(private http: HttpClient) { } 
  configUrl = 'assets/config.json';

  getData() {
    return this.http.get(this.configUrl);
  }
}

