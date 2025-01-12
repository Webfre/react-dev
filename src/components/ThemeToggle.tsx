import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-purple-600 dark:text-purple-300" />
      ) : (
        <Sun className="h-5 w-5 text-purple-600 dark:text-purple-300" />
      )}
    </button>
  );
}