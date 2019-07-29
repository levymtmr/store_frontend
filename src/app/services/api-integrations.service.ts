import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationsService {

  baseUrl = `${environment.API}`;

  constructor(private httpClient: HttpClient) { }
  get(path) {
    return this.httpClient.get(this.baseUrl + path);
  }
  post(path, data) {
    return this.httpClient.post(this.baseUrl + path, data);
  }
  put(path, data) {
    return this.httpClient.put(this.baseUrl + path, data);
  }
  patch(path, data) {
    return this.httpClient.patch(this.baseUrl + path, data);
  }
  delete(path, id) {
    return this.httpClient.delete(this.baseUrl + path, id);
  }
}
