import { Plus, Minus } from 'lucide-react';
import { useFAQ } from '../hooks/useFAQ';

const faqItems = [
  {
    question: 'Нужны ли начальные знания программирования?',
    answer: 'Нет, курс разработан с нуля. Мы начинаем с основ и постепенно переходим к сложным темам.',
  },
  {
    question: 'Как проходит обучение?',
    answer: 'Обучение включает видеоуроки, практические задания, работу над проектами и код-ревью от преподавателей.',
  },
  {
    question: 'Сколько времени нужно уделять обучению?',
    answer: 'Рекомендуем заниматься 2-6 часов в день. При занятиях 4 часа в день курс можно пройти за 10 месяцев.',
  },
  {
    question: 'Будет ли помощь с трудоустройством?',
    answer: 'Да, мы помогаем составить резюме и готовим к собеседованиям.',
  },
  {
    question: 'Какие проекты я смогу создавать после курса?',
    answer: 'Вы научитесь создавать современные веб-приложения: соцсети, e-commerce проекты, чаты, дашборды и многое другое.',
  },
  {
    question: 'Есть ли поддержка после окончания курса?',
    answer: 'Да, вы получаете доступ к сообществу выпускников и можете консультироваться с преподавателями.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  item: {
    question: string;
    answer: string;
  };
}

function FAQItem({ item }: FAQItemProps) {
  const { isOpen, toggle } = useFAQ();

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {item.question}
        </span>
        {isOpen ? (
          <Minus className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        ) : (
          <Plus className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
        </div>
      )}
    </div>
  );
}