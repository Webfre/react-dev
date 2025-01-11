import React from 'react';
import { motion } from 'framer-motion';
import { Module } from '../data/courseModules';

interface ModuleCardProps {
  module: Module;
  isSelected: boolean;
  onClick: () => void;
}

export function ModuleCard({ module, isSelected, onClick }: ModuleCardProps) {
  const Icon = module.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        cursor-pointer rounded-xl p-6 transition-all
        ${isSelected 
          ? 'bg-purple-600 text-white shadow-xl' 
          : 'bg-white dark:bg-gray-800 hover:shadow-lg'}
      `}
    >
      <div className="flex items-center mb-4">
        <Icon className={`h-8 w-8 ${isSelected ? 'text-white' : 'text-purple-600 dark:text-purple-400'} mr-3`} />
        <div>
          <h3 className={`text-xl font-bold ${isSelected ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            {module.title}
          </h3>
          <p className={`text-sm ${isSelected ? 'text-purple-100' : 'text-gray-600 dark:text-gray-300'}`}>
            {module.duration}
          </p>
        </div>
      </div>
      
      <p className={`text-sm mb-4 ${isSelected ? 'text-purple-100' : 'text-gray-600 dark:text-gray-300'}`}>
        {module.description}
      </p>

      {module.prerequisites.length > 0 && (
        <div className={`text-xs ${isSelected ? 'text-purple-100' : 'text-gray-500 dark:text-gray-400'}`}>
          Требуется: {module.prerequisites.join(', ')}
        </div>
      )}
    </motion.div>
  );
}