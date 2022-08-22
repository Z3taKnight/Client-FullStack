import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  prod: Product = new Product(0, '', '', '', '', '', 0.0, 0, 0, '');
  baseUrl: string;
  productArr: Product[] = [];
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),responseType:'text'as'json'
  };
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
    this.productArr = [];
  }
  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.baseUrl + '/products')
      .pipe(retry(1), catchError(this.httpError));
  }

  getAll(params: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/products', { params });
  }
  httpError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code:${error.status}\nMessafe:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(`${this.baseUrl}/products/:${id}`)
      .pipe(retry(1), catchError(this.httpError));
  }

  addProduct(p: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(
        this.baseUrl + '/products',
        JSON.stringify(p),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }
  // this.productArr = this.deleteProduct(48);
  // console.log('')

  updateProduct(p: Product): Observable<Product> {
    return this.httpClient
      .put<Product>(
        `${this.baseUrl}/products/:${p._id}`,
        JSON.stringify(p),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.httpError));
  }

  deleteProduct(p: Product): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/products/:${p._id}`, this.httpHeader)
      .pipe(retry(1), catchError(this.httpError));
  }
}

function responseType(arg0: any, responseType: any, ArrayBuffer: any) {
  throw new Error('Function not implemented.');
}
