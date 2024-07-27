import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { StudentEnrollsComponent } from './student-enrolls/student-enrolls.component';
import { StudyCenterComponent } from './study-center/study-center.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  // { path: 'registration', component: StudentRegistrationComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'study-center', component: StudyCenterComponent},
  { path: 'enrolls', component: StudentEnrollsComponent },
  { path: '**', component: LandingPageComponent },
  // { path: 'courses', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
