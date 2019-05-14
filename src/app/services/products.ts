import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ProductService {
  baseUrl = "http://localhost:7000/";
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get(this.baseUrl + "api/products/");
  }

  getProduct(id) {
    return this.httpClient.get(this.baseUrl + "api/products/" + id);
  }

  getStorages() {
    return this.httpClient.get(this.baseUrl + "api/storages/");
  }

  postProduct(data) {
    return this.httpClient.post(this.baseUrl + "api/products/", data);
  }
}
