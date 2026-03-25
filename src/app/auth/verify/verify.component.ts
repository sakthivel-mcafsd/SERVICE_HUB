import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  message = '';
  isSuccess = false;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

    const token = this.route.snapshot.queryParamMap.get('token');

    if (!token) {
      this.message = 'Invalid verification link';
      this.isLoading = false;
      return;
    }

    this.authService.verifyEmail(token).subscribe({

      next: (res: any) => {
        this.isSuccess = true;
        this.message = res.message; // 🔥 must
      
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      
        this.isLoading = false;
      },

      error: (err) => {
        this.isSuccess = false;
      
        if (err.error && err.error.message) {
          this.message = err.error.message;
        } else if (typeof err.error === 'string') {
          this.message = err.error;
        } else {
          this.message = 'Verification failed';
        }
      
        this.isLoading = false;
      }

    });

  }

}
