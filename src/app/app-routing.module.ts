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
import { AvailableBookingsComponent } from './service/available-bookings/available-bookings.component';

const routes: Routes = [
  // 🔹 Default route
  { path: '', component: HomeComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  // auth
  { path: 'login', component:LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path:'booking',component:BookingHomeComponent,
    children:[
      {path:'bookingpage',component:BookingServiceComponent},
      {path:'mybooking',component:MybookingComponent},
      {path:'slide/:id',component:BookingSlideComponent},
      { path: '', redirectTo: 'bookingpage', pathMatch: 'full' }
    ]
  },
  {path:'service',component:ServiceHomeComponent,
    children:[{path:'service_body',component:AvailableBookingsComponent},
      { path: '', redirectTo: 'service_body', pathMatch: 'full' }
    ]

  },
   { path: '**', redirectTo: 'home' }
  //User(bookink)
];
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'disabled', // 🔴 this is the KEY
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
