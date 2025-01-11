import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FeatureProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

export function FeatureCard({ feature }: FeatureProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={`p-6 border border-purple-100 dark:border-purple-800 rounded-xl hover:shadow-lg transition-all duration-500 bg-white dark:bg-gray-800 opacity-0 translate-y-8 ${
        isInView ? 'opacity-100 translate-y-0' : ''
      }`}
    >
      <Icon className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </div>
  );
}