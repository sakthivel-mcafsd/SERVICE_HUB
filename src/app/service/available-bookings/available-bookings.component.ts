import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking';

@Component({
  selector: 'app-available-bookings',
  templateUrl: './available-bookings.component.html',
  styleUrls: ['./available-bookings.component.css']
})
export class AvailableBookingsComponent implements OnInit {

  availableBookings: Booking[] = [];
  myBookings: Booking[] = [];

  totalBookings = 0;
  inProgress = 0;
  completed = 0;

  loading = true;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.loadMockData();
  }

  // MOCK DATA
  loadMockData() {

    this.availableBookings = [
      {
        id: 1,
        service: 'Electrician',
        customer: 'John Doe',
        description: 'Kitchen lights not working',
        date: 'Jan 10, 2026',
        time: '10:00',
        status: 'Pending'
      }
    ];

    this.myBookings = [
      {
        id: 2,
        service: 'Plumber',
        customer: 'Jane Smith',
        description: 'Leaking bathroom faucet',
        date: 'Jan 11, 2026',
        time: '14:00',
        status: 'Assigned'
      }
    ];

    this.calculateStats();

  }

  calculateStats() {

    this.totalBookings = this.myBookings.length;

    this.inProgress =
      this.myBookings.filter(b => b.status === 'In Progress').length;

    this.completed =
      this.myBookings.filter(b => b.status === 'Completed').length;

  }

  // API DATA (future use)

  loadData() {

    this.loading = true;

    this.bookingService.getAvailableBookings()
      .subscribe((res: Booking[]) => {
        this.availableBookings = res;
      });

    this.bookingService.getMyBookings()
      .subscribe((res: Booking[]) => {
        this.myBookings = res;
        this.calculateStats();
        this.loading = false;
      });

  }

  acceptBooking(id: number) {

    this.bookingService.acceptBooking(id)
      .subscribe(() => {
        this.loadData();
      });

  }

  markCompleted(id: number) {

    this.bookingService.completeBooking(id)
      .subscribe(() => {
        this.loadData();
      });

  }

  getStatusClass(status: string) {

    switch (status) {

      case 'Pending':
        return 'bg-warning-subtle text-warning';

      case 'Assigned':
        return 'bg-primary-subtle text-primary';

      case 'Completed':
        return 'bg-success-subtle text-success';

      case 'In Progress':
        return 'bg-info-subtle text-info';

      default:
        return 'bg-secondary';

    }

  }

}