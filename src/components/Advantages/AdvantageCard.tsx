import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AdvantageCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  highlight?: boolean;
}

export function AdvantageCard({ icon: Icon, title, description, highlight }: AdvantageCardProps) {
  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${
      highlight 
        ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white transform hover:shadow-lg' 
        : 'bg-white dark:bg-gray-800 hover:shadow-lg'
    }`}>
      <Icon className={`h-8 w-8 mb-4 ${highlight ? 'text-white' : 'text-purple-600 dark:text-purple-400'}`} />
      <h3 className={`text-lg font-semibold mb-2 ${highlight ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {title}
      </h3>
      {description && (
        <p className={`text-sm ${highlight ? 'text-purple-100' : 'text-gray-600 dark:text-gray-300'}`}>
          {description}
        </p>
      )}
    </div>
  );
}