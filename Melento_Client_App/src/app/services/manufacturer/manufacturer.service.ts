import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manufacturers } from 'src/app/models/manufacturers';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {
  manu:Manufacturers=new Manufacturers(0,"","",0,"","");

  
  baseUrl: string | undefined;
  manufacturersArr: Manufacturers[]=[]
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    }),responseType:'text'as'json'
  }
  
 constructor(private httpClient:HttpClient) {
    this.baseUrl='http://localhost:3000'
    this.manufacturersArr=[
    ]
  }

  getManufacturers(): Observable<Manufacturers[]>{
    return this.httpClient.get<Manufacturers[]>(this.baseUrl + '/manufacturers')
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  httpError(error:HttpErrorResponse){
    let msg='';
    if(error.error instanceof ErrorEvent){
      msg=error.error.message;
    }
    else{
      msg=`Error Code:${error.status}\nMessafe:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

  getManufacturerById(id:number): Observable<Manufacturers>{
    return this.httpClient.get<Manufacturers>(this.baseUrl+'/manufacturers/'+id)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  addManufacturer(p:Manufacturers): Observable<Manufacturers>{
    return this.httpClient.post<Manufacturers>(this.baseUrl+'/manufacturers',JSON.stringify(p),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  updateManufacturer(p:Manufacturers): Observable<Manufacturers>{
    return this.httpClient.put<Manufacturers>(`${this.baseUrl}/manufacturers/${p._id}`,JSON.stringify(p),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }
  deleteManufacturer(m:Manufacturers): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/manufacturers/${m._id}`,this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }
}
