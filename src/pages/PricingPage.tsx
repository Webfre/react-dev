import { motion } from 'framer-motion';
import { PricingCard } from '../components/PricingCard';
import { CreditCard } from 'lucide-react';
import { courses } from './PricingPage/data/courses';

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
            5 000 ₽/мес
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