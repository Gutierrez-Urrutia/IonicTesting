import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly url = 'https://aves.ninjas.cl/api/birds';
  constructor(private readonly http: HttpClient) {}

  obtenerAves() {
    return this.http.get(this.url);
  }
}
