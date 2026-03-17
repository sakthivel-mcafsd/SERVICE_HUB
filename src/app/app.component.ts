import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceHub';
  

constructor(private router: Router) {}

ngOnInit() {

  // 🔥 Page reload detect pannum
  const isReload = performance
    .getEntriesByType('navigation')
    .map((nav: any) => nav.type)
    .includes('reload');

  if (isReload) {
    // 👉 URL la irukura #fragment remove pannum
    window.location.hash = '';

    // 👉 Force scroll to top (Hero section)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 0);
  }
}
}
