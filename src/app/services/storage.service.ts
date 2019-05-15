import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class StorageService {
  baseUrl = "http://localhost:7000/";

  constructor(private httpClient: HttpClient) {}

  getStorages() {
    return this.httpClient.get(this.baseUrl + "api/storages/");
  }

  patchProduct(id, data) {
    return this.httpClient.patch(this.baseUrl + `api/storages/${id}/`, data);
  }
}
//  'hospitalar/atendimentos/' + codigoAtendimento + '/prescricoes/' + codigoPrescricao + `/${this.tipoPrescricao}/${codigoItem}/suspender/`, data)
