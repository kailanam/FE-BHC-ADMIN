

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { HeaderComponent } from '../components/header/header.component';
import { MOCK_AUDIT_LOGS } from '../components/mockdata/mock-audit-logs';

export interface AuditLog {
  timestamp: Date;
  user: string;
  action: string;
  details: string;
}

@Component({
  selector: 'app-audit-trail',
  standalone: true,
  imports: [CommonModule, FormsModule, SideBarComponent, HeaderComponent],
  templateUrl: './audit-trail.html',
  styleUrl: './audit-trail.css'
})
export class AuditTrailComponent {
  auditStartDate: Date = new Date();
  auditEndDate: Date = new Date();
  auditActionFilter = '';
  auditLogs: AuditLog[] = [...MOCK_AUDIT_LOGS];
  filteredAuditLogs: AuditLog[] = [...MOCK_AUDIT_LOGS];

  filterAuditLogs() {
    this.filteredAuditLogs = this.auditLogs.filter(log => {
      const dateInRange = log.timestamp >= this.auditStartDate && log.timestamp <= this.auditEndDate;
      const actionMatch = !this.auditActionFilter || log.action.includes(this.auditActionFilter);
      return dateInRange && actionMatch;
    });
  }
}
