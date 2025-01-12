import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center">

        <div className="text-center">
          <h1 className="text-9xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            404
          </h1>
          <div className="text-xl md:text-2xl font-medium mb-8 text-gray-700 dark:text-gray-300">
            Упс! Страница не найдена
          </div>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Страница, которую вы ищете, не существует <br /> или была перемещена.
          </p>
          <Link
            to="/"
            className="px-6 py-3 rounded-lg text-white transition-all duration-200 transform hover:scale-105 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 shadow-lg hover:shadow-purple-500/50"
          >
            Перейти на главную
          </Link>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-200/50 dark:bg-purple-900/20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-purple-200/50 dark:bg-purple-900/20"></div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
