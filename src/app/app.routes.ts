import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FacultyManagementComponent } from './faculty-management/faculty-management.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { ClasslistManagement } from './classlist-management/classlist-management';
import { FacultyEvalscore} from './faculty-evalscore/faculty-evalscore';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: AdminDashboardComponent },
      { path: 'users', component: AdminDashboardComponent },
      { path: 'settings', component: AdminDashboardComponent },
      { path: 'audit', component: AdminDashboardComponent }
    ]
  },
  { path: 'faculty', component: FacultyManagementComponent },
  { path: 'students', component: StudentManagementComponent },
  { path: 'classlist-management', component: ClasslistManagement },
  { path: 'faculty-evalscore', component: FacultyEvalscore },
  { path: '**', redirectTo: 'admin-dashboard' },
];
