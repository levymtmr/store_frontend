import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Cliente } from "../models/cliente.model";
import { throwError, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  baseUrl = `${environment.API}`;

  constructor(private httpClient: HttpClient) {}

  getClients() {
    return this.httpClient.get<Array<any>>(this.baseUrl + "api/clients/");
  }

  getCliente(id) {
    return this.httpClient
      .get<Cliente>(this.baseUrl + "api/clients/" + id)
      .pipe(
        tap(
          data => {
            return data;
          },
          error => {
            console.log("error", error);
          }
        )
      );
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(
      this.baseUrl + "api/clients/",
      cliente
    );
  }
}
