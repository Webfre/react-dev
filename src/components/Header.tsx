import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useScrollTo } from '../hooks/useScrollTo';

export function Header() {
  const location = useLocation();
  const scrollTo = useScrollTo();

  const navigation = [
    { name: 'Программа', path: '/roadmap' },
    { name: 'Цены', path: '/pricing' },
    { name: 'Smart-Start', path: '/smart-start' },
    { name: 'Контакты', path: '/contacts' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      if (location.pathname === '/') {
        scrollTo(path.substring(2));
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-100 dark:border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">devcourse</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                style={{color: item.name === 'Smart-Start' ? '#9333ea': ''}}
                key={item.name}
                to={item.path.startsWith('/#') ? '#' : item.path}
                onClick={() => handleNavClick(item.path)}
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          
          <Link 
            to="/contacts"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Записаться
          </Link>
        </div>
      </div>
    </header>
  );
}