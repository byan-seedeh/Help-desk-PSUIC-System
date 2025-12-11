import React from 'react';
import { AppScreen } from '../../types';

export const StaffDashboard: React.FC<{ onNavigate: (s: AppScreen) => void }> = ({ onNavigate }) => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
         <h1 className="text-4xl font-black text-slate-900 tracking-tight">IT Support Dashboard</h1>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar">
         <button className="px-5 py-2 rounded-full bg-primary-600 text-white font-medium shadow-md shadow-primary-500/30 whitespace-nowrap">Pending (5)</button>
         <button className="px-5 py-2 rounded-full bg-white text-slate-600 border border-slate-200 font-medium hover:bg-slate-50 whitespace-nowrap">In Progress (2)</button>
         <button className="px-5 py-2 rounded-full bg-white text-slate-600 border border-slate-200 font-medium hover:bg-slate-50 whitespace-nowrap">Completed</button>
         <button className="px-5 py-2 rounded-full bg-white text-slate-600 border border-slate-200 font-medium hover:bg-slate-50 whitespace-nowrap">Rejected</button>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mb-6">Assigned Tickets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {[
             { id: '12345', subject: 'Laptop Screen Flickering', user: 'Jane Doe', date: 'Oct 26, 2023', urgency: 'Urgent', urgencyColor: 'text-red-600', status: 'In Progress', statusColor: 'bg-blue-50 text-primary-700' },
             { id: '12346', subject: 'Wi-Fi Connectivity Issues', user: 'John Smith', date: 'Oct 26, 2023', urgency: 'Medium', urgencyColor: 'text-slate-500', status: 'Pending', statusColor: 'bg-orange-50 text-orange-700' },
             { id: '12347', subject: 'Software Install Request', user: 'Emily Jones', date: 'Oct 25, 2023', urgency: 'Low', urgencyColor: 'text-slate-500', status: 'Completed', statusColor: 'bg-green-50 text-green-700' },
             { id: '12348', subject: 'Blue Screen of Death', user: 'Mike Brown', date: 'Oct 24, 2023', urgency: 'Urgent', urgencyColor: 'text-red-600', status: 'Pending', statusColor: 'bg-orange-50 text-orange-700' },
         ].map((t, idx) => (
             <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                 <div>
                    <div className="flex justify-between items-center mb-3">
                        <span className={`text-xs font-bold uppercase tracking-wider ${t.urgencyColor}`}>{t.urgency}</span>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${t.statusColor}`}>{t.status}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4">#{t.id} - {t.subject}</h3>
                 </div>
                 
                 <div className="flex items-end justify-between mt-4 pt-4 border-t border-slate-100">
                    <div>
                        <p className="text-xs text-slate-400 mb-0.5">User: {t.user}</p>
                        <p className="text-xs text-slate-400">Date: {t.date}</p>
                    </div>
                    <button onClick={() => onNavigate(AppScreen.STAFF_TICKET_ACTION)} className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-primary-600 transition-colors">
                        View Details
                    </button>
                 </div>
             </div>
         ))}
      </div>
    </div>
  );
};
