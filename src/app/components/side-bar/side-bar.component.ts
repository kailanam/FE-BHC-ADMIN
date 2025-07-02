import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  activePage = 'admin-dashboard';
  activeSubPage = '';
  sidebarOpen = true;
  showFacultyMenu = false;
  showAcademicSettingsMenu = false;

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

  toggleMenu(menu: 'faculty' | 'academic') {
    if (menu === 'faculty') {
      this.showFacultyMenu = !this.showFacultyMenu;
      if (this.showFacultyMenu) {
        this.showAcademicSettingsMenu = false;
      }
    } else if (menu === 'academic') {
      this.showAcademicSettingsMenu = !this.showAcademicSettingsMenu;
      if (this.showAcademicSettingsMenu) {
        this.showFacultyMenu = false;
      }
    }
  }


  navigateToManagementSub(section: string) {
    this.router.navigate([`/${section}`]);
    this.closeSidebar();
    this.showAcademicSettingsMenu = false;
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

  onDashboardClick() {
    this.showFacultyMenu = false;
    this.showAcademicSettingsMenu = false;
    this.closeSidebar();
  }

  private updateSubmenuVisibility(activePage: string) {
    const facultyPages = [
      'faculty',
      'students',
      'classlist-management',
      'faculty-evalscore',
    ];

    this.showFacultyMenu = facultyPages.includes(activePage);
    this.showAcademicSettingsMenu = this.activeSubPage === 'settings' || this.activeSubPage === 'audit';
  }

}
