import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Cliente } from "../models/cliente.model";
import { throwError, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContaService {
  baseUrl = `${environment.API}`;

  constructor(private httpClient: HttpClient) {}

  getContas() {
    return this.httpClient.get(this.baseUrl + "api/bills");
  }

  getContasCategory(category) {
    return this.httpClient.get(this.baseUrl + "api/bills/?search=" + category);
  }

  postConta(data) {
    return this.httpClient.post(this.baseUrl + "api/bills/", data);
  }
}
