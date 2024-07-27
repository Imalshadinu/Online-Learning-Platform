import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentEnrollsComponent } from './student-enrolls/student-enrolls.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { StudyCenterComponent } from './study-center/study-center.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    LandingPageComponent,
    StudentRegistrationComponent,
    StudentLoginComponent,
    StudentEnrollsComponent,
    StudyCenterComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatButtonModule, 
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class StudentModule { }
