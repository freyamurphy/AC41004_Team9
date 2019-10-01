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
//    console.log("inside sqlapi");

    // check drg code is a number






var proceed = true;
for(var i = 0; i < 1000; i++){
  if(drgcode == i){
  //  proceed=true;

  }

}
//    console.log(drgcode ==64);
  if(!proceed){
//drgcode = 64;
//proceed=true;

  }
  drgcode = 64;
    if( proceed){
      var temp = "https://zeno.computing.dundee.ac.uk/2019-projects/team9/AC41004_Team9/echotest.php?state="+state+"&condition_Code="+drgcode;
    //  console.log(temp );
          return this.http.get(temp).pipe(
            map((res) => {
             return res['data'];
          }));
  }
 }


    postTestData(data : any): Observable<any> {
      return this.http.post<any>(this.baseUrl, "Hello")



    }
/*
    inswerting 37.6334549  -122.0879165   50002
    sqlapi.service.ts:60 inswerting 40.7840947  -124.1421682   50006
    sqlapi.service.ts:60 inswerting 37.5923598  -122.3824811   50007
    sqlapi.service.ts:60 inswerting 37.768847  -122.4354438   50008
    sqlapi.service.ts:60 inswerting 38.324482  -122.2971094   50009
    sqlapi.service.ts:60 inswerting 38.3504826  -120.764465   50014
    sqlapi.service.ts:60 inswerting 38.56983700000001  -121.452588   50017
    sqlapi.service.ts:60 inswerting 33.9772213  -117.3815694   50022
    sqlapi.service.ts:60 inswerting 32.685299  -117.0829289   50024
    sqlapi.service.ts:60 inswerting 32.7542698  -117.166135   50025

*/


//accepts provider id returns a value if it has one if not it finds it and inserts it into the database..
inserthospical(data:string,lat:string,long:string): Observable<any>  {

       var temp = "https://zeno.computing.dundee.ac.uk/2019-projects/team9/AC41004_Team9/hospitalone.php?ID="+data+"&lat="+lat+"&lng="+long;



       var sql = "update providers set lat =" +lat +" , lng="+long+"  where ID ="+data+";";

console.log("inswerting -"+lat +"-  -"+ long+ "-   -" +data+"-");

  console.log(temp );
  console.log(sql );
   //this.http.post(`${this.baseUrl}/store`, { data: car })
 return  this.http.get(temp).pipe(
   map((res) => {
    return res['data'];
 }));


}



hellolenny(description ): Observable<any> {

var temp = "https://zeno.computing.dundee.ac.uk/2019-projects/team9/AC41004_Team9/desc.php?desc="+description;

  return this.http.get(temp).pipe(
    map((res) => {

     return res['data'];
  }));
}


    sliderTest(): Observable<number> {
      return of(50);
    }


}
