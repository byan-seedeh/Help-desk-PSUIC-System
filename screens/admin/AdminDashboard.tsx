import React from 'react';
import { 
  AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, 
  BarChart, Bar 
} from 'recharts';
import { AppScreen } from '../../types';

const monthlyData = [
  { name: 'Jan', tickets: 50 },
  { name: 'Feb', tickets: 100 },
  { name: 'Mar', tickets: 75 },
  { name: 'Apr', tickets: 120 },
  { name: 'May', tickets: 90 },
  { name: 'Jun', tickets: 135 },
];

const urgencyData = [
  { name: 'Low', value: 63, color: '#93c5fd' }, // blue-300
  { name: 'Medium', value: 101, color: '#60a5fa' }, // blue-400
  { name: 'High', value: 89, color: '#2563eb' }, // blue-600
  { name: 'Critical', value: 20, color: '#ef4444' }, // red-500
];

const roomData = [
  { name: '101', count: 25 },
  { name: '102', count: 40 },
  { name: '103', count: 30 },
  { name: '104', count: 5 },
  { name: '105', count: 50 },
  { name: 'Lab A', count: 22 },
  { name: 'Lab B', count: 37 },
  { name: 'Off 1', count: 18 },
  { name: 'Lib', count: 45 },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div>
        <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
                <p className="text-slate-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
            </div>
             <div className="flex gap-3">
                 <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50">Oct 24, 2023</button>
                 <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-primary-500/20 hover:bg-primary-700">Generate Report</button>
             </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-bold text-slate-900 mb-5">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
                {icon: 'group', title: 'Manage Users', sub: 'Add, edit or remove users'},
                {icon: 'meeting_room', title: 'Manage Rooms', sub: 'Room allocation'},
                {icon: 'devices', title: 'Equipment', sub: 'Inventory system'},
                {icon: 'import_export', title: 'Data Export', sub: 'Backup data'},
            ].map((i, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-primary-300 hover:shadow-md transition-all cursor-pointer group text-center">
                    <div className="w-12 h-12 mx-auto bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">{i.icon}</span>
                    </div>
                    <h3 className="font-bold text-slate-900">{i.title}</h3>
                    <p className="text-xs text-slate-500">{i.sub}</p>
                </div>
            ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
            {/* Line Chart */}
            <div className="lg:col-span-3 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                 <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Tickets per Month</h3>
                        <p className="text-sm text-slate-500">Overview of ticket volume.</p>
                    </div>
                    <button className="text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded border border-slate-200">Last 6 months</button>
                </div>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={monthlyData}>
                            <defs>
                                <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip 
                                contentStyle={{backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: 'white'}}
                                itemStyle={{color: 'white'}}
                            />
                            <Area type="monotone" dataKey="tickets" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorTickets)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                {/* Custom X Axis Labels Mock */}
                <div className="flex justify-between px-2 text-xs font-bold text-slate-400 mt-2">
                    {monthlyData.map(d => <span key={d.name}>{d.name}</span>)}
                </div>
            </div>

            {/* Donut Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-900">Urgency</h3>
                    <button className="text-xs font-medium text-slate-500">This month</button>
                </div>
                <div className="flex-1 flex items-center justify-center relative">
                    <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={urgencyData}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {urgencyData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-black text-slate-900">253</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total</span>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mt-4 text-sm">
                    {urgencyData.map(u => (
                        <div key={u.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: u.color}}></div>
                                <span className="text-slate-600 font-medium">{u.name}</span>
                            </div>
                            <span className="font-bold text-slate-800">{u.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bar Chart */}
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Tickets per Room</h3>
                        <p className="text-sm text-slate-500">Distribution across campus.</p>
                    </div>
                    <button className="text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded border border-slate-200">This week</button>
                </div>
                 <div className="h-48 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={roomData}>
                            <Tooltip 
                                cursor={{fill: '#f1f5f9'}}
                                contentStyle={{backgroundColor: '#1e293b', borderRadius: '8px', border: 'none', color: 'white'}}
                            />
                            <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="flex justify-between px-2 text-xs font-bold text-slate-400 mt-2 overflow-hidden">
                    {roomData.map(d => <span key={d.name} className="w-full text-center truncate">{d.name}</span>)}
                </div>
            </div>
        </div>
    </div>
  );
};
