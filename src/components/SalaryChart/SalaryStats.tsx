import React from 'react';

const stats = [
  { period: 'Январь 2024', amount: '180 000 ₽', level: 'Junior' },
  { period: 'Январь 2024', amount: '300 000 ₽', level: 'Middle' },
  { period: 'Январь 2024', amount: '450 000 ₽', level: 'Senior' },
];

export function SalaryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat) => (
        <div key={stat.level} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{stat.period}</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {stat.amount}
          </div>
          <div className="text-purple-600 dark:text-purple-400 font-medium">
            {stat.level}
          </div>
        </div>
      ))}
    </div>
  );
}