import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginComponent } from 'src/app/shared/components/login/login.component';

export interface TransformedUser {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

  @Output() switchToSignIn = new EventEmitter<void>();
  strongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  registrationForm!: FormGroup;
  transformedUser!: TransformedUser;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentRegistrationComponent>,
    public dialog: MatDialog,
    private authService: AuthService
  ) {}
  
  ngOnInit(): void{
    this.registrationForm = new FormGroup({
      firstName: new FormControl("", [
        Validators.required
      ]),
      lastName: new FormControl("", [
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(this.strongPasswordRegx)
      ]),
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(JSON.stringify(this.registrationForm.value));
      // Transform the user object such that it maches to the api call
      let transformedUser = JSON.stringify(this.transformUser(this.registrationForm.value));
      console.log(transformedUser)
      this.authService.register(transformedUser);
      this.dialogRef.close();
      this.switchToSignIn.emit();
    }
  }

  transformUser(user: any): TransformedUser {
    return {
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      password: user.password
    };
  }

  onSwitchToSignIn() {
    this.switchToSignIn.emit();
  }

}
