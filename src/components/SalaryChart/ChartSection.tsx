import { SalaryLineChart } from './SalaryLineChart';
import { SalaryStats } from './SalaryStats';
import { TrendingUp, Users, BriefcaseIcon } from 'lucide-react';

export function ChartSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            График роста зарплат Frontend-разработчиков
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Динамика роста зарплат с 2018 года и перспективы профессии
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 mb-8">
          <SalaryLineChart />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Стабильный рост
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Ежегодный рост зарплат на 15-20% в среднем по рынку
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Высокий спрос
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Более 5000 вакансий ежемесячно на российском рынке
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <BriefcaseIcon className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Перспективы
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Возможность удаленной работы и международного сотрудничества
            </p>
          </div>
        </div>

        <SalaryStats />
      </div>
    </section>
  );
}