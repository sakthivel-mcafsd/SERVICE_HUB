import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  fg!: FormGroup;
  isLoading = false;
  errorMsg = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.fg = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  // ✅ set role
  setRole(role: string) {
    this.fg.patchValue({ role });
    this.fg.get('role')?.markAsTouched();
  }

  // ✅ SUBMIT
  onSubmit() {

    if (this.fg.invalid) {
      this.fg.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMsg = '';

    const payload = this.fg.value;

    // 🔥 CALL REGISTER API
    this.authService.register(payload).subscribe({

      next: (res) => {
        alert(res.message);
        
          this.router.navigate(['home']);
        
          
        

        this.isLoading = false;
      },

      error: (err) => {
        console.error(err);

        alert(err.error.message);
      
        this.errorMsg = err.error || 'Registration failed';
      
        this.isLoading = false;
}
    });
  }
}
