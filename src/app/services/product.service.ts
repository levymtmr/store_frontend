import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   baseUrl = `${environment.API}`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'products/');
  }

  postProduct(data): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products/', data);
  }

}
