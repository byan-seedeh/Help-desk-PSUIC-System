import React, { useState } from 'react';
import { AppScreen } from '../../types';

interface ScreenProps {
  onNavigate: (screen: AppScreen) => void;
}

// ----------------------------------------------------------------------
// Dashboard
// ----------------------------------------------------------------------

export const StudentDashboard: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto">
      <div className="mb-10 animate-fade-in-up">
        <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-tight">Welcome back, Jane!</h1>
      </div>
      
      <h2 className="text-slate-900 text-2xl font-bold leading-tight mb-6">What would you like to do?</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {[
          { icon: 'qr_code_scanner', title: 'Scan QR', desc: 'Scan a device QR code', action: () => onNavigate(AppScreen.STUDENT_SCAN_ROOM) },
          { icon: 'add_circle', title: 'Create Ticket', desc: 'Submit a new support ticket', action: () => onNavigate(AppScreen.STUDENT_CREATE_TICKET) },
          { icon: 'manage_search', title: 'Track Status', desc: 'Check on your tickets', action: () => onNavigate(AppScreen.STUDENT_TICKET_DETAILS) },
          { icon: 'book_online', title: 'Book Appointment', desc: 'Schedule a repair time', action: () => onNavigate(AppScreen.STUDENT_BOOK_APPOINTMENT) },
        ].map((item, idx) => (
          <div key={idx} onClick={item.action} className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 hover:border-primary-500 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <span className="material-symbols-outlined text-primary-600 text-4xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-900 text-lg font-bold">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-slate-900 text-2xl font-bold leading-tight mb-6">Your Recent Tickets</h2>
      <div className="flex flex-col gap-4">
        {[
          { id: '#2024-001', subject: 'Laptop screen flickering', updated: '2 hours ago', status: 'In Progress', color: 'bg-yellow-100 text-yellow-800' },
          { id: '#2024-002', subject: 'Wi-Fi connection issues', updated: '1 day ago', status: 'Fixed', color: 'bg-green-100 text-green-800', action: () => onNavigate(AppScreen.STUDENT_FIX_NOTIFICATION) },
          { id: '#2024-003', subject: 'Cannot install software', updated: '3 days ago', status: 'Pending', color: 'bg-blue-100 text-blue-800' },
          { id: '#2024-004', subject: 'Printer not working', updated: '5 days ago', status: 'Rejected', color: 'bg-red-100 text-red-800' },
        ].map((ticket, idx) => (
          <div key={idx} onClick={ticket.action || (() => onNavigate(AppScreen.STUDENT_TICKET_DETAILS))} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col">
              <p className="text-xs text-slate-500 font-semibold uppercase">Ticket ID</p>
              <p className="text-slate-900 font-semibold">{ticket.id}</p>
            </div>
            <div className="flex flex-col md:col-span-1">
              <p className="text-xs text-slate-500 font-semibold uppercase">Subject</p>
              <p className="text-slate-900 font-semibold truncate">{ticket.subject}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs text-slate-500 font-semibold uppercase">Last Updated</p>
              <p className="text-slate-900 font-semibold">{ticket.updated}</p>
            </div>
            <div className="flex justify-start md:justify-end">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${ticket.status === 'Fixed' ? 'bg-green-100 text-green-700' : ticket.color}`}>
                {ticket.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Create Ticket Flow
// ----------------------------------------------------------------------

export const StudentCreateTicket: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-5xl mx-auto flex flex-col gap-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <span className="hover:text-primary-600 cursor-pointer" onClick={() => onNavigate(AppScreen.STUDENT_DASHBOARD)}>Home</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-slate-900 font-medium">Create Ticket</span>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-black text-slate-900">Create a New Helpdesk Ticket</h1>
        <p className="text-slate-500">Fill out the form below to submit a new ticket.</p>
      </div>

      {/* Steps */}
      <div className="flex items-center w-full max-w-xl mb-4">
         <div className="flex flex-col items-center gap-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">1</div>
            <span className="text-primary-700 font-bold text-sm">Details</span>
         </div>
         <div className="h-0.5 flex-1 bg-slate-200 -mx-2"></div>
         <div className="flex flex-col items-center gap-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm">2</div>
            <span className="text-slate-400 font-medium text-sm">Review</span>
         </div>
         <div className="h-0.5 flex-1 bg-slate-200 -mx-2"></div>
         <div className="flex flex-col items-center gap-2 relative z-10">
            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm">3</div>
            <span className="text-slate-400 font-medium text-sm">Done</span>
         </div>
      </div>

      {/* Self Help Section */}
      <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
         <div className="flex items-start gap-3 mb-4">
            <span className="material-symbols-outlined text-primary-600 text-3xl">help</span>
            <div>
                <h3 className="text-lg font-bold text-slate-900">Having a common issue?</h3>
                <p className="text-slate-600 text-sm">Try our self-help guides first.</p>
            </div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="group cursor-pointer">
                 <div className="aspect-video bg-slate-200 rounded-xl relative overflow-hidden mb-2">
                    <img src="https://picsum.photos/400/225?random=1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <span className="material-symbols-filled text-white text-5xl drop-shadow-lg">play_circle</span>
                    </div>
                 </div>
                 <p className="font-bold text-slate-800 text-sm">How to Connect to Campus Wi-Fi</p>
             </div>
             <div className="group cursor-pointer">
                 <div className="aspect-video bg-slate-200 rounded-xl relative overflow-hidden mb-2">
                    <img src="https://picsum.photos/400/225?random=2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <span className="material-symbols-filled text-white text-5xl drop-shadow-lg">play_circle</span>
                    </div>
                 </div>
                 <p className="font-bold text-slate-800 text-sm">Fixing Common Printer Jams</p>
             </div>
         </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-700">Room Details</span>
                <input type="text" value="Room 301, Building A" disabled className="w-full h-12 rounded-xl border-slate-200 bg-slate-50 text-slate-600 px-4 font-medium" />
            </label>
            <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-700">Equipment</span>
                <div className="relative">
                    <select className="w-full h-12 rounded-xl border-slate-200 bg-white text-slate-900 px-4 appearance-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500">
                        <option>Computer</option>
                        <option>Projector</option>
                        <option>Printer</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                </div>
            </label>
        </div>

        <label className="flex flex-col gap-2">
            <span className="text-sm font-bold text-slate-700">Issue Description</span>
            <textarea className="w-full min-h-[120px] rounded-xl border-slate-200 p-4 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" placeholder="Please describe the issue in detail..."></textarea>
        </label>

        <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-slate-700">Urgency</span>
            <div className="grid grid-cols-3 gap-3">
                <button className="h-12 rounded-xl border border-slate-200 hover:border-primary-500 hover:bg-primary-50 text-slate-600 font-medium transition-colors">Low</button>
                <button className="h-12 rounded-xl border-2 border-primary-500 bg-primary-50 text-primary-700 font-bold transition-colors">Medium</button>
                <button className="h-12 rounded-xl border border-slate-200 hover:border-red-500 hover:bg-red-50 text-slate-600 font-medium transition-colors">High</button>
            </div>
        </div>

        <div className="flex flex-col gap-2">
            <span className="text-sm font-bold text-slate-700">Attach a Photo</span>
            <div className="border-2 border-dashed border-slate-300 rounded-xl h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 hover:border-primary-400 transition-colors">
                <span className="material-symbols-outlined text-3xl text-slate-400 mb-2">cloud_upload</span>
                <p className="text-sm text-slate-500"><span className="text-primary-600 font-bold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-slate-400 mt-1">PNG, JPG, GIF up to 10MB</p>
            </div>
        </div>
        
        <div className="flex justify-end pt-4">
            <button className="h-12 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-bold shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5">
                Submit Ticket
            </button>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Scan Room
// ----------------------------------------------------------------------

export const StudentScanRoom: React.FC<ScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-full flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                {/* Scanner Side */}
                <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 bg-slate-50/50">
                    <h2 className="text-2xl font-black text-slate-900 mb-2 text-center">Identify Your Location</h2>
                    <p className="text-slate-500 text-center mb-8">Scan the QR code in the room</p>
                    
                    <div className="relative w-64 h-64 bg-slate-200 rounded-3xl overflow-hidden border-4 border-white shadow-inner flex items-center justify-center mb-6 group cursor-pointer">
                        <div className="absolute inset-0 border-2 border-dashed border-primary-400/50 m-4 rounded-2xl"></div>
                        <div className="flex flex-col items-center gap-2 text-slate-400">
                             <span className="material-symbols-outlined text-5xl">videocam_off</span>
                             <span className="text-xs font-medium">Camera unavailable</span>
                        </div>
                        {/* Simulation Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <button className="bg-white text-primary-700 px-4 py-2 rounded-full font-bold shadow-lg" onClick={() => onNavigate(AppScreen.STUDENT_CREATE_TICKET)}>Simulate Scan</button>
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">Point your camera at the wall QR code</p>
                </div>

                {/* Manual Side */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-center text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">- OR -</p>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Select location manually</h3>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Building</label>
                            <select className="w-full h-12 rounded-xl border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary-500">
                                <option>Building 1 (Engineering)</option>
                                <option>Building 2 (Science)</option>
                            </select>
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Room Number</label>
                            <select className="w-full h-12 rounded-xl border-slate-200 bg-slate-50 focus:ring-2 focus:ring-primary-500">
                                <option>1201</option>
                                <option>1202</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5">
                         <h4 className="font-bold text-primary-800 flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">meeting_room</span> Room 1201
                         </h4>
                         <p className="text-xs text-primary-600 mt-2 font-medium">Equipment:</p>
                         <ul className="text-xs text-primary-700 mt-1 space-y-1 list-disc list-inside opacity-80">
                             <li>1x Projector</li>
                             <li>25x Workstations</li>
                             <li>1x Smart Board</li>
                         </ul>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                        <button onClick={() => onNavigate(AppScreen.STUDENT_CREATE_TICKET)} className="h-12 px-8 bg-primary-600 text-white rounded-full font-bold shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ----------------------------------------------------------------------
// Fix Notification
// ----------------------------------------------------------------------

export const StudentFixNotification: React.FC<ScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-full flex flex-col items-center justify-center p-4">
            <div className="max-w-2xl w-full flex flex-col gap-8">
                <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-green-50">
                        <span className="material-symbols-outlined text-5xl">check_circle</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Your issue has been fixed!</h1>
                    <p className="text-slate-500 text-lg max-w-md mx-auto">We've successfully resolved the problem. Please review the details below.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                        <h2 className="font-bold text-slate-800">Repair Details</h2>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">Resolved</span>
                    </div>
                    
                    <div className="p-8 grid md:grid-cols-2 gap-8">
                         <div className="space-y-3">
                             <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">broken_image</span> Before
                             </p>
                             <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-inner">
                                <img src="https://picsum.photos/400/225?grayscale" className="w-full h-full object-cover opacity-80" />
                             </div>
                         </div>
                         <div className="space-y-3">
                             <p className="text-xs font-bold text-primary-600 uppercase tracking-wider flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">image</span> After
                             </p>
                             <div className="aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-lg ring-2 ring-primary-500/20">
                                <img src="https://picsum.photos/400/225" className="w-full h-full object-cover" />
                             </div>
                         </div>
                    </div>

                    <div className="bg-blue-50 p-6 md:p-8 border-t border-blue-100">
                        <h3 className="font-bold text-primary-900 flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined">engineering</span>
                            IT Technician's Notes
                        </h3>
                        <p className="text-primary-800/80 text-sm leading-relaxed bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                            The laptop screen was cracked. Replaced display assembly. Diagnostics passed. Ready for pickup.
                        </p>
                        
                        <div className="mt-8 flex justify-center">
                            <button onClick={() => onNavigate(AppScreen.STUDENT_TICKET_DETAILS)} className="px-8 py-3 bg-primary-600 text-white rounded-full font-bold shadow-lg hover:bg-primary-700 transition-all">View Full Ticket</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ----------------------------------------------------------------------
// Booking
// ----------------------------------------------------------------------

export const StudentBookAppointment: React.FC<ScreenProps> = ({ onNavigate }) => {
    return (
         <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-black text-slate-900">Book Your Appointment</h1>
                <p className="text-slate-500">Select a convenient date and time for your IT support session.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Calendar & Slots */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900"><span className="material-symbols-outlined">chevron_left</span></button>
                            <h2 className="text-xl font-bold text-slate-900">October 2024</h2>
                            <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-900"><span className="material-symbols-outlined">chevron_right</span></button>
                        </div>
                        {/* Simplified Calendar Grid */}
                        <div className="grid grid-cols-7 text-center gap-y-4 mb-2">
                             {['S','M','T','W','T','F','S'].map(d => <span key={d} className="text-xs font-bold text-slate-400">{d}</span>)}
                        </div>
                        <div className="grid grid-cols-7 text-center gap-y-2">
                             {/* Mock Days */}
                             {Array.from({length: 31}, (_, i) => i + 1).map(d => {
                                 const isSelected = d === 26;
                                 const isToday = d === 24;
                                 return (
                                     <button key={d} className={`h-10 w-10 mx-auto rounded-full flex items-center justify-center text-sm font-medium transition-all
                                        ${isSelected ? 'bg-primary-600 text-white shadow-md shadow-primary-500/30' : 'text-slate-700 hover:bg-slate-100'}
                                        ${isToday ? 'border border-primary-600 text-primary-600' : ''}
                                     `}>
                                         {d}
                                     </button>
                                 )
                             })}
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-slate-900">Available Slots</h3>
                            <span className="text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 2 IT Staff Available
                            </span>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                            {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '01:00 PM', '01:30 PM'].map((t, i) => (
                                <button key={t} className={`py-3 rounded-xl border text-sm font-semibold transition-all ${i === 2 ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-inner' : 'border-slate-200 bg-white text-slate-600 hover:border-primary-400 hover:shadow-md'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50 sticky top-24">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                             <div className="p-2 bg-blue-50 text-primary-600 rounded-xl">
                                <span className="material-symbols-outlined">assignment</span>
                             </div>
                             <h3 className="font-bold text-slate-900 text-lg">Booking Summary</h3>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                {icon: 'meeting_room', label: 'Room', value: 'IT Building, Room 404'},
                                {icon: 'desktop_windows', label: 'Equipment', value: 'Desktop PC (PC-045)'},
                                {icon: 'build', label: 'Problem', value: "Computer won't turn on"}
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
                                     <div className="bg-white p-2 rounded-lg text-primary-600 shadow-sm h-fit">
                                         <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                     </div>
                                     <div>
                                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                                         <p className="text-sm font-bold text-slate-900">{item.value}</p>
                                     </div>
                                </div>
                            ))}
                        </div>

                        <div className="my-6 border-t border-slate-100 border-dashed"></div>

                        <div className="bg-primary-50 rounded-xl p-4 flex justify-between items-center mb-6">
                            <div>
                                <p className="text-xs text-primary-600 font-bold uppercase">Date & Time</p>
                                <p className="text-sm font-bold text-slate-900">Oct 26, 10:00 AM</p>
                            </div>
                            <span className="material-symbols-outlined text-primary-400">calendar_clock</span>
                        </div>

                        <button className="w-full h-12 bg-primary-600 text-white font-bold rounded-full shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all hover:-translate-y-0.5">
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
         </div>
    )
}
