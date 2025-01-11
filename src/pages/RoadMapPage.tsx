import { motion } from 'framer-motion';
import { Code2, Layout, FileCode, Terminal } from 'lucide-react';

const technologies = [
  {
    title: 'HTML',
    icon: Layout,
    topics: [
      { name: 'Семантическая верстка', items: ['header', 'nav', 'main', 'article', 'section', 'footer'] },
      { name: 'Формы и валидация', items: ['input types', 'validation attributes', 'custom validation'] },
      { name: 'Мультимедиа', items: ['video', 'audio', 'picture', 'source'] },
      { name: 'SEO оптимизация', items: ['meta tags', 'Open Graph', 'Schema.org'] },
    ]
  },
  {
    title: 'CSS',
    icon: FileCode,
    topics: [
      { name: 'Flexbox', items: ['flex-direction', 'justify-content', 'align-items', 'flex-wrap'] },
      { name: 'Grid', items: ['grid-template', 'grid-areas', 'grid-auto-flow', 'gap'] },
      { name: 'BEM методология', items: ['блоки', 'элементы', 'модификаторы', 'нейминг'] },
      { name: 'Анимации', items: ['transitions', 'transforms', 'keyframes', 'animation'] },
    ]
  },
  {
    title: 'JavaScript',
    icon: Code2,
    topics: [
      { name: 'Основы', items: ['типы данных', 'операторы', 'функции', 'объекты'] },
      { name: 'ES6+', items: ['arrow functions', 'destructuring', 'modules', 'async/await'] },
      { name: 'DOM API', items: ['селекторы', 'события', 'манипуляции', 'делегирование'] },
      { name: 'Асинхронность', items: ['промисы', 'async/await', 'Event Loop', 'WebSocket'] },
    ]
  },
  {
    title: 'React',
    icon: Code2,
    topics: [
      { name: 'Компоненты', items: ['функциональные', 'классовые', 'композиция', 'пропсы'] },
      { name: 'Хуки', items: ['useState', 'useEffect', 'useContext', 'custom hooks'] },
      { name: 'Состояние', items: ['локальное', 'глобальное', 'Redux', 'Context API'] },
      { name: 'Оптимизация', items: ['useMemo', 'useCallback', 'React.memo', 'Code Splitting'] },
    ]
  },
  {
    title: 'TypeScript',
    icon: FileCode,
    topics: [
      { name: 'Типы', items: ['базовые типы', 'интерфейсы', 'типы vs интерфейсы', 'дженерики'] },
      { name: 'Продвинутые типы', items: ['union', 'intersection', 'mapped types', 'utility types'] },
      { name: 'Декораторы', items: ['class decorators', 'method decorators', 'property decorators'] },
      { name: 'Интеграция', items: ['с React', 'с Redux', 'с библиотеками', 'настройка проекта'] },
    ]
  },
  {
    title: 'Инструменты',
    icon: Terminal,
    topics: [
      { name: 'Git', items: ['базовые команды', 'ветвление', 'merge vs rebase', 'git flow'] },
      { name: 'Webpack', items: ['конфигурация', 'лоадеры', 'плагины', 'оптимизация'] },
      { name: 'DevTools', items: ['отладка', 'профилирование', 'lighthouse', 'performance'] },
      { name: 'CI/CD', items: ['автоматизация', 'тестирование', 'деплой', 'мониторинг'] },
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function RoadMapPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold text-center text-gray-900 mt-10 dark:text-white mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Карта Обучения
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{tech.title}</h2>
              </div>
              
              <div className="space-y-6">
                {tech.topics.map((topic) => (
                  <div key={topic.name} className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {topic.name}
                    </h3>
                    <ul className="space-y-2">
                      {topic.items.map((item) => (
                        <li 
                          key={item}
                          className="text-gray-600 dark:text-gray-300 flex items-center"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}