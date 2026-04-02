import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', expenses: 2400, income: 4000 },
  { month: 'Feb', expenses: 1398, income: 3800 },
  { month: 'Mar', expenses: 3800, income: 4200 },
  { month: 'Apr', expenses: 2780, income: 3900 },
  { month: 'May', expenses: 1890, income: 4100 },
  { month: 'Jun', expenses: 2390, income: 4300 },
  { month: 'Jul', expenses: 3490, income: 4500 },
];

export function ExpenseChart() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Expense Overview</h3>
        <p className="text-sm text-gray-500">Monthly income vs expenses</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f472b6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#f472b6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
            </linearGradient>
          </defs>
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
          <Area
            key="income"
            type="monotone"
            dataKey="income"
            stroke="#06b6d4"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorIncome)"
          />
          <Area
            key="expenses"
            type="monotone"
            dataKey="expenses"
            stroke="#f472b6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorExpenses)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#06b6d4]"></div>
          <span className="text-sm text-gray-600">Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#f472b6]"></div>
          <span className="text-sm text-gray-600">Expenses</span>
        </div>
      </div>
    </div>
  );
}