import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
// import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: ['./booking-home.component.css']
})
export class BookingHomeComponent {
  constructor(private authService:AuthService){}
  user: any;
  userName!:string;
 
ngOnInit() {
  
  this.user = this.authService.getUser();
  console.log(this.user)
  this.userName = this.user.name;

}
  route:boolean=false
  routemethod(){
  this.route=!this.route
  }
  
   logout(): void {
    debugger
    console.log('User logged out');
  }
}
