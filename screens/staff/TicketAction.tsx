import React from 'react';
import { AppScreen } from '../../types';

export const StaffTicketAction: React.FC<{ onNavigate: (s: AppScreen) => void }> = ({ onNavigate }) => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Breadcrumb / Header */}
        <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <span onClick={() => onNavigate(AppScreen.STAFF_DASHBOARD)} className="cursor-pointer hover:text-slate-900">Tickets</span>
                <span>/</span>
                <span className="text-slate-900 font-medium">Ticket #IT-78923</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900">Ticket #IT-78923</h1>
                    <p className="text-slate-500">Review, manage, and update the status.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg font-bold text-slate-700 text-sm hover:bg-slate-50">
                        <span className="material-symbols-outlined text-lg">person_add</span> Assign
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg font-bold text-slate-700 text-sm hover:bg-slate-50">
                        <span className="material-symbols-outlined text-lg">more_horiz</span> Actions
                    </button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info Column */}
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold text-slate-900">Ticket Details</h2>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                    {[
                        { label: 'Student Name', value: 'Alex Johnson' },
                        { label: 'Contact Info', value: 'alex.j@psuic.edu' },
                        { label: 'Submitted On', value: 'Oct 26, 2023, 10:45 AM' },
                        { label: 'Category', value: 'Hardware Issue' },
                        { label: 'Subject', value: 'Broken Laptop Screen', bold: true },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-slate-400 uppercase">{item.label}</span>
                            <span className={`text-slate-900 ${item.bold ? 'font-bold' : 'font-medium'}`}>{item.value}</span>
                        </div>
                    ))}
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-slate-400 uppercase">Description</span>
                        <p className="text-slate-600 text-sm leading-relaxed">The laptop screen is cracked and unresponsive after being dropped. The device is a Dell XPS 15.</p>
                    </div>
                </div>
            </div>

            {/* Action Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
                <h2 className="text-xl font-bold text-slate-900">Manage Ticket</h2>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-8">
                    {/* Actions */}
                    <div className="flex gap-4">
                        <button className="flex-1 bg-primary-600 text-white font-bold h-12 rounded-xl shadow-lg shadow-primary-500/20 hover:bg-primary-700 transition-all">Accept Ticket</button>
                        <button className="flex-1 bg-red-50 text-red-600 border border-red-100 font-bold h-12 rounded-xl hover:bg-red-100 transition-all">Reject Ticket</button>
                    </div>

                    <hr className="border-slate-100" />

                    {/* Checklist */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">Pre-Repair Checklist</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['Assess physical damage', 'Check power supply', 'Inspect all ports', 'Backup user data'].map((item, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Progress */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">Repair Progress</h3>
                        <div className="flex items-center w-full">
                            {/* Step 1 */}
                            <div className="flex-1 flex flex-col items-center relative">
                                <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center relative z-10">
                                    <span className="material-symbols-outlined text-sm">check</span>
                                </div>
                                <p className="text-xs font-bold text-primary-600 mt-2">Diagnosing</p>
                                <div className="absolute top-4 left-[50%] right-[-50%] h-0.5 bg-primary-600"></div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex-1 flex flex-col items-center relative">
                                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-primary-600 flex items-center justify-center relative z-10">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary-600"></div>
                                </div>
                                <p className="text-xs font-bold text-primary-600 mt-2">Repairing</p>
                                <div className="absolute top-4 left-[-50%] right-[50%] h-0.5 bg-primary-600"></div>
                                <div className="absolute top-4 left-[50%] right-[-50%] h-0.5 bg-slate-200"></div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex-1 flex flex-col items-center relative">
                                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 relative z-10"></div>
                                <p className="text-xs font-bold text-slate-400 mt-2">Awaiting Parts</p>
                                <div className="absolute top-4 left-[-50%] right-[50%] h-0.5 bg-slate-200"></div>
                                <div className="absolute top-4 left-[50%] right-[-50%] h-0.5 bg-slate-200"></div>
                            </div>
                             {/* Step 4 */}
                            <div className="flex-1 flex flex-col items-center relative">
                                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 relative z-10"></div>
                                <p className="text-xs font-bold text-slate-400 mt-2">Testing</p>
                                <div className="absolute top-4 left-[-50%] right-[50%] h-0.5 bg-slate-200"></div>
                            </div>
                        </div>
                    </div>

                    {/* Update Status */}
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-end gap-4">
                        <label className="flex-1 w-full">
                            <span className="text-sm font-bold text-slate-700 mb-2 block">Update Status</span>
                            <select className="w-full h-11 rounded-lg border-slate-300 focus:ring-primary-500 focus:border-primary-500">
                                <option>In Progress</option>
                                <option>Awaiting Parts</option>
                                <option>Resolved</option>
                            </select>
                        </label>
                        <button className="h-11 px-6 bg-slate-900 text-white font-bold rounded-lg w-full sm:w-auto hover:bg-slate-800">Save Changes</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
