import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  result: string;
  isPopular?: boolean;
}

export function PricingCard({ title, price, description, features, result, isPopular }: PricingCardProps) {
  return (
    <div className={`bg-white mt-10 dark:bg-gray-800 rounded-2xl p-8 shadow-xl ${
      isPopular ? 'ring-2 ring-purple-500 transform scale-105' : ''
    }`}>
      {isPopular && (
        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium absolute -top-3 right-8">
          Популярный выбор
        </span>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">{price}</span>
        <span className="text-gray-600 dark:text-gray-400">₽</span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">{description}</p>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-1" />
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-8">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Результат:</h4>
        <p className="text-gray-600 dark:text-gray-300">{result}</p>
      </div>
			
			<Link 
				to="/contacts"
				className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
			>
				Записаться на курс
      </Link>
    </div>
  );
}