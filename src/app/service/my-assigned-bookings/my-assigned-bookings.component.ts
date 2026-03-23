import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-my-assigned-bookings',
  templateUrl: './my-assigned-bookings.component.html',
  styleUrls: ['./my-assigned-bookings.component.css']
})

export class AssignedBookingsComponent implements OnInit {

  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getAssignedBookings()
      .subscribe((res: any) => {
        this.bookings = res;
      });
  }

  completeBooking(id: number) {
    this.bookingService.completeBooking(id)
      .subscribe(() => {
        this.loadBookings();
      });
  }
}