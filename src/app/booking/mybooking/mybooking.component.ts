import { Component, OnInit } from '@angular/core';
import { Booking, BookingStatus } from '../../models/booking';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  userName:string="sakthi"
  searchText = '';

  bookings: Booking[] = [];
  filteredBookings: Booking[] = [];

  activeStatus: BookingStatus | 'All' = 'All';

  loading = true;
  user:any;
  constructor(private bookingService: BookingService, private authService:AuthService) {}

  ngOnInit(): void {
    this.loadBookings();
    // this.user = this.authService.getUser();
    // console.log(this.user)
    // this.userName = this.user.name;
  }

  // API CALL
  loadBookings(): void {

  this.bookingService.getMyBookings().subscribe({

    next: (res: Booking[]) => {
      this.bookings = res;
      this.applyFilter();
      this.loading = false;
      console.log(res);
    },

    error: (err) => {
      console.error('Error loading bookings', err);
      this.loading = false;
    }

  });

}

  // TOTAL BOOKINGS
  get totalBookings(): number {
    return this.bookings.length;
  }

  getCount(status: BookingStatus): number {
    return this.bookings.filter(b => b.status === status).length;
  }

  // FILTER
  setStatusFilter(status: BookingStatus | 'All'): void {
    this.activeStatus = status;
    this.applyFilter();
  }
  applyFilter(): void {

    const text = this.searchText.trim().toLowerCase();

    const statusFiltered =
      this.activeStatus === 'All'
        ? this.bookings
        : this.bookings.filter(b => b.status === this.activeStatus);

    this.filteredBookings = statusFiltered.filter(b =>
      b.service.toLowerCase().includes(text) ||
      b.description.toLowerCase().includes(text)
    );

  }

  // SEARCH
  onSearch(): void {
    this.applyFilter();
  }

  // CONTACT
  contactProvider(booking: Booking): void {
    console.log('Contact provider', booking.provider);
  }

}