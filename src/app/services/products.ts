import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get("http://localhost:7000/api/products/");
  }

  getStorages() {
    return this.httpClient.get("http://localhost:7000/api/storages/");
  }
}
