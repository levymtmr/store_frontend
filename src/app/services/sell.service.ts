import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SellService {
  baseUrl = "http://localhost:7000/";
  constructor(private httpClient: HttpClient) {}

  getProductSells() {
    return this.httpClient.get(this.baseUrl + "api/sells/");
  }

  postProductSells(data) {
    return this.httpClient
      .post(this.baseUrl + "api/sells/", data)
      .pipe(
        tap(
          data => console.log("data", data),
          error => console.log("error", error)
        )
      );
  }
}
