import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { IconComponent } from '../../components/icon/icon.component';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-management',
  imports: [HeaderComponent, SideBarComponent, IconComponent, CommonModule, DatePipe, FormsModule],
  templateUrl: './student-management.component.html',
  styleUrl: './student-management.component.css'
})
export class StudentManagementComponent {
  studentSearchQuery: string = '';
  students = [
    { name: 'Michael Brown', status: 'active', department: 'Science', lastActive: new Date() },
    { name: 'Emily White', status: 'inactive', department: 'Arts', lastActive: new Date() },
    { name: 'Chris Green', status: 'active', department: 'Engineering', lastActive: new Date() }
  ];
  filteredStudents = this.students;

  editingStudent = false;
  addingStudent = false;
  addStudentFormSubmitted = false;
  editStudentFormSubmitted = false;
  editStudentData: any = {};
  newStudentData: any = { name: '', status: 'active', department: '' };
  departments: string[] = ['Science', 'Arts', 'Engineering', 'Business', 'Law'];

  ngOnInit() {
    this.filterStudents();
  }

  ngOnChanges() {
    this.filterStudents();
  }

  filterStudents() {
    const query = this.studentSearchQuery.toLowerCase();
    this.filteredStudents = this.students.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.status.toLowerCase().includes(query) ||
      (student.department && student.department.toLowerCase().includes(query))
    );
  }

  openStudentModal() {
    this.addingStudent = true;
    this.addStudentFormSubmitted = false;
    this.newStudentData = { name: '', status: 'active', department: '' };
  }

  saveNewStudent() {
    this.addStudentFormSubmitted = true;
    if (!this.newStudentData.name || !this.newStudentData.status || !this.newStudentData.department) {
      return;
    }
    this.students.push({ ...this.newStudentData, lastActive: new Date() });
    this.addingStudent = false;
    this.filterStudents();
    this.addStudentFormSubmitted = false;
  }

  cancelAddStudent() {
    this.addingStudent = false;
    this.addStudentFormSubmitted = false;
  }

  editStudent(student: any) {
    this.editingStudent = true;
    this.editStudentFormSubmitted = false;
    this.editStudentData = { ...student };
  }

  saveStudentEdit() {
    this.editStudentFormSubmitted = true;
    if (!this.editStudentData.name || !this.editStudentData.status || !this.editStudentData.department) {
      return;
    }
    const idx = this.students.findIndex(s => s.name === this.editStudentData.name);
    if (idx > -1) {
      this.students[idx] = { ...this.editStudentData, lastActive: this.students[idx].lastActive };
    }
    this.editingStudent = false;
    this.filterStudents();
    this.editStudentFormSubmitted = false;
  }

  cancelStudentEdit() {
    this.editingStudent = false;
    this.editStudentFormSubmitted = false;
  }

  deleteStudent(student: any) {
    this.students = this.students.filter(s => s !== student);
    this.filterStudents();
  }
}
