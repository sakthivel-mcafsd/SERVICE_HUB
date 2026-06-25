import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { UserProfile,UserProfileUpdate } from '../models/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private apiUrl = 'http://localhost:5047/api/Booking'; 
  
  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  getUserProfile(): Observable<UserProfile> {
    
    return this.http.get<UserProfile>(`${this.apiUrl}/GetProfile`, {
      headers: this.getHeaders()
    });
  }

  updateUserProfile(user: UserProfileUpdate): Observable<any> {
  return this.http.put(`${this.apiUrl}/UpdateUserProfile`, user);
}
}