import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from 'src/app/models/supplier';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  sup:Supplier=new Supplier(0,"","",0,"")
  baseUrl: string;
  supplierArr: Supplier[]=[]
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    }),responseType:'text'as'json'
  }
  constructor(private httpClient:HttpClient){
    this.baseUrl='http://localhost:3000'
    this.supplierArr=[
    ]
  }
  getsupplier(): Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(this.baseUrl + '/suppliers')
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
      msg="Error Code:${error.status}\nMessafe:${error.message}";
    }
    console.log(msg);
    return throwError(msg);
  }
  getSupplierById(id:number): Observable<Supplier>{
    return this.httpClient.get<Supplier>(this.baseUrl+'/suppliers/'+id)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  addSupplier(s:Supplier): Observable<Supplier>{
    return this.httpClient.post<Supplier>(this.baseUrl+'/suppliers',JSON.stringify(s),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  updateSupplier(s:Supplier): Observable<Supplier>{
    return this.httpClient.put<Supplier>(`${this.baseUrl}/suppliers/${s._id}`,JSON.stringify(s),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }
 deleteSupplier(id:number){
  return this.httpClient.delete<Supplier>(this.baseUrl+'/suppliers/'+id)
  .pipe(
    retry(1),
    catchError(this.httpError)
  );
}
}
