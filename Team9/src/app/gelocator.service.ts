import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class GelocatorService {


  ipAddress:any;
  location:any;



  constructor(private http: HttpClient) { }



  userlat:any;
  userlong:any;
  latInContext:any;
  longInContext:any;






  getIpCliente(): Observable<any> {
    this.ipAddress= this.http.get<any>('https://jsonip.com');
    return this.http.get<any>('https://jsonip.com');
  }


  getlocation(newName: string): Observable<any> {
    var temp = 'https://geoipify.whoisxmlapi.com/api/v1?apiKey=at_5hXi7N8OgGcRzk6qfCaApUVnndTIN&ipAddress='+newName;//+(hello);
    console.log(newName);
    return this.http.get<any>(temp);
  }


  getdistance(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return (d*1000/1600).toFixed(1);
  }

  deg2rad(deg) {
    return deg * (Math.PI/180);
  }

getlocationfromaddress(state: string,address: string): Observable<any>{
var addressFull = "";
var apikey=""
//var temp = "https://maps.googleapis.com/maps/api/geocode/json?address="addresss"&key="apikey;

return this.http.get<any>(apikey);
}



}
