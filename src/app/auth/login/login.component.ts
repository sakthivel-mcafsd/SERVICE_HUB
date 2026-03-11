import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  fg!: FormGroup;
  isLoading = false;
  errorMsg = '';

  message1: string = '';
  res_type!: 'success' | 'error' | 'warning';
  showPopup: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

    this.fg = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  // LOGIN
  onLogin(): void {

    if (this.fg.invalid) {
      this.fg.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMsg = '';

    this.authService.login(this.fg.value).subscribe({

      next: (res: any) => {

        console.log('Login response:', res);

        // store token
        if (res?.token) {
          localStorage.setItem('token', res.token);
        }

        this.res_type = "success";
        this.message1 = res.message || "Login Successful";
        this.showPopup = true;

        setTimeout(() => {

          this.showPopup = false;

          const role = res?.role?.toLowerCase();

          if (role === 'customer') {
            this.router.navigate(['/booking']);
          }
          else if (role === 'service') {
            this.router.navigate(['/service']);
          }
          else if (role === 'admin') {
            this.router.navigate(['/admin']);
          }
          else {
            this.errorMsg = 'Unknown role';
          }

        }, 1500);

        this.isLoading = false;
      },

      error: (err) => {

        console.error('Login error:', err);

        this.res_type = "error";
        this.message1 = "Invalid email or password";
        this.showPopup = true;

        this.isLoading = false;
      }

    });

  }

}