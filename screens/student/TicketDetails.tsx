import React from 'react';
import { AppScreen } from '../../types';

export const StudentTicketDetails: React.FC<{ onNavigate: (s: AppScreen) => void }> = ({ onNavigate }) => {
  return (
    <div className="p-4 md:p-10 lg:p-20 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
        <span className="hover:text-primary-600 cursor-pointer" onClick={() => onNavigate(AppScreen.STUDENT_DASHBOARD)}>Dashboard</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-slate-900 font-medium">Ticket #12345</span>
      </div>

      <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Ticket #12345</h1>
          <p className="text-slate-500">Created: June 12, 2024 at 10:30 AM | Room: 301 | Equipment: Projector #P-05</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-red-100 text-red-700 font-bold text-sm border border-red-200">High Urgency</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Issue Description</h2>
            <p className="text-slate-600 leading-relaxed">
              The projector in room 301 is displaying a flickering image. We have tried restarting it and checking the cable connections, but the issue persists. This is affecting our scheduled classes and needs to be resolved as soon as possible.
            </p>
          </div>

          <div>
             <h2 className="text-xl font-bold text-slate-900 mb-4">Repair Photos</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                    <p className="text-sm font-semibold text-slate-500 mb-2 pl-1">Before</p>
                    <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                        <img src="https://picsum.photos/400/225?grayscale" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>
                <div className="group">
                    <p className="text-sm font-semibold text-slate-500 mb-2 pl-1">After</p>
                    <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                        <img src="https://picsum.photos/400/225" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sidebar Status */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6">Status Timeline</h3>
                <div className="relative pl-4 space-y-8">
                    <div className="absolute top-2 bottom-2 left-[1.35rem] w-0.5 bg-slate-100"></div>
                    
                    {[
                        { status: 'Fixed', date: 'June 14, 11:45 AM', icon: 'check', active: true, color: 'bg-green-500 text-white' },
                        { status: 'In Progress', date: 'June 13, 02:00 PM', icon: 'sync', active: false, color: 'bg-primary-50 text-primary-600 border border-primary-100' },
                        { status: 'Assigned', date: 'June 12, 11:00 AM', icon: 'person', active: false, color: 'bg-primary-50 text-primary-600 border border-primary-100' },
                        { status: 'Submitted', date: 'June 12, 10:30 AM', icon: 'outbox', active: false, color: 'bg-primary-50 text-primary-600 border border-primary-100' }
                    ].map((item, idx) => (
                        <div key={idx} className="relative flex items-center gap-4 z-10">
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                                <span className="material-symbols-outlined">{item.icon}</span>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">{item.status}</p>
                                <p className="text-xs text-slate-500">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-green-50 border border-green-100 p-6 rounded-2xl text-center">
                <span className="material-symbols-filled text-green-500 text-4xl mb-2">verified</span>
                <h3 className="text-green-900 font-bold text-lg mb-1">Ticket Resolved</h3>
                <p className="text-green-700/80 text-sm mb-4">A detailed report is available.</p>
                <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">download</span> Download Report
                </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Activity Log</h3>
                <div className="space-y-4">
                     <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                            <img src="https://picsum.photos/50/50?random=1" />
                        </div>
                        <div className="text-sm">
                            <p className="text-slate-600"><span className="font-bold text-slate-900">Sarah Chen</span> changed status to <span className="font-bold text-slate-900">Fixed</span>.</p>
                            <p className="text-slate-400 text-xs mt-0.5">June 14, 11:45 AM</p>
                        </div>
                     </div>
                     <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                             <img src="https://picsum.photos/50/50?random=1" />
                        </div>
                        <div className="text-sm">
                            <p className="text-slate-600"><span className="font-bold text-slate-900">Sarah Chen</span> added comment: "Bulb replaced."</p>
                            <p className="text-slate-400 text-xs mt-0.5">June 14, 11:44 AM</p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
