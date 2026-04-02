import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  bgColor: string;
}

export function StatsCard({ title, value, change, changeType, icon: Icon, bgColor }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">{value}</h3>
          <div className="mt-3 flex items-center gap-1">
            <span
              className={`text-sm font-medium ${
                changeType === 'positive' ? 'text-[#10b981]' : 'text-[#ef4444]'
              }`}
            >
              {change}
            </span>
            <span className="text-sm text-gray-500">vs last month</span>
          </div>
        </div>
        <div className={`rounded-xl ${bgColor} p-3`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </motion.div>
  );
}
