import { motion } from 'motion/react';

const budgets = [
  { category: 'Food & Dining', spent: 1200, limit: 1500, color: '#06b6d4' },
  { category: 'Transportation', spent: 800, limit: 900, color: '#8b5cf6' },
  { category: 'Shopping', spent: 950, limit: 1000, color: '#f472b6' },
  { category: 'Entertainment', spent: 450, limit: 600, color: '#fbbf24' },
];

export function BudgetTracker() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Budget Tracker</h3>
        <p className="text-sm text-gray-500">Monitor your spending limits</p>
      </div>
      <div className="space-y-5">
        {budgets.map((budget, index) => {
          const percentage = (budget.spent / budget.limit) * 100;
          const isOverBudget = percentage > 90;
          
          return (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{budget.category}</span>
                <span className="text-sm font-semibold text-gray-900">
                  ${budget.spent} / ${budget.limit}
                </span>
              </div>
              <div className="relative h-3 overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: isOverBudget ? '#ef4444' : budget.color }}
                />
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-xs text-gray-500">{percentage.toFixed(0)}% used</span>
                {isOverBudget && (
                  <span className="text-xs font-medium text-[#ef4444]">Near limit!</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
