import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './Home_page/home/home.component';
import { BookingHomeComponent } from './booking/booking-home/booking-home.component';
import { ServiceHomeComponent } from './service/service-home/service-home.component';
import { BookingServiceComponent } from './booking/booking-service/booking-service.component';
import { MybookingComponent } from './booking/mybooking/mybooking.component';
import { BookingSlideComponent } from './booking/booking-slide/booking-slide.component';
import { AvailableBookingsComponent} from './service/available-bookings/available-bookings.component';
import {AssignedBookingsComponent} from './service/my-assigned-bookings/my-assigned-bookings.component';
import{VerifyComponent} from'./auth/verify/verify.component';

const routes: Routes = [

  // Default
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  // Auth
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify', component: VerifyComponent },

  // Booking
  {
    path: 'booking',
    component: BookingHomeComponent,
    children: [
      { path: 'bookingpage', component: BookingServiceComponent },
      { path: 'mybooking', component: MybookingComponent },
      { path: 'slide/:id', component: BookingSlideComponent },
      { path: '', redirectTo: 'bookingpage', pathMatch: 'full' }
    ]
  },

  // Service
  {
    path: 'service',
    component: ServiceHomeComponent,
    children: [
      { path: 'service_body', component: AvailableBookingsComponent },
      { path: 'assigned-bookings', component: AssignedBookingsComponent },
      { path: '', redirectTo: 'service_body', pathMatch: 'full' }
    ]
  },

  // Wildcard
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',   // ✅ important
    anchorScrolling: 'enabled'          // ✅ for fragment scroll
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}