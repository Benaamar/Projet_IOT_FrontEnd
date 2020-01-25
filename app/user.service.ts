import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/userProfiles';

  constructor(private http: HttpClient) { }

  getUserProfile(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUserProfile(UserProfile: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, UserProfile);
  }

  updateUserProfile(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUserProfile(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUserProfileList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
