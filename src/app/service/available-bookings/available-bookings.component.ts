import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-available-bookings',
  templateUrl: './available-bookings.component.html',
  styleUrls: ['./available-bookings.component.css']
})

export class AvailableBookingsComponent implements OnInit {

  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    this.bookingService.getAvailableBookings()
      .subscribe((res: any) => {
        this.bookings = res;
      });
  }

  acceptBooking(id: number) {
    this.bookingService.acceptBooking(id)
      .subscribe(() => {
        this.loadBookings();
      });
  }
}

