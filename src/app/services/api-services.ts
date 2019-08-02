import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiServices {
  baseUrl = `${environment.API}`;

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  constructor(private http: HttpClient) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http
      .get(this.baseUrl + `${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  // post(path: string, body: Object = {}): Observable<any> {
  //   return this.http
  //     .post(this.baseUrl + `${path}`, JSON.stringify(body))
  //     .pipe(catchError(this.formatErrors));
  // }

  post(data): Observable<any> {
    return this.http.post(this.baseUrl + "login/", data);
  }
}
