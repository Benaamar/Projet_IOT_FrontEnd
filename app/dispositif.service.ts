import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DispositifService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private http: HttpClient) { }

  getDispositif(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDispositif(Dispositif: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Dispositif);
  }

  updateDispositif(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDispositif(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDispositifList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
