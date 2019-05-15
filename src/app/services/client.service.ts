import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  baseUrl = "http://localhost:7000/";

  constructor(private httpClient: HttpClient) {}

  getClients() {
    return this.httpClient.get<Array<any>>(this.baseUrl + "api/clients/");
  }

  getCliente(id) {
    return this.httpClient.get(this.baseUrl + "api/clients/" + id).pipe(
      tap(data => {
        return data;
      })
    );
  }
}
