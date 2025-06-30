// mock-audit-logs.ts
import { AuditLog } from '../../pages/admin-dashboard/admin-dashboard.component';

export const MOCK_AUDIT_LOGS: AuditLog[] = [
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    user: 'Jane Doe',
    action: 'create',
    details: 'Created a new user account for John Smith.'
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 10),
    user: 'Admin',
    action: 'update',
    details: 'Updated system settings.'
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    user: 'Bob Lee',
    action: 'delete',
    details: 'Deleted user Maria Garcia.'
  },
  {
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    user: 'Maria Garcia',
    action: 'create',
    details: 'Created a new faculty record.'
  }
];
