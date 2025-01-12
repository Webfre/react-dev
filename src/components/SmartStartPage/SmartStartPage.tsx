import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SmartStartPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl mt-14 md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Smart-Start: Погружение в мир React-разработки и Frontend
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Ваш первый шаг в профессии: узнайте, кто такие React-разработчики и чем они занимаются. 
            Простое и понятное введение для новичков.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Block 1: What is Frontend Development */}
          <motion.section variants={item} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              Frontend – это то, что видит пользователь
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Frontend – это "лицо" любого сайта или приложения. Когда вы открываете веб-сайт, 
              нажимаете на кнопки или заполняете формы, вы взаимодействуете с работой Frontend-разработчика. 
              Это специалист, который создает удобный и красивый интерфейс, чтобы пользователю было 
              комфортно и просто пользоваться продуктом.
            </p>
          </motion.section>

          {/* Block 2: Who are React Developers */}
          <motion.section variants={item} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              React-разработчик – архитектор интерфейсов
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              React-разработчики – это Frontend-специалисты, которые используют популярный инструмент React.js. 
              Этот фреймворк помогает создавать интерактивные и быстрые интерфейсы.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Превращают дизайн в работающие веб-приложения</li>
              <li>Создают компоненты – маленькие кусочки интерфейса, которые можно многократно использовать</li>
              <li>Оптимизируют производительность, чтобы приложения работали плавно даже при большой нагрузке</li>
            </ul>
          </motion.section>

          {/* Block 3: Daily Tasks */}
          <motion.section variants={item} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              Ежедневные задачи React-разработчика
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Создание интерфейсов</h3>
                    <p className="text-gray-600 dark:text-gray-400">Верстка страниц на HTML и CSS</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Программирование логики</h3>
                    <p className="text-gray-600 dark:text-gray-400">Добавление интерактивности с помощью JavaScript и React</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Работа с данными</h3>
                    <p className="text-gray-600 dark:text-gray-400">Получение и отображение информации от серверов</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Тестирование и оптимизация</h3>
                    <p className="text-gray-600 dark:text-gray-400">Обеспечение стабильной работы приложения</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Block 4: Why it's important */}
          <motion.section variants={item} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              React – основа современных веб-приложений
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Большинство популярных сервисов, таких как Facebook, Instagram, Netflix, используют React 
              для создания своих интерфейсов. React-разработчики востребованы на рынке, потому что они 
              помогают бизнесу быстро и качественно создавать цифровые продукты.
            </p>
          </motion.section>

          {/* Block 5: First Steps */}
          <motion.section variants={item} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              С чего начать?
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-700 dark:text-gray-300">Освоить основы HTML, CSS и JavaScript</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-700 dark:text-gray-300">Познакомиться с React и его компонентами</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-700 dark:text-gray-300">Понять, как работают состояние, маршрутизация и API</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-700 dark:text-gray-300">Попрактиковаться на небольших проектах</p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div variants={item} className="text-center">
						<Link 
            to="/contacts"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full 
              shadow-lg transform transition hover:scale-105"
          >
            Начать обучение прямо сейчас!
          </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default SmartStartPage;