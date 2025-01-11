import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Телефон',
    content: '+7 (999) 979-71-38',
    link: 'tel:+79999797138'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@reactpro.ru',
    link: 'mailto:info@reactpro.ru'
  },
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'г. Москва, ул. Программистов, 42',
    link: 'https://maps.google.com'
  },
  {
    icon: MessageCircle,
    title: 'Telegram',
    content: '@reactpro',
    link: 'https://t.me/reactpro'
  }
];

export function ContactsPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mt-10 text-gray-900 dark:text-white mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Наши Контакты
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.title}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {contact.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {contact.content}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Напишите нам
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
                className="w-full h-14 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent 
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
                value={formData.email}
                placeholder='Укажите почту'
                onChange={handleChange}
                className="w-full h-14 px-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent 
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
                value={formData.message}
                onChange={handleChange}
                placeholder='Введите сообщение'
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent 
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
        </motion.div>
      </div>
    </div>
  );
}