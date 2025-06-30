// mock-faculty.ts
export interface Faculty {
  id: string;
  name: string;
  department: string;
  position: string;
}

export const MOCK_FACULTY: Faculty[] = [
  { id: 'f1', name: 'Dr. Alice Smith', department: 'Science', position: 'Professor' },
  { id: 'f2', name: 'Dr. Bob Johnson', department: 'Arts', position: 'Associate Professor' },
  { id: 'f3', name: 'Dr. Carol Lee', department: 'Engineering', position: 'Assistant Professor' },
  { id: 'f4', name: 'Dr. David Kim', department: 'Business', position: 'Lecturer' }
];
