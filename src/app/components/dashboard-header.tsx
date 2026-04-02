import { Wallet, Bell, User } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6]">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">ExpenseFlow</h1>
            <p className="text-sm text-gray-500">Track your spending</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 hover:bg-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#f472b6]"></span>
          </button>
          <button className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200 transition-colors">
            <User className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
