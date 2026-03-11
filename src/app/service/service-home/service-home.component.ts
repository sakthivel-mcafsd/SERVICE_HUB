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
}
