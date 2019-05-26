import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class StorageService {
  baseUrl = "http://localhost:7000/";

  constructor(private httpClient: HttpClient) {}

  getStorages() {
    return this.httpClient.get(this.baseUrl + "api/storages/");
  }

  getProductInStorage(id) {
    return this.httpClient.get(this.baseUrl + `api/storage/${id}`);
  }

  patchProductInStorage(id, data) {
    return this.httpClient.patch(this.baseUrl + `api/storages/${id}/`, data);
  }

  postStorage(data) {
    return this.httpClient.post(this.baseUrl + `api/storages/`, data);
  }
}
