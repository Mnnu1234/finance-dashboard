import { NavLink } from 'react-router';
import { useAuth } from '../context/auth-context';
import {
  LayoutDashboard,
  TrendingUp,
  TrendingDown,
  Wallet,
  LogOut,
  User,
} from 'lucide-react';

export function Sidebar() {
  const { user, logout } = useAuth();

  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/income', icon: TrendingUp, label: 'Income' },
    { to: '/expenses', icon: TrendingDown, label: 'Expenses' },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      {/* Logo */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6]">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">ExpenseFlow</h1>
            <p className="text-xs text-gray-500">Finance Tracker</p>
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f472b6] to-[#8b5cf6]">
            <User className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="truncate font-semibold text-gray-900">{user?.name}</p>
            <p className="truncate text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
