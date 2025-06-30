import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { FacultyManagementComponent } from './pages/faculty-management/faculty-management.component';
import { StudentManagementComponent } from './pages/student-management/student-management.component';
import { ClasslistManagement } from './pages/classlist-management/classlist-management';
import { FacultyEvalscore} from './pages/faculty-evalscore/faculty-evalscore';

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
