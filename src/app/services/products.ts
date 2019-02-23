import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ProductService {

    products: any[];
    constructor(private httpClient: HttpClient){

    }

    getProducts(){
        return this.httpClient.get<Object[]>("http://localhost:7000/api/products/");
    }
}