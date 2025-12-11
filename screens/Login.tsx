import React from 'react';
import { UserRole } from '../types';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

export const LoginScreen: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-50 p-4">
      {/* Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300/50 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-8">
        
        {/* Logo */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="material-symbols-outlined text-white text-4xl">add</span>
        </div>

        <div className="w-full bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-slate-900">Sign In to Helpdesk</h1>
                <p className="text-slate-500 text-sm mt-1">Welcome back! Please enter your details.</p>
            </div>

            <div className="space-y-4">
                <label className="block">
                    <span className="text-sm font-bold text-slate-700 mb-1.5 block">Email</span>
                    <input type="email" placeholder="your.email@psuic.ac.th" className="w-full h-12 rounded-xl border-slate-200 bg-white px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400" />
                </label>
                <label className="block">
                    <span className="text-sm font-bold text-slate-700 mb-1.5 block">Password</span>
                    <input type="password" placeholder="••••••••" className="w-full h-12 rounded-xl border-slate-200 bg-white px-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder:text-slate-400" />
                </label>
            </div>

            <div className="flex flex-col gap-3">
                <button onClick={() => onLogin(UserRole.STUDENT)} className="h-12 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/30">Login as Student</button>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => onLogin(UserRole.STAFF)} className="h-10 w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-full transition-all border border-slate-200 text-sm">IT Staff</button>
                    <button onClick={() => onLogin(UserRole.ADMIN)} className="h-10 w-full bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold rounded-full transition-all border border-slate-200 text-sm">Admin</button>
                </div>
            </div>

            <a href="#" className="text-center text-sm text-slate-400 hover:text-blue-600 transition-colors">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};
