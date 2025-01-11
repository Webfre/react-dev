import { Code2, Briefcase, Brain, Rocket, Users, Trophy } from 'lucide-react';
import { LearningOutcomeCard } from './LearningOutcomeCard';

const outcomes = [
  {
    icon: Code2,
    title: 'Профессиональная разработка',
    description: 'Создавать сложные веб-приложения на React с использованием современных технологий',
  },
  {
    icon: Briefcase,
    title: 'Готовность к работе',
    description: 'Уверенно проходить технические собеседования и решать реальные задачи',
  },
  {
    icon: Brain,
    title: 'Алгоритмическое мышление',
    description: 'Писать эффективный, чистый и поддерживаемый код',
  },
  {
    icon: Rocket,
    title: 'Оптимизация приложений',
    description: 'Улучшать производительность и масштабировать React приложения',
  },
  {
    icon: Users,
    title: 'Командная работа',
    description: 'Эффективно работать в команде, используя Git и современные методологии разработки',
  },
  {
    icon: Trophy,
    title: 'Портфолио проектов',
    description: 'Создать впечатляющее портфолио из реальных проектов для трудоустройства',
  },
];

export function LearningOutcomes() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Чему вы научитесь?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((outcome) => (
            <LearningOutcomeCard key={outcome.title} outcome={outcome} />
          ))}
        </div>
      </div>
    </section>
  );
}