import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookingHomeComponent } from './booking/booking-home/booking-home.component';
import { BookingServiceComponent } from './booking/booking-service/booking-service.component';
import { MybookingComponent } from './booking/mybooking/mybooking.component';
import { ServiceHomeComponent } from './service/service-home/service-home.component';
import { AvailableBookingsComponent } from './service/available-bookings/available-bookings.component';
import { FooterComponent } from './Home_page/footer/footer.component';
import {FeatureComponent} from './Home_page/feature/feature.component';
import { HomeComponent } from './Home_page/home/home.component';
import { HowWorkComponent } from './Home_page/how-work/how-work.component';
import {OurServicesComponent} from './Home_page/our-services/our-services.component';
import { BookingSlideComponent } from './booking/booking-slide/booking-slide.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import {AssignedBookingsComponent} from './service/my-assigned-bookings/my-assigned-bookings.component';
import { VerifyComponent } from './auth/verify/verify.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BookingHomeComponent,
    BookingServiceComponent,
    MybookingComponent,
    ServiceHomeComponent,
    AvailableBookingsComponent,
    AssignedBookingsComponent,
    FooterComponent,
    HomeComponent,
    FeatureComponent,
    HowWorkComponent,
    OurServicesComponent,
    BookingSlideComponent,
    AlertPopupComponent,
    VerifyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
