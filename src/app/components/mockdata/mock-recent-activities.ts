// mock-recent-activities.ts
import { Activity } from '../../admin-dashboard/admin-dashboard.component';

export const MOCK_RECENT_ACTIVITIES: Activity[] = [
  {
    id: '1',
    user: 'Jane Doe',
    action: 'Logged in',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    icon: 'user-pen',
    iconColor: '#4CAF50'
  },
  {
    id: '2',
    user: 'John Smith',
    action: 'Updated profile',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    icon: 'user-pen',
    iconColor: '#2196F3'
  },
  {
    id: '3',
    user: 'Admin',
    action: 'Added new user',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    icon: 'user-pen',
    iconColor: '#AE1039'
  },
  {
    id: '4',
    user: 'Registrar',
    action: 'Approved enrollment',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    icon: 'user-pen',
    iconColor: '#FFC107'
  }
];
