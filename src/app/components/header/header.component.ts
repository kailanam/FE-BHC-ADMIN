import { Component } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { CommonModule, DatePipe } from '@angular/common';
import { SidebarService } from '../side-bar/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [IconComponent, CommonModule, DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private sidebarService: SidebarService) {}

  get currentDateTime() {
    return new Date();
  }

  openSidebar() {
    this.sidebarService.openSidebar();
  }
}
