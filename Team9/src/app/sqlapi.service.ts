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
//baseUrl = 'https://zeno.computing.dundee.ac.uk/2019-projects5

   constructor(private http: HttpClient, ) { }


   gettestdata(): Observable<any> {
     return this.http.get(this.baseUrl).pipe(
       map((res) => {
        return res['name'];
     }));
  }

  searchWithOnlyDRGCode(drgcode): Observable<any> {
      var temp = "http://localhost/phptest/drgSearch.php?condition_Code="+drgcode;
     console.log(temp );
          return this.http.get(temp).pipe(
            map((res) => {
             return res['data'];
          }));

 }
  searchWithStateAndDRGCodeFunction(state, drgcode  ): Observable<any> {

      var temp = "http://localhost/phptest/echotest.php?state="+state+"&condition_Code="+drgcode;
     console.log(temp );
          return this.http.get(temp).pipe(
            map((res) => {
             return res['data'];
          }));
  }





//accepts provider id returns a value if it has one if not it finds it and inserts it into the database..
inserthospical(data:string,lat:string,long:string): Observable<any>  {

       var temp = "http://localhost/phptest/hospitalone.php?ID="+data+"&lat="+lat+"&lng="+long;

       var sql = "update providers set lat =" +lat +" , lng="+long+"  where ID ="+data+";";

console.log("in sql api   -"+lat +"-  -"+ long+ "-   -" +data+"-    "+temp);


   //this.http.post(`${this.baseUrl}/store`, { data: car })
 return  this.http.get(temp).pipe(
   map((res) => {
     console.log(res['data']);
    return res['data'];
 }));


}



hellolenny(description ): Observable<any> {

var temp = "http://localhost/phptest/desc.php?desc="+description;

  return this.http.get(temp).pipe(
    map((res) => {

     return res['data'];
  }));
}


    sliderTest(): Observable<number> {
      return of(50);
    }


}
