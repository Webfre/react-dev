import { 
  Infinity, 
  Subtitles, 
  Volume2, 
  Award, 
  Video, 
  Code2, 
  TestTube, 
  FileText, 
  Download, 
  Smartphone,
  Laptop,
  Gamepad2,
  TrendingUp
} from 'lucide-react';
import { AdvantageCard } from './AdvantageCard';

const mainAdvantages = [
  {
    icon: Laptop,
    title: 'Собственная платформа для изучения',
    description: 'Уникальная среда обучения, разработанная специально для эффективного освоения React',
    highlight: true
  },
  {
    icon: Gamepad2,
    title: 'Игры для изучения React-разработки',
    description: 'Интерактивные игровые механики для увлекательного обучения программированию',
    highlight: true
  },
  {
    icon: TrendingUp,
    title: 'Повышение квалификации до уровня мидл/мидл++/синьор',
    description: 'Углубленное изучение дополнительных технологий и практик разработки',
    highlight: true
  }
];

const features = [
  { icon: Infinity, title: 'Полный пожизненный доступ' },
  { icon: Subtitles, title: 'Встроенные субтитры' },
  { icon: Volume2, title: 'Звуковое описание в существующих аудиозаписях' },
  { icon: Award, title: 'Сертификат об окончании' },
  { icon: Video, title: 'Видео по запросу' },
  { icon: Code2, title: 'Упражнения по написанию кода' },
  { icon: TestTube, title: 'Практические тесты' },
  { icon: FileText, title: 'Интересные статьи и материалы. Всегда оставаться в тренде!' },
  { icon: Download, title: 'Множество ресурсов для скачивания' },
  { icon: Smartphone, title: 'Доступ через мобильные устройства и браузер' },
];

export function Advantages() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Наши преимущества
        </h2>

        {/* Key advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainAdvantages.map((advantage) => (
            <AdvantageCard
              key={advantage.title}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              highlight={advantage.highlight}
            />
          ))}
        </div>

        {/* Additional features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <AdvantageCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}