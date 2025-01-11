import { Code, FileCode, GitBranch, Layout, Package, Rocket } from 'lucide-react';
import { TimelineItem } from './TimelineItem';

const stages = [
  {
    icon: Layout,
    title: 'HTML и CSS',
    hours: 80,
    description: 'Основы верстки, семантика, стили, адаптивный дизайн, Flexbox и Grid',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Code,
    title: 'JavaScript',
    hours: 420,
    description: 'Основы языка, ООП, асинхронность, работа с DOM, AJAX и промисы',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Rocket,
    title: 'React',
    hours: 400,
    description: 'Компоненты, хуки, маршрутизация, управление состоянием',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: FileCode,
    title: 'Redux',
    hours: 30,
    description: 'Управление состоянием приложения, actions, reducers, middleware',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: GitBranch,
    title: 'Инструменты разработчика',
    hours: 30,
    description: 'Git, Webpack, npm, терминал, отладка кода',
    color: 'from-pink-500 to-purple-500',
  },
  {
    icon: Package,
    title: 'Практика',
    hours: 240,
    description: 'Работа над реальными проектами, код-ревью, работа в команде',
    color: 'from-purple-500 to-indigo-500',
  },
];

interface TimelineProps {
  intensity: number;
}

export function Timeline({ intensity }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-200 to-purple-500 dark:from-purple-900 dark:to-purple-600" />
      
      <div className="space-y-16">
        {stages.map((stage, index) => (
          <TimelineItem
            key={stage.title}
            stage={stage}
            index={index}
            daysToComplete={Math.ceil(stage.hours / intensity)}
          />
        ))}
      </div>
    </div>
  );
}