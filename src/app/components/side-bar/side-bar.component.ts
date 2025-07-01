import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { filter } from 'rxjs/operators';
import { SidebarService } from './sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [FormsModule, CommonModule, IconComponent, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit, OnDestroy {
  activePage: string = 'admin-dashboard';
  activeSubPage: string = 'overview';
  isExpanded: boolean = true;
  sidebarOpen: boolean = false;
  showDashboardMenu: boolean = false;
  showFacultyMenu: boolean = false;
  private sidebarSub?: Subscription;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private sidebarService: SidebarService
  ) {
    if (this.router.url === '/') {
      this.router.navigate(['/admin-dashboard/overview']);
    }

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const urlParts = event.urlAfterRedirects.split('/');
        if (urlParts.length > 1) {
          this.activePage = urlParts[1];
          this.activeSubPage = urlParts.length > 2 ? urlParts[2] : '';
          this.updateSubmenuVisibility(this.activePage);
        }
      });
  }

  ngOnInit() {
    this.sidebarSub = this.sidebarService.sidebarOpen$.subscribe(open => {
      this.sidebarOpen = open;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.sidebarSub?.unsubscribe();
  }

  toggleDashboardMenu() {
    this.showDashboardMenu = !this.showDashboardMenu;
    if (this.showDashboardMenu) {
      this.showFacultyMenu = false;
    }
  }

  toggleFacultyMenu() {
    this.showFacultyMenu = !this.showFacultyMenu;
    if (this.showFacultyMenu) {
      this.showDashboardMenu = false;
    }
  }

  navigateToSection(section: string) {
    if (section === 'admin-dashboard' && !this.activeSubPage) {
      this.router.navigate(['/admin-dashboard/overview']);
    } else {
      if (section !== 'admin-dashboard') {
        this.activeSubPage = '';
        this.showDashboardMenu = false;
      }
      this.router.navigate(['/' + section]);
    }
    this.closeSidebar();
  }

  navigateToManagementSub(section: string) {
    if (section === 'faculty') {
      this.router.navigate(['/faculty']);
    } else if (section === 'students') {
      this.router.navigate(['/students']);
    } else if (section === 'classlist-management') {
      this.router.navigate(['/classlist-management']);
    } else if (section === 'faculty-evalscore') {
      this.router.navigate(['/faculty-evalscore']);
    }
    this.closeSidebar();
  }

  adminDashboard() {
    this.navigateToSection('admin-dashboard');
  }

  facultyPage() {
    this.navigateToSection('faculty');
  }

  openSidebar() {
    this.sidebarService.openSidebar();
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  logout() {
    this.router.navigate(['/login']);
  }

  isMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= 900;
  }

  private updateSubmenuVisibility(activePage: string) {
    const facultyPages = [
      'faculty',
      'students',
      'classlist-management',
      'faculty-evalscore',
    ];

    if (activePage === 'admin-dashboard') {
      this.showDashboardMenu = true;
      this.showFacultyMenu = false;
    } else if (facultyPages.includes(activePage)) {
      this.showDashboardMenu = false;
      this.showFacultyMenu = true;
    } else {
      this.showDashboardMenu = false;
      this.showFacultyMenu = false;
    }
  }
}
