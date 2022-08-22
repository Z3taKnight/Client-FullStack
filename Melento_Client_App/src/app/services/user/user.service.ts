import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Cart } from 'src/app/models/cart';
import { users } from 'src/app/models/users';
import { CartService } from '../cart/cart.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;
  userArr: users[]=[]
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    }),responseType:'text'as'json'
  }
 constructor(private httpClient:HttpClient,private cartService:CartService) {
    this.baseUrl='http://localhost:3000'
    this.userArr=[
    ]
  }
  getUsers(): Observable<users[]>{
    return this.httpClient.get<users[]>(this.baseUrl + '/users')
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  getUserById(id:number){
    return this.httpClient.get<users>(this.baseUrl + `/users/${id}`)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  addUsers(p:users,c:Cart): Observable<users>{
    console.log(JSON.stringify(p));
    return this.httpClient.post<users>(this.baseUrl+'/users',JSON.stringify(p),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  deleteUser(u:users): Observable<users>{
    return this.httpClient.delete<users>(`${this.baseUrl}/users/:${u._id}`,this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }
  updateUsers(u:users): Observable<users>{
    return this.httpClient.put<users>(`${this.baseUrl}/users/:${u._id}`,JSON.stringify(u),this.httpHeader)
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
