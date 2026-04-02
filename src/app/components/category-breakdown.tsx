import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Food & Dining', value: 1200, color: '#06b6d4' },
  { name: 'Transportation', value: 800, color: '#8b5cf6' },
  { name: 'Shopping', value: 950, color: '#f472b6' },
  { name: 'Entertainment', value: 450, color: '#fbbf24' },
  { name: 'Bills & Utilities', value: 1300, color: '#10b981' },
  { name: 'Healthcare', value: 350, color: '#ef4444' },
];

export function CategoryBreakdown() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Spending by Category</h3>
        <p className="text-sm text-gray-500">This month breakdown</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {data.map((category, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: category.color }}
            ></div>
            <div className="flex-1">
              <p className="text-xs text-gray-600">{category.name}</p>
              <p className="text-sm font-semibold text-gray-900">${category.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}