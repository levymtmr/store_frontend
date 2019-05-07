import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  baseUrl = "http://localhost:7000/";

  constructor(private httpClient: HttpClient) {}

  getClient() {
    return this.httpClient.get(this.baseUrl + "/api/client/");
  }
}
