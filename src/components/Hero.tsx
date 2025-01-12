import { ArrowRight } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { useScrollTo } from '../hooks/useScrollTo';
import { Link } from 'react-router-dom';

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <div className="relative bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950 pt-32 pb-20 overflow-hidden">
      <AnimatedBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            React-разработка с нуля:
            <br />
            <span className="text-purple-600 dark:text-purple-400">ваш путь в Frontend!</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Подробный курс? Нет не просто курс, мы сообщество, которое погрузит вас в мир web - разработки. Изучите основы
            программирования, создайте реальные проекты и подготовьтесь к карьере разработчика.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => scrollTo('contact-form')}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <span>Начать обучение</span>
              <ArrowRight className="h-5 w-5" />
            </button>

						<Link 
            to="/smart-start"
              className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 px-8 py-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 transition-colors"
          >
            Узнать больше
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}