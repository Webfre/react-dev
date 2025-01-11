import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import { Module } from '../data/courseModules';

interface ModuleDetailsProps {
  module: Module;
}

export function ModuleDetails({ module }: ModuleDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      {module.topics.map((topic, index) => (
        <div 
          key={topic.name}
          className="mb-8 last:mb-0"
        >
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 mr-4">
              <span className="text-purple-600 dark:text-purple-400 font-bold">
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {topic.name}
              </h3>
              <div className="flex items-center mt-1">
                <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-1" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {topic.duration}
                </span>
              </div>
            </div>
          </div>

          <div className="ml-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {topic.description}
            </p>
            <div className="space-y-2">
              {topic.items.map((item) => (
                <div 
                  key={item}
                  className="flex items-start"
                >
                  <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}