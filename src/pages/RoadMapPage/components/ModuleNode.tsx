import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ModuleNodeProps {
  title: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  x: number;
  y: number;
}

export function ModuleNode({ title, icon: Icon, isActive, onClick, x, y }: ModuleNodeProps) {
  return (
    <motion.div
      className={`absolute cursor-pointer ${
        isActive ? 'z-10' : 'z-0'
      }`}
      style={{ left: x, top: y }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={onClick}
    >
      <div
        className={`w-32 h-32 rounded-full flex flex-col items-center justify-center ${
          isActive
            ? 'bg-purple-600 text-white shadow-lg'
            : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
        } transition-all duration-300`}
      >
        <Icon className="w-8 h-8 mb-2" />
        <span className="text-sm font-medium text-center px-2">{title}</span>
      </div>
    </motion.div>
  );
}