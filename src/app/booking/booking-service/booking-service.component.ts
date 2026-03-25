import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-booking-service',
  templateUrl: './booking-service.component.html',
  styleUrls: ['./booking-service.component.css']
})
export class BookingServiceComponent implements OnInit {

  searchText: string = '';

  services: Service[] = [];
  filteredServices: Service[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadServices();
    this.filteredServices = [...this.services]; // ✅ safe copy
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
        id: 6,
        name: 'HVAC Service',
        description: 'Heating, cooling, and ventilation system services',
        image: 'assets/Maintanance.jpg',
        icon: '🌬️',
        rating: 4.7,
        reviews: 198,
        popular: false
      },
      {
        id: 4,
        name: 'Carpentry',
        description: 'Custom woodwork, furniture repair, and installation',
        image: 'assets/Corpenter.jpg',
        icon: '🛠️',
        rating: 4.6,
        reviews: 156,
        popular: false
      },
      {
        id: 5,
        name: 'Painting',
        description: 'Interior and exterior painting by skilled professionals',
        image: 'assets/painter pic.jpg',
        icon: '🎨',
        rating: 4.6,
        reviews: 156,
        popular: false
      },
      {
        id: 4,
        name: 'Carpentry',
        description: 'Custom woodwork, furniture repair, and installation',
        image: 'assets/Carpentry.jpg',
        icon: '🛠️',
        rating: 4.6,
        reviews: 156,
        popular: false
      }
    ];
  }

  onSearch(): void {
    const text = this.searchText.trim().toLowerCase();

    if (!text) {
      this.filteredServices = [...this.services];
      return;
    }

    this.filteredServices = this.services.filter(service =>
      service.name.toLowerCase().includes(text) ||
      service.description.toLowerCase().includes(text)
    );
  }

  openFilters(): void {
    console.log('Filters clicked');
  }

  bookService(service: Service): void {
    this.router.navigate(['/booking/slide', service.id]);
  }
}
