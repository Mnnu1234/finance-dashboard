import { useState } from 'react';
import { useAuth } from '../context/auth-context';
import { Wallet, Mail, Lock, User } from 'lucide-react';
import { motion } from 'motion/react';

export function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData.email, formData.password, formData.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06b6d4] via-[#8b5cf6] to-[#f472b6] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg">
            <Wallet className="h-8 w-8 text-[#06b6d4]" />
          </div>
          <h1 className="text-3xl font-bold text-white">ExpenseFlow</h1>
          <p className="mt-2 text-white/80">Track your finances with ease</p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {isSignup ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {isSignup ? 'Sign up to get started' : 'Sign in to your account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required={isSignup}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-gray-900 focus:border-[#06b6d4] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/20"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-gray-900 focus:border-[#06b6d4] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/20"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 text-gray-900 focus:border-[#06b6d4] focus:outline-none focus:ring-2 focus:ring-[#06b6d4]/20"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] px-4 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {isSignup ? 'Already have an account? ' : "Don't have an account? "}
              <span className="font-semibold text-[#06b6d4]">
                {isSignup ? 'Sign In' : 'Sign Up'}
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
