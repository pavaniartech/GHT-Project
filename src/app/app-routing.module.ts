import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentRegistrationComponent } from './tutor-park/student/student-registration/student-registration.component';
import { TutorRegistrationComponent } from './tutor-park/tutor/tutor-registration/tutor-registration.component';
import { ParentRegistrationComponent } from './parent-registration/parent-registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-signup', component: StudentRegistrationComponent },
  { path: 'instructor-signup', component: TutorRegistrationComponent },
  { path: 'parent-signup', component: ParentRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
