import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact-form" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Записаться на курс
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Укажите имя'
                value={formData.name}
                onChange={handleChange}
                className="w-full h-14 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent 
                text-gray-900 dark:text-white
                focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 
                transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Укажите почту'
                value={formData.email}
                onChange={handleChange}
                className="w-full h-14 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent 
                text-gray-900 dark:text-white
                focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 
                transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                placeholder='Введите сообщение'
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent 
                text-gray-900 dark:text-white
                focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 
                transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full h-14 flex justify-center items-center space-x-2 
              bg-purple-600 hover:bg-purple-700 
              text-white font-medium rounded-lg 
              transition-colors"
            >
              <span>Отправить</span>
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}