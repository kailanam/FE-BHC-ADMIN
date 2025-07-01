import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-academic-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './academic-settings.component.html',
  styleUrl: './academic-settings.component.css'
})
export class AcademicSettingsComponent {
  currentSchoolYear = '2024-2025';
  currentSemester = '1st';
  academicYears = [
    '2018-2019',
    '2019-2020',
    '2020-2021',
    '2021-2022',
    '2022-2023',
    '2023-2024',
    '2024-2025',
    '2025-2026',
    '2026-2027',
    '2027-2028',
    '2028-2029',
    '2029-2030'
  ];
  semesters = ['1st', '2nd', 'Summer'];
  stagedSchoolYear = this.currentSchoolYear;
  stagedSemester = this.currentSemester;

  updateAcademicPeriod() {
    this.currentSchoolYear = this.stagedSchoolYear;
    this.currentSemester = this.stagedSemester;
    alert(`Updated academic period to ${this.currentSchoolYear} ${this.currentSemester}`);
  }

  backupData() {
    // Implement backup logic
    alert('Initiated system backup');
  }

  restoreData() {
    // Implement restore logic
    if (confirm('Are you sure you want to restore from backup? This will override current data.')) {
      alert('Initiated system restore');
    }
  }

  confirmDataReset() {
    if (confirm('Are you sure you want to reset all data? This action cannot be undone.')) {
      alert('Performed system reset');
    }
  }

  activateAcademicYear(year: string) {
    this.stagedSchoolYear = year;
  }

  selectAcademicYear(year: string) {
    this.activateAcademicYear(year);
  }

  get activeAcademicPeriodLabel(): string {
    return `Academic Year ${this.currentSchoolYear} ${this.currentSemester} Semester`;
  }
}
