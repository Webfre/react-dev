import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courseModules } from './data/courseModules';
import { ModuleCard } from './components/ModuleCard';
import { ModuleDetails } from './components/ModuleDetails';

export function RoadMapPage() {
  const [selectedModule, setSelectedModule] = useState(courseModules[0]);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Road Map Обучения
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ваш путь к становлению Front-end разработчиком
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {courseModules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                isSelected={selectedModule.id === module.id}
                onClick={() => setSelectedModule(module)}
              />
            ))}
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <ModuleDetails key={selectedModule.id} module={selectedModule} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}