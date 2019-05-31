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
    return this.httpClient.get(this.baseUrl + "api/clients/" + id).pipe(
      tap(data => {
        return data;
      })
    );
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient
      .post<Cliente>(this.baseUrl + "api/clients/", cliente)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
