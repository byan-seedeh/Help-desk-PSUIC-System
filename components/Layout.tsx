import React from 'react';
import { AppScreen, UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<{ currentScreen: AppScreen; onNavigate: (s: AppScreen) => void; onLogout: () => void }> = ({ currentScreen, onNavigate, onLogout }) => {
  const navItemClass = (screen: AppScreen) => 
    `flex items-center gap-3 px-4 py-3 rounded-full transition-colors duration-200 cursor-pointer ${currentScreen === screen ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`;

  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 bg-primary-600 p-6 flex flex-col justify-between shadow-xl z-20">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-lg font-bold leading-normal tracking-wide">PSUIC Helpdesk</h1>
          <p className="text-blue-100 text-sm font-normal">Jane Doe</p>
        </div>
        <nav className="flex flex-col gap-2">
          <div className={navItemClass(AppScreen.STUDENT_DASHBOARD)} onClick={() => onNavigate(AppScreen.STUDENT_DASHBOARD)}>
            <span className="material-symbols-outlined">dashboard</span>
            <p className="text-sm font-medium">Dashboard</p>
          </div>
          <div className={navItemClass(AppScreen.STUDENT_TICKET_DETAILS)} onClick={() => onNavigate(AppScreen.STUDENT_TICKET_DETAILS)}>
            <span className="material-symbols-outlined">confirmation_number</span>
            <p className="text-sm font-medium">My Tickets</p>
          </div>
          <div className={navItemClass(AppScreen.STUDENT_BOOK_APPOINTMENT)} onClick={() => onNavigate(AppScreen.STUDENT_BOOK_APPOINTMENT)}>
            <span className="material-symbols-outlined">calendar_month</span>
            <p className="text-sm font-medium">Appointment</p>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-full text-white/70 hover:bg-white/10 hover:text-white cursor-pointer transition-colors duration-200">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium">Settings</p>
          </div>
        </nav>
      </div>
      <div className="flex flex-col gap-1">
        <div onClick={onLogout} className="flex items-center gap-3 px-4 py-3 rounded-full text-white/70 hover:bg-white/10 hover:text-white cursor-pointer transition-colors duration-200">
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm font-medium">Log Out</p>
        </div>
      </div>
    </aside>
  );
};

export const Header: React.FC<{ role: UserRole; onNavigate: (s: AppScreen) => void; onLogout: () => void }> = ({ role, onNavigate, onLogout }) => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(role === UserRole.ADMIN ? AppScreen.ADMIN_DASHBOARD : AppScreen.STAFF_DASHBOARD)}>
        <div className="size-8 text-primary-600 bg-primary-50 rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined">verified_user</span>
        </div>
        <h2 className="text-slate-800 text-lg font-bold">PSUIC Helpdesk <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full ml-2">{role}</span></h2>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => onNavigate(role === UserRole.ADMIN ? AppScreen.ADMIN_DASHBOARD : AppScreen.STAFF_DASHBOARD)} className="text-slate-600 hover:text-primary-600 text-sm font-medium transition-colors">Dashboard</button>
          <button className="text-slate-600 hover:text-primary-600 text-sm font-medium transition-colors">Tickets</button>
          <button className="text-slate-600 hover:text-primary-600 text-sm font-medium transition-colors">Knowledge Base</button>
        </nav>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="flex items-center gap-3">
            <button className="flex items-center justify-center rounded-full h-9 w-9 text-slate-500 hover:bg-slate-50 hover:text-primary-600 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="relative group cursor-pointer" onClick={onLogout}>
                 <img src="https://picsum.photos/100/100" alt="User" className="h-9 w-9 rounded-full object-cover border border-slate-200" />
                 <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block border border-slate-100">
                     <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</button>
                 </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export const AdminSidebar: React.FC<{ onNavigate: (s: AppScreen) => void; onLogout: () => void; currentScreen: AppScreen }> = ({ onNavigate, onLogout, currentScreen }) => {
    const navClass = (isActive: boolean) => `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-primary-600 font-medium'}`;
    
    return (
        <aside className="sticky top-0 h-screen w-64 shrink-0 bg-white border-r border-slate-200 p-4 flex flex-col justify-between z-20">
            <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-3 px-2 py-2">
                    <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                        <span className="material-symbols-outlined text-xl">admin_panel_settings</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 text-sm font-bold">Admin Panel</h1>
                        <p className="text-primary-600 text-xs font-medium">PSUIC Helpdesk</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-1">
                    <div className="px-3 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Main Menu</div>
                    <button onClick={() => onNavigate(AppScreen.ADMIN_DASHBOARD)} className={navClass(currentScreen === AppScreen.ADMIN_DASHBOARD)}>
                        <span className="material-symbols-outlined">dashboard</span>
                        Dashboard
                    </button>
                    <button className={navClass(false)}>
                        <span className="material-symbols-outlined">group</span>
                        Manage Users
                    </button>
                    <button className={navClass(false)}>
                        <span className="material-symbols-outlined">meeting_room</span>
                        Manage Rooms
                    </button>
                     <button className={navClass(false)}>
                        <span className="material-symbols-outlined">devices</span>
                        Manage Equipment
                    </button>
                     <button className={navClass(false)}>
                        <span className="material-symbols-outlined">event_available</span>
                        Manage Appointments
                    </button>
                </nav>
            </div>
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
                <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition-colors">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="text-sm font-medium">Settings</span>
                </button>
                 <button onClick={onLogout} className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors">
                    <span className="material-symbols-outlined">logout</span>
                    <span className="text-sm font-medium">Logout</span>
                </button>
            </div>
        </aside>
    )
}

export const Layout: React.FC<LayoutProps> = ({ children, role, currentScreen, onNavigate, onLogout }) => {
  if (role === UserRole.STUDENT) {
    return (
      <div className="flex min-h-screen w-full bg-slate-50">
        <Sidebar currentScreen={currentScreen} onNavigate={onNavigate} onLogout={onLogout} />
        <main className="flex-1 overflow-auto h-screen">
            {children}
        </main>
      </div>
    );
  }

  if (role === UserRole.ADMIN) {
      return (
        <div className="flex min-h-screen w-full bg-slate-50">
            <AdminSidebar currentScreen={currentScreen} onNavigate={onNavigate} onLogout={onLogout} />
            <main className="flex-1 overflow-auto h-screen">
                {children}
            </main>
        </div>
      );
  }

  // Staff Layout
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <Header role={role} onNavigate={onNavigate} onLogout={onLogout} />
      <main className="flex-1 overflow-auto w-full max-w-[1920px] mx-auto">
        {children}
      </main>
    </div>
  );
};
