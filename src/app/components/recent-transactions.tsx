import { ShoppingBag, Coffee, Car, Tv, Zap, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const transactions = [
  {
    id: 1,
    name: 'Grocery Shopping',
    category: 'Food & Dining',
    date: 'Apr 1, 2026',
    amount: -85.50,
    icon: ShoppingBag,
    color: 'bg-[#06b6d4]',
  },
  {
    id: 2,
    name: 'Coffee Shop',
    category: 'Food & Dining',
    date: 'Mar 31, 2026',
    amount: -12.30,
    icon: Coffee,
    color: 'bg-[#8b5cf6]',
  },
  {
    id: 3,
    name: 'Uber Ride',
    category: 'Transportation',
    date: 'Mar 30, 2026',
    amount: -24.00,
    icon: Car,
    color: 'bg-[#f472b6]',
  },
  {
    id: 4,
    name: 'Netflix Subscription',
    category: 'Entertainment',
    date: 'Mar 29, 2026',
    amount: -15.99,
    icon: Tv,
    color: 'bg-[#fbbf24]',
  },
  {
    id: 5,
    name: 'Electricity Bill',
    category: 'Bills & Utilities',
    date: 'Mar 28, 2026',
    amount: -120.00,
    icon: Zap,
    color: 'bg-[#10b981]',
  },
  {
    id: 6,
    name: 'Health Insurance',
    category: 'Healthcare',
    date: 'Mar 27, 2026',
    amount: -350.00,
    icon: Heart,
    color: 'bg-[#ef4444]',
  },
];

export function RecentTransactions() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <p className="text-sm text-gray-500">Latest spending activity</p>
        </div>
        <button className="text-sm font-medium text-[#06b6d4] hover:text-[#0891b2] transition-colors">
          View All
        </button>
      </div>
      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-between rounded-xl border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`rounded-xl ${transaction.color} p-2.5`}>
                <transaction.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">
                ${Math.abs(transaction.amount).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">{transaction.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
