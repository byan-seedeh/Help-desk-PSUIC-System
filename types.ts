export enum UserRole {
  STUDENT = 'STUDENT',
  STAFF = 'STAFF',
  ADMIN = 'ADMIN',
  GUEST = 'GUEST'
}

export enum AppScreen {
  LOGIN = 'LOGIN',
  // Student Screens
  STUDENT_DASHBOARD = 'STUDENT_DASHBOARD',
  STUDENT_CREATE_TICKET = 'STUDENT_CREATE_TICKET',
  STUDENT_SCAN_ROOM = 'STUDENT_SCAN_ROOM',
  STUDENT_TICKET_DETAILS = 'STUDENT_TICKET_DETAILS',
  STUDENT_BOOK_APPOINTMENT = 'STUDENT_BOOK_APPOINTMENT',
  STUDENT_FIX_NOTIFICATION = 'STUDENT_FIX_NOTIFICATION',
  
  // Staff Screens
  STAFF_DASHBOARD = 'STAFF_DASHBOARD',
  STAFF_TICKET_ACTION = 'STAFF_TICKET_ACTION',
  
  // Admin Screens
  ADMIN_DASHBOARD = 'ADMIN_DASHBOARD'
}

export interface Ticket {
  id: string;
  subject: string;
  room: string;
  status: 'Pending' | 'In Progress' | 'Fixed' | 'Rejected' | 'Completed';
  lastUpdated: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  description?: string;
  equipment?: string;
  user?: string;
  date?: string;
}

export const MOCK_TICKETS: Ticket[] = [
  { id: '#2024-001', subject: 'Laptop screen flickering', room: '301', status: 'In Progress', lastUpdated: '2 hours ago', urgency: 'High', user: 'Jane Doe', date: 'Oct 26, 2023' },
  { id: '#2024-002', subject: 'Wi-Fi connection issues', room: 'Library', status: 'Fixed', lastUpdated: '1 day ago', urgency: 'Medium', user: 'John Smith', date: 'Oct 26, 2023' },
  { id: '#2024-003', subject: 'Cannot install software', room: 'Lab A', status: 'Pending', lastUpdated: '3 days ago', urgency: 'Low', user: 'Emily Jones', date: 'Oct 25, 2023' },
  { id: '#2024-004', subject: 'Printer not working', room: '105', status: 'Rejected', lastUpdated: '5 days ago', urgency: 'Medium', user: 'Michael Brown', date: 'Oct 24, 2023' },
];
