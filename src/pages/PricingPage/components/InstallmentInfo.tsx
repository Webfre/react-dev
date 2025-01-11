import React from 'react';
import { CreditCard } from 'lucide-react';

export function InstallmentInfo() {
  return (
    <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6 mb-12 text-center">
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