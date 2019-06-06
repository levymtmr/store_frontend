import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SellService {
  baseUrl = `${environment.API}`;
  constructor(private httpClient: HttpClient) {}

  getProductSells() {
    return this.httpClient.get(this.baseUrl + "api/sells/");
  }

  searchProducts(word) {
    return this.httpClient.get(this.baseUrl + "api/sells/?search=" + word);
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
