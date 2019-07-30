import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  baseUrl = `${environment.API}`;

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  constructor(private http: HttpClient) { }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(this.baseUrl + `${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  // get(path: string, params: HttpParams = new HttpParams()): Promise<any> {
  //   return this.http.get(this.baseUrl + `${path}`, { params })
  //     .pipe(catchError(this.formatErrors));
  // }


}
