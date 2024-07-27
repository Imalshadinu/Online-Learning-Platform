import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit {

  loginForm!: FormGroup;
  passwordErrorMessage: string | null = null; 

  constructor(private authService: AuthService){}

  ngOnInit(): void{
    this.loginForm = new FormGroup({
      email: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          // Handle successful login
          console.log('Login successful', response);
          this.passwordErrorMessage = null; // Clear previous errors
        },
        error => {
          // Handle error
          this.passwordErrorMessage = error.error?.error || 'An error occurred'; // Display error message
          console.error('Login error', error);
        }
      );
    }
  }
}
