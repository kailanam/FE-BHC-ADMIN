// mock-users.ts
import { User } from '../../pages/admin-dashboard/admin-dashboard.component';

export const MOCK_USERS: User[] = [
  {
    id: 'u1',
    name: 'Jane Doe',
    role: 'admin',
    status: 'active',
    lastActive: new Date(Date.now() - 1000 * 60 * 5)
  },
  {
    id: 'u2',
    name: 'John Smith',
    role: 'faculty',
    status: 'inactive',
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 2)
  },
  {
    id: 'u4',
    name: 'Bob Lee',
    role: 'registrar',
    status: 'active',
    lastActive: new Date(Date.now() - 1000 * 60 * 10)
  },
  {
    id: 'u5',
    name: 'Maria Garcia',
    role: 'faculty',
    status: 'inactive',
    lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24)
  }
];
