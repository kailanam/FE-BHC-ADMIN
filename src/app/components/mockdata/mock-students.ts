export interface ClassItem {
  id: number;
  name: string;
}

export interface Student {
  id: number;
  name: string;
  department: string;
  year: string;
  enrolledClasses: ClassItem[];
}

export const MOCK_STUDENTS: Student[] = [
  { id: 1, name: 'John Doe', department: 'Science', year: '1st Year', enrolledClasses: [{ id: 1, name: 'Mathematics 101' }] },
  { id: 2, name: 'Jane Smith', department: 'Arts', year: '2nd Year', enrolledClasses: [{ id: 2, name: 'English 201' }] },
  { id: 3, name: 'Alice Johnson', department: 'Engineering', year: '3rd Year', enrolledClasses: [] },
  { id: 4, name: 'Bob Brown', department: 'Business', year: '4th Year', enrolledClasses: [] },
  { id: 5, name: 'Emily White', department: 'Law', year: '1st Year', enrolledClasses: [] },
  { id: 6, name: 'Chris Green', department: 'Science', year: '2nd Year', enrolledClasses: [] },
  { id: 7, name: 'Samantha Lee', department: 'Medicine', year: '3rd Year', enrolledClasses: [] },
  { id: 8, name: 'David Kim', department: 'Engineering', year: '4th Year', enrolledClasses: [] },
  { id: 9, name: 'Linda Park', department: 'Science', year: '1st Year', enrolledClasses: [] },
  { id: 10, name: 'Michael Chan', department: 'Arts', year: '2nd Year', enrolledClasses: [] },
  { id: 11, name: 'Rachel Tan', department: 'Business', year: '3rd Year', enrolledClasses: [] },
  { id: 12, name: 'Kevin Lim', department: 'Law', year: '4th Year', enrolledClasses: [] },
  { id: 13, name: 'Olivia Cruz', department: 'Medicine', year: '1st Year', enrolledClasses: [] },
  { id: 14, name: 'Ethan Wong', department: 'Engineering', year: '2nd Year', enrolledClasses: [] },
  { id: 15, name: 'Sophia Reyes', department: 'Science', year: '3rd Year', enrolledClasses: [] },
  { id: 16, name: 'Lucas Tan', department: 'Arts', year: '4th Year', enrolledClasses: [] },
  { id: 17, name: 'Grace Lee', department: 'Business', year: '1st Year', enrolledClasses: [] },
  { id: 18, name: 'Henry Ong', department: 'Law', year: '2nd Year', enrolledClasses: [] },
  { id: 19, name: 'Megan Chua', department: 'Medicine', year: '3rd Year', enrolledClasses: [] },
  { id: 20, name: 'Daniel Goh', department: 'Engineering', year: '4th Year', enrolledClasses: [] }
];

export const MOCK_CLASSES: ClassItem[] = [
  { id: 1, name: 'Mathematics 101' },
  { id: 2, name: 'English 201' },
  { id: 3, name: 'Physics 301' },
  { id: 4, name: 'Chemistry 401' }
];
