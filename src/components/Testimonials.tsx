import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Виктория Сержанова',
    fromRole: 'Воспитатель',
    toRole: 'Frontend-разработчик React',
    content: 'По резюме мне написал HR "Ининтез". Меня взяли на вакансию с целым списком требований, набираюсь опыта!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Дмитрий Щеглов',
    fromRole: 'Инженер проектировщик',
    toRole: 'Frontend-разработчик REACT, VUE',
    content: 'Сейчас я работаю в своей мечте, было трудно, тяжело, но у меня получилось. Всем удачи!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Анна Смирнова',
    fromRole: 'Учитель',
    toRole: 'Frontend-разработчик, React, JS',
    content: 'После курса я получила работу в IT-компании. Самое главное возможность работать удаленно!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="отзывы" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Истории успеха выпускников
        </h2>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 text-lg text-gray-600 dark:text-gray-400 mb-4">
                      <span>{testimonials[currentIndex].fromRole}</span>
                      <ArrowRight className="h-5 w-5" />
                      <span className="text-purple-600 dark:text-purple-400">
                        {testimonials[currentIndex].toRole}
                      </span>
                    </div>
                    <blockquote className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-purple-600 dark:bg-purple-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}