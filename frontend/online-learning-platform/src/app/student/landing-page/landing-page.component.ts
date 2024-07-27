import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentRegistrationComponent } from '../student-registration/student-registration.component';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  courses!: any[];

  constructor(public dialog: MatDialog, private router: Router, private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(
      (response) => {
        this.courses = response;
        console.log(this.courses)
      },
      (error) => {
        console.error('Error fetching values', error);
      }
    );
  }

  openRegisterPopup() {
    const dialogRef = this.dialog.open(StudentRegistrationComponent);

    dialogRef.componentInstance.switchToSignIn.subscribe(() => {
      dialogRef.close();
      this.openSignInPopup();
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSignInPopup() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.componentInstance.isSignInClicked.subscribe(() => {
      dialogRef.close();
      this.router.navigate(['/study-center']);
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
