import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:5047/api/Booking';

  constructor(private http: HttpClient) {}

  getMyBookings(): Observable<Booking[]> {

  const token = localStorage.getItem('token');

  return this.http.get<Booking[]>(
    `${this.baseUrl}/mybookings`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

  getAvailableBookings(): Observable<Booking[]> {

    const token = localStorage.getItem('token');

    return this.http.get<Booking[]>(
      `${this.baseUrl}/provider/available-bookings`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  }

  acceptBooking(id: number): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http.post(
      `${this.baseUrl}/provider/accept/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  }

  completeBooking(id: number): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http.post(
      `${this.baseUrl}/provider/complete/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  }

  createBooking(data: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http.post(
      `${this.baseUrl}/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  }

  //  private baseUrl = 'https://your-api-url.com/api/bookings';



  // getAvailableBookings() {
  //   return this.http.get(`${this.baseUrl}/available`);
  // }

  getAssignedBookings() {
    return this.http.get(`${this.baseUrl}/assigned`);
  }

  // acceptBooking(id: number) {
  //   return this.http.post(`${this.baseUrl}/accept/${id}`, {});
  // }

  // completeBooking(id: number) {
  //   return this.http.post(`${this.baseUrl}/complete/${id}`, {});
  // }

}