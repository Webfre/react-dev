import { LucideIcon, Layout, FileCode, Code2, Rocket, GitBranch, Terminal, Database, TestTube, Globe, Shield } from 'lucide-react';

export interface Topic {
  name: string;
  description: string;
  duration: string;
  items: string[];
}

export interface Module {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  prerequisites: string[];
  topics: Topic[];
  position: {
    x: number;
    y: number;
    level: number;
  };
}

export const courseModules: Module[] = [
  {
    id: 'internet',
    title: 'Internet Fundamentals',
    icon: Globe,
    description: 'Основы работы интернета и веб-технологий',
    duration: '10 часов',
    prerequisites: [],
    position: { x: 0, y: 0, level: 0 },
    topics: [
      {
        name: 'Как работает интернет',
        description: 'Базовые принципы работы интернета',
        duration: '2 часа',
        items: [
          'Протоколы передачи данных',
          'Клиент-серверная архитектура',
          'IP адреса и домены',
          'HTTPS и безопасность'
        ]
      }
    ]
  },
  {
    id: 'html',
    title: 'HTML',
    icon: Layout,
    description: 'Структура и семантика веб-страниц',
    duration: '30 часов',
    prerequisites: ['internet'],
    position: { x: 1, y: 0, level: 1 },
    topics: [
      {
        name: 'Основы HTML',
        description: 'Фундаментальные концепции HTML',
        duration: '6 часов',
        items: [
          'Структура документа',
          'Теги и атрибуты',
          'Семантические элементы',
          'Текстовое форматирование',
          'Списки и таблицы',
          'Ссылки и навигация'
        ]
      },
      {
        name: 'Формы и валидация',
        description: 'Работа с формами и их валидация',
        duration: '8 часов',
        items: [
          'Типы input элементов',
          'Валидация форм',
          'Кастомные элементы форм',
          'Обработка отправки',
          'Доступность форм'
        ]
      },
      {
        name: 'Мультимедиа',
        description: 'Работа с медиа-контентом',
        duration: '6 часов',
        items: [
          'Изображения и форматы',
          'Аудио и видео',
          'Оптимизация медиа',
          'Адаптивные изображения',
          'Lazy loading'
        ]
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS',
    icon: FileCode,
    description: 'Стилизация и дизайн веб-страниц',
    duration: '40 часов',
    prerequisites: ['html'],
    position: { x: 2, y: 0, level: 2 },
    topics: [
      {
        name: 'CSS Основы',
        description: 'Базовые концепции CSS',
        duration: '10 часов',
        items: [
          'Селекторы и специфичность',
          'Box Model',
          'Позиционирование',
          'Flexbox',
          'Grid',
          'Responsive Design'
        ]
      },
      {
        name: 'Продвинутый CSS',
        description: 'Продвинутые техники CSS',
        duration: '15 часов',
        items: [
          'Animations & Transitions',
          'CSS Variables',
          'CSS Modules',
          'Sass/SCSS',
          'CSS-in-JS',
          'CSS Architecture'
        ]
      }
    ]
  },
  // Добавьте остальные модули...
];