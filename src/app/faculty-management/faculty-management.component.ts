import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { IconComponent } from '../icon/icon.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faculty-management',
  imports: [HeaderComponent, SideBarComponent, IconComponent, CommonModule, DatePipe, FormsModule],
  templateUrl: './faculty-management.component.html',
  styleUrl: './faculty-management.component.css'
})
export class FacultyManagementComponent {
  userSearchQuery: string = '';
  departments: string[] = ['None', 'Science', 'Arts', 'Engineering', 'Business', 'Law'];
  users = [
    { name: 'John Doe', role: 'faculty', status: 'active', department: 'Science', lastActive: new Date() },
    { name: 'Jane Smith', role: 'admin', status: 'inactive', department: 'Arts', lastActive: new Date() },
    { name: 'Alice Johnson', role: 'registrar', status: 'active', department: 'Engineering', lastActive: new Date() }
  ];
  filteredUsers = this.users;

  editingUser = false;
  addingUser = false;
  editUserData: any = {};
  newUserData: any = { name: '', role: '', status: 'active', department: '' };
  addUserFormSubmitted = false;

  ngOnInit() {
    this.filterUsers();
  }

  ngOnChanges() {
    this.filterUsers();
  }

  filterUsers() {
    const query = this.userSearchQuery.toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.status.toLowerCase().includes(query) ||
      (user.department && user.department.toLowerCase().includes(query))
    );
  }

  openUserModal() {
    this.addingUser = true;
    this.addUserFormSubmitted = false;
    this.newUserData = { name: '', role: '', status: 'active', department: '' };
  }

  saveNewUser() {
    this.addUserFormSubmitted = true;
    if (!this.newUserData.name || !this.newUserData.role || !this.newUserData.status || !this.newUserData.department) {
      return;
    }
    this.users.push({ ...this.newUserData, lastActive: new Date() });
    this.addingUser = false;
    this.filterUsers();
    this.addUserFormSubmitted = false;
  }

  cancelAddUser() {
    this.addingUser = false;
    this.addUserFormSubmitted = false;
  }

  editUser(user: any) {
    this.editingUser = true;
    this.editUserData = { ...user };
  }

  saveUserEdit() {
    const idx = this.users.findIndex(u => u.name === this.editUserData.name);
    if (idx > -1) {
      this.users[idx] = { ...this.editUserData, lastActive: this.users[idx].lastActive };
    }
    this.editingUser = false;
    this.filterUsers();
  }

  cancelUserEdit() {
    this.editingUser = false;
  }

  deleteUser(user: any) {
    this.users = this.users.filter(u => u !== user);
    this.filterUsers();
  }
}
