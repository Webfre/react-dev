import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Module } from '../data/courseModules';
import { ModuleNode } from './ModuleNode';
import { ModuleDetails } from './ModuleDetails';

interface LearningGraphProps {
  modules: Module[];
}

export function LearningGraph({ modules }: LearningGraphProps) {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  // Расположение узлов в графе (можно настроить под конкретные нужды)
  const getNodePosition = (index: number, total: number) => {
    const radius = 300;
    const angle = (index * 2 * Math.PI) / total;
    return {
      x: radius * Math.cos(angle) + radius,
      y: radius * Math.sin(angle) + radius,
    };
  };

  return (
    <div className="w-full">
      <div className="relative h-[800px] mb-8">
        {modules.map((module, index) => {
          const { x, y } = getNodePosition(index, modules.length);
          return (
            <ModuleNode
              key={module.id}
              title={module.title}
              icon={module.icon}
              isActive={selectedModule?.id === module.id}
              onClick={() => setSelectedModule(module)}
              x={x}
              y={y}
            />
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedModule && <ModuleDetails module={selectedModule} />}
      </AnimatePresence>
    </div>
  );
}