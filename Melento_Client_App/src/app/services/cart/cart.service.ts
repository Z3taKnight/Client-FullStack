import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Cart } from '../../models/cart';
import { users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string
  cart:Cart=new Cart(0,0,"","",[],0);
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    }),responseType:'text'as'json'
  }

  constructor(private httpClient:HttpClient) {
    this.baseUrl='http://localhost:3000'
   }
   getCart(): Observable<Cart[]>{
     return this.httpClient.get<Cart[]>(this.baseUrl+'/cart')
     .pipe(
       retry(1),
       catchError(this.httpError)
     );
   }
   getCartbyId(id:number):Observable<Cart>{
     return this.httpClient.get<Cart>(this.baseUrl+`/cart/:${id}`)
     .pipe(
       retry(1),
       catchError(this.httpError)
     );
   }
   addCart(cart:Cart):Observable<Cart>{
     return this.httpClient.post<Cart>(this.baseUrl+'/cart',JSON.stringify(cart),this.httpHeader)
     .pipe(
       retry(1),
       catchError(this.httpError)
     )
   }
   deleteCart(u:users){
     return this.httpClient.delete<Cart>(`${this.baseUrl}/cart/:${u._id}`,this.httpHeader)
     .pipe(
       retry(1),
       catchError(this.httpError)
     )
   }
   updateCart(cart:Cart):Observable<Cart>{
     return this.httpClient.put<Cart>(`${this.baseUrl}/cart/:${cart._id}`,JSON.stringify(cart),this.httpHeader)
     .pipe(
       retry(1),
       catchError(this.httpError)
     )
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

}
