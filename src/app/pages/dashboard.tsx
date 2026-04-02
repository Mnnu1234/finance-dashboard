import { TrendingDown, TrendingUp, DollarSign, CreditCard } from 'lucide-react';
import { StatsCard } from '../components/stats-card';
import { ExpenseChart } from '../components/expense-chart';
import { CategoryBreakdown } from '../components/category-breakdown';
import { RecentTransactions } from '../components/recent-transactions';
import { BudgetTracker } from '../components/budget-tracker';
import { AddExpenseForm } from '../components/add-expense-form';

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Balance"
          value="$12,450"
          change="+12.5%"
          changeType="positive"
          icon={DollarSign}
          bgColor="bg-gradient-to-br from-[#06b6d4] to-[#0891b2]"
        />
        <StatsCard
          title="Total Income"
          value="$8,500"
          change="+8.2%"
          changeType="positive"
          icon={TrendingUp}
          bgColor="bg-gradient-to-br from-[#10b981] to-[#059669]"
        />
        <StatsCard
          title="Total Expenses"
          value="$5,050"
          change="+15.3%"
          changeType="negative"
          icon={TrendingDown}
          bgColor="bg-gradient-to-br from-[#f472b6] to-[#ec4899]"
        />
        <StatsCard
          title="Savings"
          value="$3,450"
          change="+5.7%"
          changeType="positive"
          icon={CreditCard}
          bgColor="bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed]"
        />
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        <AddExpenseForm />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ExpenseChart />
        </div>
        <div>
          <CategoryBreakdown />
        </div>
      </div>

      {/* Transactions and Budget Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        <div>
          <BudgetTracker />
        </div>
      </div>
    </div>
  );
}
