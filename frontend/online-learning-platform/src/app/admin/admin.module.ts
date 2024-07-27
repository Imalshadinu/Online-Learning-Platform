import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';


@NgModule({
  declarations: [
    ManageStudentsComponent,
    ManageCoursesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
