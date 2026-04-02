import { useState } from 'react';
import { Plus, TrendingDown, ShoppingBag, Coffee, Car, Tv, Zap, Heart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

const expenseData = [
  { month: 'Jan', amount: 2400 },
  { month: 'Feb', amount: 1398 },
  { month: 'Mar', amount: 3800 },
  { month: 'Apr', amount: 2780 },
  { month: 'May', amount: 1890 },
  { month: 'Jun', amount: 2390 },
  { month: 'Jul', amount: 3490 },
];

const expenseTransactions = [
  { id: 1, name: 'Grocery Shopping', amount: 85.50, date: 'Apr 1, 2026', category: 'Food & Dining', icon: ShoppingBag },
  { id: 2, name: 'Coffee Shop', amount: 12.30, date: 'Mar 31, 2026', category: 'Food & Dining', icon: Coffee },
  { id: 3, name: 'Uber Ride', amount: 24.00, date: 'Mar 30, 2026', category: 'Transportation', icon: Car },
  { id: 4, name: 'Netflix Subscription', amount: 15.99, date: 'Mar 29, 2026', category: 'Entertainment', icon: Tv },
  { id: 5, name: 'Electricity Bill', amount: 120.00, date: 'Mar 28, 2026', category: 'Bills & Utilities', icon: Zap },
  { id: 6, name: 'Health Insurance', amount: 350.00, date: 'Mar 27, 2026', category: 'Healthcare', icon: Heart },
];

const categoryTotals = [
  { name: 'Food & Dining', amount: 1200, color: '#06b6d4' },
  { name: 'Transportation', amount: 800, color: '#8b5cf6' },
  { name: 'Shopping', amount: 950, color: '#f472b6' },
  { name: 'Entertainment', amount: 450, color: '#fbbf24' },
  { name: 'Bills & Utilities', amount: 1300, color: '#10b981' },
  { name: 'Healthcare', amount: 350, color: '#ef4444' },
];

export function Expenses() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Expense Tracking</h1>
          <p className="mt-1 text-gray-600">Monitor your spending and expenses</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f472b6] to-[#ec4899] px-6 py-3 font-medium text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <Plus className="h-5 w-5" />
          Add Expense
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-[#f472b6] to-[#ec4899] p-3">
              <TrendingDown className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <h3 className="text-2xl font-bold text-gray-900">$5,050</h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] p-3">
              <TrendingDown className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <h3 className="text-2xl font-bold text-gray-900">$3,490</h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] p-3">
              <TrendingDown className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Average/Month</p>
              <h3 className="text-2xl font-bold text-gray-900">$2,600</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Expense Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={expenseData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#f472b6"
              strokeWidth={3}
              dot={{ fill: '#f472b6', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Category Breakdown */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Spending by Category</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categoryTotals.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-gray-200 p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-600">{category.name}</p>
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
              </div>
              <p className="text-2xl font-bold text-gray-900">${category.amount}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Expenses */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Recent Expenses</h3>
        <div className="space-y-3">
          {expenseTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gradient-to-br from-[#f472b6] to-[#ec4899] p-3">
                  <transaction.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">-${transaction.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
