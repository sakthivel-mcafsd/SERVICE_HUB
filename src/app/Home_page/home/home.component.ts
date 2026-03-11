import { Component, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  menuOpen = false;
 
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
 
  closeMenu() {
    this.menuOpen = false;
  }
}