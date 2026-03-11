import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
  return localStorage.getItem('token');
}
    
    isLoggedIn(): boolean {
    
      const token = this.getToken();
    
      if (!token) return false;
    
      const decoded: any = jwtDecode(token);
    
      const now = Date.now() / 1000;
    
      return decoded.exp > now;
    }
    
    getUser() {
  const token = this.getToken();

  if (!token) return null;

  return jwtDecode(token);
}
    
    getRole() {
    
      const user: any = this.getUser();
    
      return user?.role || null;
    
    }
    
      logout() {
    localStorage.removeItem('authToken');
  }

  // 🔴 change to your backend URL
  private baseUrl = 'http://localhost:5047/api/Home';

  constructor(private http: HttpClient) {}

  // ✅ REGISTER API
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // (optional) login already here if you added earlier
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
