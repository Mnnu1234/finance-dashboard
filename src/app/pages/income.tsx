import { useState } from 'react';
import { Plus, TrendingUp, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

const incomeData = [
  { month: 'Jan', amount: 4000 },
  { month: 'Feb', amount: 3800 },
  { month: 'Mar', amount: 4200 },
  { month: 'Apr', amount: 3900 },
  { month: 'May', amount: 4100 },
  { month: 'Jun', amount: 4300 },
  { month: 'Jul', amount: 4500 },
];

const incomeTransactions = [
  { id: 1, source: 'Salary', amount: 4500, date: 'Apr 1, 2026', category: 'Employment' },
  { id: 2, source: 'Freelance Project', amount: 1200, date: 'Mar 28, 2026', category: 'Freelance' },
  { id: 3, source: 'Investment Returns', amount: 350, date: 'Mar 25, 2026', category: 'Investment' },
  { id: 4, source: 'Bonus', amount: 800, date: 'Mar 20, 2026', category: 'Employment' },
  { id: 5, source: 'Side Business', amount: 650, date: 'Mar 15, 2026', category: 'Business' },
];

export function Income() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Income Tracking</h1>
          <p className="mt-1 text-gray-600">Monitor your earnings and income sources</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#10b981] to-[#059669] px-6 py-3 font-medium text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <Plus className="h-5 w-5" />
          Add Income
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] p-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Total Income</p>
              <h3 className="text-2xl font-bold text-gray-900">$8,500</h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0891b2] p-3">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <h3 className="text-2xl font-bold text-gray-900">$4,500</h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] p-3">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Growth</p>
              <h3 className="text-2xl font-bold text-[#10b981]">+8.2%</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Income Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={incomeData}>
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
            <Bar dataKey="amount" fill="#10b981" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Income */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Recent Income</h3>
        <div className="space-y-3">
          {incomeTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] p-3">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.source}</p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[#10b981]">+${transaction.amount.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
