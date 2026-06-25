import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/profile.service';
import { UserProfile,UserProfileUpdate } from '../models/model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!: UserProfile;
  profileForm!: FormGroup;

  isEditing = false;
  userId = 1;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadUserProfile();
  }

  createForm() {
    this.profileForm = this.fb.group({

      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [{ value: '', disabled: true }],

      phoneNo: [
        '',
        [
          Validators.required,
          Validators.pattern('^[6-9][0-9]{9}$')
        ]
      ],

      dataOfBirth: ['', Validators.required],

      gender: ['', Validators.required],

      role: [{ value: '', disabled: true }],

      address: [
        '',
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ]

    });
  }

  loadUserProfile() {

    this.userService.getUserProfile().subscribe({

      next: (data) => {

        this.user = data;

        this.profileForm.patchValue({

          name: data.name,
          email: data.email,
          phoneNo: data.phoneNo,
          dataOfBirth: data.dataOfBirth,
          gender: data.gender,
          role: data.role,
          address: data.address

        });

      }

    });

  }

  toggleEdit() {
    this.isEditing = true;
  }

  cancelEdit() {

    this.isEditing = false;
    this.loadUserProfile();

  }

  saveProfile() {

  if (this.profileForm.invalid) {
    this.profileForm.markAllAsTouched();
    return;
  }

  const updatedUser:UserProfileUpdate = {
  id: this.userId,
  name: this.profileForm.value.name,
  phoneNo: this.profileForm.value.phoneNo,
  dataOfBirth: this.profileForm.value.dataOfBirth,
  gender: this.profileForm.value.gender,
  address: this.profileForm.value.address
};

  this.userService.updateUserProfile(updatedUser).subscribe({
  next: () => {
    alert('Profile Updated Successfully');
    this.isEditing = false;
    this.loadUserProfile();
  },
  error: (err) => {
    console.log(err);
  }
});
}

}