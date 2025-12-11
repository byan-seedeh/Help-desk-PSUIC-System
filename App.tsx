import React, { useState } from 'react';
import { UserRole, AppScreen } from './types';
import { Layout } from './components/Layout';
import { LoginScreen } from './screens/Login';
import { 
    StudentDashboard, 
    StudentCreateTicket, 
    StudentScanRoom, 
    StudentBookAppointment, 
    StudentFixNotification 
} from './screens/student/StudentScreens';
import { StudentTicketDetails } from './screens/student/TicketDetails';
import { StaffDashboard } from './screens/staff/StaffDashboard';
import { StaffTicketAction } from './screens/staff/TicketAction';
import { AdminDashboard } from './screens/admin/AdminDashboard';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole | null>(null);
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.LOGIN);

  const handleLogin = (selectedRole: UserRole) => {
    setRole(selectedRole);
    if (selectedRole === UserRole.STUDENT) setCurrentScreen(AppScreen.STUDENT_DASHBOARD);
    else if (selectedRole === UserRole.STAFF) setCurrentScreen(AppScreen.STAFF_DASHBOARD);
    else if (selectedRole === UserRole.ADMIN) setCurrentScreen(AppScreen.ADMIN_DASHBOARD);
  };

  const handleLogout = () => {
    setRole(null);
    setCurrentScreen(AppScreen.LOGIN);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      // Student
      case AppScreen.STUDENT_DASHBOARD: return <StudentDashboard onNavigate={setCurrentScreen} />;
      case AppScreen.STUDENT_CREATE_TICKET: return <StudentCreateTicket onNavigate={setCurrentScreen} />;
      case AppScreen.STUDENT_SCAN_ROOM: return <StudentScanRoom onNavigate={setCurrentScreen} />;
      case AppScreen.STUDENT_TICKET_DETAILS: return <StudentTicketDetails onNavigate={setCurrentScreen} />;
      case AppScreen.STUDENT_BOOK_APPOINTMENT: return <StudentBookAppointment onNavigate={setCurrentScreen} />;
      case AppScreen.STUDENT_FIX_NOTIFICATION: return <StudentFixNotification onNavigate={setCurrentScreen} />;
      
      // Staff
      case AppScreen.STAFF_DASHBOARD: return <StaffDashboard onNavigate={setCurrentScreen} />;
      case AppScreen.STAFF_TICKET_ACTION: return <StaffTicketAction onNavigate={setCurrentScreen} />;
      
      // Admin
      case AppScreen.ADMIN_DASHBOARD: return <AdminDashboard />;
      
      default: return <StudentDashboard onNavigate={setCurrentScreen} />;
    }
  };

  if (!role || currentScreen === AppScreen.LOGIN) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <Layout role={role} currentScreen={currentScreen} onNavigate={setCurrentScreen} onLogout={handleLogout}>
      {renderScreen()}
    </Layout>
  );
};

export default App;