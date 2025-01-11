import { Code, Database, GitBranch, Layout, Package, Rocket, FileCode, Palette, Boxes, TestTube } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Layout,
    title: 'HTML и CSS',
    description: 'Основы верстки и стилизации веб-страниц',
  },
  {
    icon: Code,
    title: 'JavaScript',
    description: 'Современный JavaScript и принципы ООП',
  },
  {
    icon: FileCode,
    title: 'TypeScript',
    description: 'Типизация и безопасная разработка приложений',
  },
  {
    icon: Rocket,
    title: 'React',
    description: 'Разработка интерактивных интерфейсов',
  },
  {
    icon: Database,
    title: 'Redux',
    description: 'Управление состоянием приложения',
  },
  {
    icon: Palette,
    title: 'Material UI',
    description: 'Создание красивых интерфейсов с MUI',
  },
  {
    icon: Boxes,
    title: 'Архитектура',
    description: 'Построение масштабируемых frontend приложений',
  },
  {
    icon: TestTube,
    title: 'Тестирование',
    description: 'Написание unit и интеграционных тестов',
  },
  {
    icon: GitBranch,
    title: 'Git',
    description: 'Контроль версий и командная работа',
  },
  {
    icon: Package,
    title: 'Webpack',
    description: 'Сборка и оптимизация проекта',
  },
];

export function Features() {
  return (
    <section id="программа" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Что вы изучите?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}