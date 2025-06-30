import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from "../components/side-bar/side-bar.component";
import { HeaderComponent } from "../components/header/header.component";
import { MOCK_STUDENTS, MOCK_CLASSES, Student, ClassItem } from '../components/mockdata/mock-students';

@Component({
  selector: 'app-classlist-management',
  imports: [CommonModule, FormsModule, SideBarComponent, HeaderComponent],
  templateUrl: './classlist-management.html',
  styleUrl: './classlist-management.css'
})
export class ClasslistManagement {
  students: Student[] = MOCK_STUDENTS;
  studentSearchQuery: string = '';
  filteredStudents: Student[] = this.students;
  selectedStudent: Student | null = null;

  allClasses: ClassItem[] = MOCK_CLASSES;

  get enrolledClasses() {
    return this.selectedStudent ? this.selectedStudent.enrolledClasses : [];
  }

  get availableClasses() {
    if (!this.selectedStudent) return [];
    return this.allClasses.filter(cls => !this.selectedStudent!.enrolledClasses.some(ec => ec.id === cls.id));
  }

  filterStudents() {
    const query = this.studentSearchQuery.toLowerCase();
    this.filteredStudents = this.students.filter(student =>
      student.name.toLowerCase().includes(query) ||
      student.department.toLowerCase().includes(query)
    );
  }

  selectStudent(student: Student) {
    this.selectedStudent = student;
  }

  addClass(cls: ClassItem) {
    if (this.selectedStudent && !this.selectedStudent.enrolledClasses.some(c => c.id === cls.id)) {
      this.selectedStudent.enrolledClasses.push(cls);
    }
  }

  removeClass(cls: ClassItem) {
    if (this.selectedStudent) {
      this.selectedStudent.enrolledClasses = this.selectedStudent.enrolledClasses.filter(c => c.id !== cls.id);
    }
  }

  updateClasses() {
    // Implement update logic (e.g., save to backend or show a message)
    alert('Class list updated!');
  }
}


