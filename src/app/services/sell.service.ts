import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SellService {
  baseUrl = "http://localhost:7000/";
  constructor(private httpClient: HttpClient) {}

  getProductSells() {
    return this.httpClient.get(this.baseUrl + "api/sells/");
  }

  getClients() {
    return this.httpClient.get(this.baseUrl + "api/clients");
  }
}
