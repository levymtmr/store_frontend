import { Produto } from "./../models/produto.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class ProductService {
  baseUrl = `${environment.API}`;
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Array<Produto>>(this.baseUrl + "api/products/");
  }

  getProduct(id) {
    return this.httpClient.get(this.baseUrl + "api/products/" + id);
  }

  searchProduct(word) {
    return this.httpClient.get(this.baseUrl + "api/products/?search=" + word);
  }

  postProduct(data) {
    return this.httpClient.post(this.baseUrl + "api/products/", data);
  }

  patchProduct(id, data) {
    return this.httpClient.patch(this.baseUrl + `api/products/${id}/`, data);
  }
}
