import { MessageCircle, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-purple-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+79991234567" className="hover:text-purple-300 transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@reactpro.ru" className="hover:text-purple-300 transition-colors">
                  info@reactpro.ru
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <a 
                href="https://t.me/reactpro" 
                className="text-purple-300 hover:text-purple-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Присоединяйтесь к нам в Telegram
              </a>
            </div>
            <p className="mt-4">© 2024 ReactPro. Все права защищены.</p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-semibold text-lg mb-4">Адрес</h3>
            <p>г. Москва, ул. Программистов, 42</p>
            <p className="mt-2">Офис 404</p>
          </div>
        </div>
      </div>
    </footer>
  );
}