import { motion } from 'framer-motion';
import { PricingCard } from '../components/PricingCard';
import { CreditCard } from 'lucide-react';

const courses = [
  {
    title: 'Начальный (Junior Frontend Developer)',
    price: '80 000',
    description: 'Этот курс предназначен для тех, кто делает первые шаги в мире фронтенд-разработки.',
    features: [
      'Основы браузера и настройка окружения',
      'HTML, CSS и SCSS',
      'React 18 и основы компонентного подхода',
      'Redux Toolkit (RTK)',
      'TypeScript основы',
      'Material-UI (MUI)',
      'Git и основы командной работы',
      'SCRUM и Agile-методологии',
      'Составление резюме и подготовка к собеседованиям'
    ],
    result: 'После прохождения курса вы сможете уверенно работать с базовыми инструментами и технологиями, создать свое портфолио и быть готовым к собеседованиям на Junior позицию.'
  },
  {
    title: 'Продвинутый (Middle Frontend Developer)',
    price: '120 000',
    description: 'Для тех, кто хочет углубить знания и перейти на уровень Middle разработчика.',
    features: [
      'Углубленное изучение Redux Toolkit и MobX',
      'Webpack и Vite',
      'ESLint и Prettier',
      'Feature-Sliced Design (FSD)',
      'React 18-19 углубленно',
      'TypeScript продвинутый уровень',
      'Паттерны проектирования',
      'Оптимизация и рефакторинг',
      'Доступ к эксклюзивным материалам'
    ],
    result: 'После прохождения курса вы сможете разрабатывать сложные веб-приложения, внедрять современные технологии и уверенно пройти собеседования на Middle позицию.',
    isPopular: true
  }
];

function InstallmentInfo() {
  return (
    <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6 mb-24 text-center">
      <div className="flex justify-center mb-4">
        <CreditCard className="h-8 w-8 text-purple-600 dark:text-purple-400" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
        Доступна рассрочка на 12 месяцев
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Оплачивайте обучение частями без переплат
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">Junior курс</p>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            6 667 ₽/мес
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">Middle курс</p>
          <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
            10 000 ₽/мес
          </p>
        </div>
      </div>
    </div>
  );
}

export function PricingPage() {
  return (
    <div className="min-h-screen py-20 px-4 mb-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
            Тарифы и цены
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Выберите подходящий курс для вашего уровня
          </p>
        </motion.div>

        <InstallmentInfo />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {courses.map((course) => (
            <PricingCard
              key={course.title}
              {...course}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}