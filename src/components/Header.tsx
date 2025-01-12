import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useScrollTo } from '../hooks/useScrollTo';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  useScrollToTop();
  const location = useLocation();
  const scrollTo = useScrollTo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', path: '/' },
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
    setIsMenuOpen(false);
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
                style={{color: item.name === 'Smart-Start' ? '#b68ade': ''}}
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

          <div className="flex items-center space-x-4">
            <Link 
              to="/contacts"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Записаться
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-800/50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-purple-100 dark:border-purple-800"
          >
            <motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="py-4 px-4 space-y-4 bg-white dark:bg-gray-900"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path.startsWith('/#') ? '#' : item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="block py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  style={{
                    color: item.name === 'Smart-Start' ? '#b68ade' : ''
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-purple-100 dark:border-purple-800">
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}