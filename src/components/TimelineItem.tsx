import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface StageProps {
  icon: LucideIcon;
  title: string;
  hours: number;
  description: string;
  color: string;
}

interface TimelineItemProps {
  stage: StageProps;
  index: number;
  daysToComplete: number;
}

export function TimelineItem({ stage, index, daysToComplete }: TimelineItemProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const Icon = stage.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-4 md:gap-8 max-w-full overflow-hidden`}
    >
      <div
        className={`w-1/2 ${
          isEven ? 'text-right' : 'text-left'
        } transform transition-all duration-1000 ${
          isInView
            ? 'opacity-100 translate-y-0'
            : `opacity-0 ${isEven ? '-translate-x-full' : 'translate-x-full'}`
        }`}
      >
        <div
          className={`inline-block p-4 md:p-6 rounded-lg bg-gradient-to-r ${stage.color} 
          shadow-lg hover:shadow-xl transition-shadow max-w-full`}
        >
          <Icon className="h-6 w-6 md:h-8 md:w-8 text-white mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">{stage.title}</h3>
          <p className="text-sm md:text-base text-white/90 mb-2">{stage.description}</p>
          <div className="flex items-center justify-end space-x-4 mt-4">
            <span className="text-white/90">
              {stage.hours} часов
            </span>
            <span className="text-white/80">
              ~{daysToComplete} дней
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-8 md:w-12 flex items-center justify-center flex-shrink-0">
        <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${stage.color} 
          shadow-lg flex items-center justify-center transform transition-all duration-1000 
          ${isInView ? 'scale-100' : 'scale-0'}`}
        >
          <span className="text-white font-bold">{index + 1}</span>
        </div>
      </div>

      <div className="w-1/2" />
    </div>
  );
}