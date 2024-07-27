import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { adminGuard } from '../core/guards/admin.guard';
import { ManageCoursesComponent } from './manage-courses/manage-courses.component';

const routes: Routes = [
  { path: '', component: ManageStudentsComponent, canActivate: [adminGuard], children: [
    { path: 'manage-courses', component: ManageCoursesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
