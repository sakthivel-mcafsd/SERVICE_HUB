import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BookingService } from '../../services/booking.service';
interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: string;
  rating: number;
  reviews: number;
  popular: boolean;
}
@Component({
  selector: 'app-booking-slide',
  templateUrl: './booking-slide.component.html',
  styleUrls: ['./booking-slide.component.css']
})

export class BookingSlideComponent {
  constructor(private route: ActivatedRoute, private bookingService:BookingService) {}
  message1: string = '';
  res_type!: 'success' | 'error' | 'warning';
  showPopup: boolean = false;

  selectedService!: Service;
  services: Service[] = [];
   ngOnInit(): void {

  this.loadServices();
  
  const serviceId = Number(this.route.snapshot.paramMap.get('id'));

  this.selectedService = this.services.find(s => s.id === serviceId)!;
}
loadServices(): void {
  this.services = [
    {
      id: 1,
      name: 'Electrician',
      description: 'Expert electrical repairs, installations, and maintenance',
      image: 'assets/Electrical.jpeg',
      icon: '⚡',
      rating: 4.8,
      reviews: 342,
      popular: true
    },
    {
      id: 2,
      name: 'Plumber',
      description: 'Professional plumbing repairs, pipe work, and drainage solutions',
      image: 'assets/plumbing.jpg',
      icon: '💧',
      rating: 4.9,
      reviews: 287,
      popular: true
    },
    {
      id: 3,
      name: 'HVAC Service',
      description: 'Heating, cooling, and ventilation system services',
      image: '/assets/Maintanance.jpg',
      icon: '🌬️',
      rating: 4.7,
      reviews: 198,
      popular: false
    }
  ];
}
      form = {
    issue: '',
    urgency: 'Standard',
    date: '',
    time: '',
    address: '',
    phone: '',
    email: ''
  };
  
  
  setUrgency(value: string) {
    this.form.urgency = value;
  }

  confirmBooking(){
  
  const bookingData = {
   serviceId: this.selectedService.id, // selectedService.name 
    issue: this.form.issue,
    urgency: this.form.urgency,
    date: this.form.date,
    time: this.form.time,
    address: this.form.address,
    phone: this.form.phone,
    email: this.form.email
  };


  this.bookingService.createBooking(bookingData).subscribe({
      next:(res:any)=>{

      this.res_type = "success";
      this.message1 = res.message || "Booking successful!";
      this.showPopup = true;
      setTimeout(() => {
      // 🔥 Reset form
      this.form = {
        issue: '',
        urgency: 'Standard',
        date: '',
        time: '',
        address: '',
        phone: '',
        email: ''
      };
      this.showPopup = false;
      }, 1500);

    },
    error:(err)=>{
      this.res_type = "error";  // ✅ "success" → "error" மாத்துங்க
      // this.message1 = err.error?.message || err.message || "Booking failed. Please try again.";
      this.message1 = "Booking failed. Please try again.";
      this.showPopup = true;
      setTimeout(() => {
      // 🔥 Reset form
      this.form = {
        issue: '',
        urgency: 'Standard',
        date: '',
        time: '',
        address: '',
        phone: '',
        email: ''
      };
      this.showPopup = false;
      }, 1500);
    }
  });

}

}
