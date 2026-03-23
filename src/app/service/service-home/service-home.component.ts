import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-service-home',
  templateUrl: './service-home.component.html',
  styleUrls: ['./service-home.component.css']
})
export class ServiceHomeComponent {
   user!:any;
   userName!:string;
   constructor(private authService:AuthService){}
  ngOnInit() {
  
  this.user = this.authService.getUser();
  console.log(this.user)
  this.userName = this.user.name;

}

 menuOpen = false;
 
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
 
  closeMenu() {
    this.menuOpen = false;
  }

  route:boolean=false
  routemethod(){
  this.route=!this.route
  }

  scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

}
