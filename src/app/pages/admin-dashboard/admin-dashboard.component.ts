import { Component, OnInit, PLATFORM_ID, Inject, ViewChild } from '@angular/core';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MOCK_USERS } from '../components/mockdata/mock-users';
import { MOCK_AUDIT_LOGS } from '../components/mockdata/mock-audit-logs';
import { MOCK_RECENT_ACTIVITIES } from '../components/mockdata/mock-recent-activities';
import { AcademicSettingsComponent } from '../pages/academic-settings/academic-settings.component';

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'faculty' | 'registrar';
  status: 'active' | 'inactive';
  lastActive: Date;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: Date;
  icon: string;
  iconColor: string;
}

export interface AuditLog {
  timestamp: Date;
  user: string;
  action: string;
  details: string;
}

interface EnrollmentData {
  year: number;
  students: number;
  semester: 'First' | 'Second' | 'Summer';
}

interface ProgramData {
  name: string;
  studentCount: number;
  color: string;
}

interface GenderData {
  gender: 'Male' | 'Female' | 'Other';
  count: number;
  color: string;
}

interface AcademicMetrics {
  program: string;
  averageGrade: number;
  passingRate: number;
  retentionRate: number;
}

interface AttendanceData {
  month: string;
  studentAttendance: number;
  facultyAttendance: number;
}

interface FacultyWorkload {
  department: string;
  averageUnits: number;
  facultyCount: number;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [SideBarComponent, HeaderComponent, IconComponent, CommonModule, FormsModule, NgxChartsModule, AcademicSettingsComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(SideBarComponent) sideBar!: SideBarComponent;

  // Chart options
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  timeline = true;

  colorScheme = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#4CAF50', '#2196F3', '#FFC107', '#9C27B0', '#FF5722', '#E91E63']
  };

  // Chart data
  enrollmentChartData: any[] = [];
  programChartData: any[] = [];
  genderChartData: any[] = [];
  academicChartData: any[] = [];
  attendanceChartData: any[] = [];
  workloadChartData: any[] = [];

  // Navigation
  currentSection: string = 'overview';
  activeAnalyticsTab: string = 'enrollment';
  sidebarOpen = false;
  currentDateTime: Date = new Date();

  // Audit trail
  auditStartDate: Date = new Date();
  auditEndDate: Date = new Date();
  auditActionFilter = '';
  auditLogs: AuditLog[] = [...MOCK_AUDIT_LOGS];
  filteredAuditLogs: AuditLog[] = [...MOCK_AUDIT_LOGS];

  // Analytics data
  totalStudents = 1250;
  activeUsersToday = 450;
  activeUsersWeek = 1200;
  studentGrowth = 15;  // 15% growth from last month
  facultyGrowth = 5;   // 5% growth from last month
  totalFaculty = 85;
  totalRegistrars = 5;

  // User management
  userSearchQuery = '';
  users: User[] = [...MOCK_USERS];
  filteredUsers: User[] = [...MOCK_USERS];

  // Activity logs
  recentActivities: Activity[] = [...MOCK_RECENT_ACTIVITIES];

  // Analytics tab management
  analyticsTabOptions = [
    { id: 'enrollment', label: 'Enrollment Trends', icon: 'user-pen' },
    { id: 'programs', label: 'Program Distribution', icon: 'classes' },
    { id: 'demographics', label: 'Demographics', icon: 'personnel' },
    { id: 'academic', label: 'Academic Performance', icon: 'classes' },
    { id: 'attendance', label: 'Attendance', icon: 'calendar' }
  ];

  // Enrollment data
  selectedYear: number = 2025;
  availableYears: number[] = [2023, 2024, 2025];
  selectedSemester: string = 'All';
  availableSemesters: string[] = ['All', 'First', 'Second', 'Summer'];

  enrollmentData: EnrollmentData[] = [
    { year: 2023, semester: 'First', students: 980 },
    { year: 2023, semester: 'Second', students: 950 },
    { year: 2023, semester: 'Summer', students: 420 },
    { year: 2024, semester: 'First', students: 1100 },
    { year: 2024, semester: 'Second', students: 1080 },
    { year: 2024, semester: 'Summer', students: 500 },
    { year: 2025, semester: 'First', students: 1250 },
    { year: 2025, semester: 'Second', students: 1200 },
    { year: 2025, semester: 'Summer', students: 580 },
  ];

  // Program Distribution Data
  programData: ProgramData[] = [
    { name: 'Computer Science', studentCount: 450, color: '#4CAF50' },
    { name: 'Business Administration', studentCount: 380, color: '#2196F3' },
    { name: 'Engineering', studentCount: 320, color: '#FFC107' },
    { name: 'Nursing', studentCount: 280, color: '#9C27B0' },
    { name: 'Education', studentCount: 220, color: '#FF5722' }
  ];

  // Gender Distribution Data
  genderData: GenderData[] = [
    { gender: 'Female', count: 720, color: '#E91E63' },
    { gender: 'Male', count: 510, color: '#2196F3' },
    { gender: 'Other', count: 20, color: '#4CAF50' }
  ];

  // Academic Performance Data
  academicMetrics: AcademicMetrics[] = [
    { program: 'Computer Science', averageGrade: 85.5, passingRate: 92, retentionRate: 88 },
    { program: 'Business Administration', averageGrade: 83.2, passingRate: 89, retentionRate: 85 },
    { program: 'Engineering', averageGrade: 82.8, passingRate: 87, retentionRate: 82 },
    { program: 'Nursing', averageGrade: 86.4, passingRate: 94, retentionRate: 90 },
    { program: 'Education', averageGrade: 84.7, passingRate: 91, retentionRate: 87 }
  ];

  // Attendance Data
  attendanceData: AttendanceData[] = [
    { month: 'January', studentAttendance: 92, facultyAttendance: 96 },
    { month: 'February', studentAttendance: 89, facultyAttendance: 95 },
    { month: 'March', studentAttendance: 91, facultyAttendance: 97 },
    { month: 'April', studentAttendance: 88, facultyAttendance: 96 },
    { month: 'May', studentAttendance: 87, facultyAttendance: 94 },
    { month: 'June', studentAttendance: 90, facultyAttendance: 95 }
  ];

  // Faculty Workload Data
  facultyWorkload: FacultyWorkload[] = [
    { department: 'Computer Studies', averageUnits: 18, facultyCount: 15 },
    { department: 'Business', averageUnits: 15, facultyCount: 12 },
    { department: 'Engineering', averageUnits: 17, facultyCount: 14 },
    { department: 'Nursing', averageUnits: 16, facultyCount: 10 },
    { department: 'Education', averageUnits: 15, facultyCount: 8 }
  ];

  // Program Distribution Filters
  selectedProgramYear: number = 2025;
  programSortBy: 'count' | 'name' = 'count';

  // Demographics Filters
  selectedDemographicsProgram: string = 'all';
  selectedDemographicsYear: string = 'all';

  // Academic Performance Filters
  selectedAcademicSemester: string = 'All';
  selectedAcademicMetric: string = 'all';
  selectedAcademicYear: number = 2025;

  // Attendance Filters
  selectedAttendanceRange: string = '6';
  selectedAttendanceType: string = 'all';
  selectedAttendanceProgram: string = 'all';

  // User Management Edit Modal
  editingUser: User | null = null;
  editUserData = { name: '', role: 'admin', status: 'active' };

  // Add User Modal State
  addingUser = false;
  newUserData = { name: '', role: 'admin', status: 'active' };

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.initializeData();
    // Listen to route changes and update currentSection
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const urlParts = event.urlAfterRedirects.split('/');
        if (urlParts[1] === 'admin-dashboard') {
          this.currentSection = urlParts[2] || 'overview';
        }
      });
  }

  private initializeData() {
    this.prepareAllChartData();
    this.initializeAuditLogs();
  }

  private initializeAuditLogs() {
    // Initialize audit logs with sample data
    this.auditLogs = [
      {
        timestamp: new Date(),
        user: 'Admin',
        action: 'System Start',
        details: 'System initialized'
      }
    ];
    this.filteredAuditLogs = [...this.auditLogs];
  }

  private prepareAllChartData() {
    this.prepareEnrollmentData();
    this.prepareProgramData();
    this.prepareGenderData();
    this.prepareAcademicData();
    this.prepareAttendanceData();
    this.prepareWorkloadData();
  }

  // Event handlers
  onSelect(event: any) {
    console.log('Item clicked', event);
  }

  onSemesterChange(event: Event) {
    this.selectedSemester = (event.target as HTMLSelectElement).value;
    this.prepareEnrollmentData();
  }

  onYearChange(event: Event) {
    this.selectedYear = parseInt((event.target as HTMLSelectElement).value);
    this.prepareEnrollmentData();
  }

  onProgramSortChange(event: Event) {
    this.programSortBy = (event.target as HTMLSelectElement).value as 'count' | 'name';
    this.prepareProgramData();
  }

  setActiveAnalyticsTab(tabId: string) {
    this.activeAnalyticsTab = tabId;
  }

  toggleSidebar() {
    if (this.sideBar) {
      this.sideBar.toggleSidebar();
    }
  }



  ngOnInit() {
    // Set currentSection based on the route
    const url = this.router.url;
    if (url.endsWith('/overview')) {
      this.currentSection = 'overview';
    } else if (url.endsWith('/users')) {
      this.currentSection = 'users';
    } else if (url.endsWith('/settings')) {
      this.currentSection = 'settings';
    } else if (url.endsWith('/audit')) {
      this.currentSection = 'audit';
    } else {
      this.currentSection = 'overview';
    }
  }

  // Chart data preparation methods
  prepareEnrollmentData() {
    const series = this.enrollmentData
      .filter(data => this.selectedSemester === 'All' || data.semester === this.selectedSemester)
      .map(data => ({
        name: `${data.year} ${data.semester}`,
        value: data.students
      }));

    this.enrollmentChartData = [{
      name: 'Enrollment',
      series: series
    }];
  }

  prepareProgramData() {
    this.programChartData = this.programData
      .sort((a, b) => this.programSortBy === 'count' ? b.studentCount - a.studentCount : a.name.localeCompare(b.name))
      .map(program => ({
        name: program.name,
        value: program.studentCount
      }));
  }

  prepareGenderData() {
    this.genderChartData = this.genderData.map(data => ({
      name: data.gender,
      value: data.count
    }));
  }

  prepareAcademicData() {
    this.academicChartData = this.academicMetrics.map(metric => ({
      name: metric.program,
      series: [
        {
          name: 'Average Grade',
          value: metric.averageGrade
        },
        {
          name: 'Passing Rate',
          value: metric.passingRate
        },
        {
          name: 'Retention Rate',
          value: metric.retentionRate
        }
      ]
    }));
  }

  prepareAttendanceData() {
    this.attendanceChartData = [
      {
        name: 'Student Attendance',
        series: this.attendanceData.map(data => ({
          name: data.month,
          value: data.studentAttendance
        }))
      },
      {
        name: 'Faculty Attendance',
        series: this.attendanceData.map(data => ({
          name: data.month,
          value: data.facultyAttendance
        }))
      }
    ];
  }

  prepareWorkloadData() {
    this.workloadChartData = this.facultyWorkload.map(data => ({
      name: data.department,
      series: [
        {
          name: 'Average Units',
          value: data.averageUnits
        },
        {
          name: 'Faculty Count',
          value: data.facultyCount
        }
      ]
    }));
  }

  // User management methods
  openUserModal() {
    this.addingUser = true;
    this.newUserData = { name: '', role: 'admin', status: 'active' };
  }

  saveNewUser() {
    const newUser: User = {
      id: 'u' + (this.users.length + 1),
      name: this.newUserData.name,
      role: this.newUserData.role as any,
      status: this.newUserData.status as any,
      lastActive: new Date()
    };
    this.users.unshift(newUser);
    this.filterUsers();
    this.addingUser = false;
  }

  cancelAddUser() {
    this.addingUser = false;
  }

  filterUsers() {
    if (!this.userSearchQuery) {
      this.filteredUsers = this.users;
    } else {
      const query = this.userSearchQuery.toLowerCase();
      this.filteredUsers = this.users.filter(
        user => user.name.toLowerCase().includes(query) ||
                user.role.toLowerCase().includes(query)
      );
    }
  }

  editUser(user: User) {
    this.editingUser = { ...user };
    this.editUserData = {
      name: user.name,
      role: user.role,
      status: user.status
    };
  }

  saveUserEdit() {
    if (this.editingUser) {
      const idx = this.users.findIndex(u => u.id === this.editingUser!.id);
      if (idx > -1) {
        this.users[idx] = {
          ...this.users[idx],
          name: this.editUserData.name,
          role: this.editUserData.role as any,
          status: this.editUserData.status as any
        };
        this.filterUsers();
      }
      this.editingUser = null;
    }
  }

  cancelUserEdit() {
    this.editingUser = null;
  }

  deleteUser(user: User) {
    // Implement delete user logic with confirmation
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.users = this.users.filter(u => u.id !== user.id);
      this.filterUsers();
      this.addAuditLog('delete', `Deleted user ${user.name}`);
    }
  }

  filterAuditLogs() {
    this.filteredAuditLogs = this.auditLogs.filter(log => {
      const dateInRange = log.timestamp >= this.auditStartDate && 
                         log.timestamp <= this.auditEndDate;
      const actionMatch = !this.auditActionFilter || 
                         log.action.includes(this.auditActionFilter);
      return dateInRange && actionMatch;
    });
  }

  private addAuditLog(action: string, details: string) {
    const log: AuditLog = {
      timestamp: new Date(),
      user: 'Current User', 
      action,
      details
    };
    this.auditLogs.unshift(log);
    this.filterAuditLogs();
  }
}
