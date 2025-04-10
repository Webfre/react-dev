import { Facebook, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Footer2() {
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
  };

  return (
    <footer className="relative">
      {/* Top curved section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-900/20 to-transparent" 
           style={{
             borderTopLeftRadius: '50% 100%',
             borderTopRightRadius: '50% 100%',
           }}
      />

      {/* Main content */}
      <div className="relative pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Want to partner section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-2 dark:text-gray-100 mb-6">У вас остались вопросы? Напишите нам.</h2>
            <p className="text-gray-400 mb-6">
              Если у вас есть вопросы по обучению, как проходят уроки и любые другие вопросы, пишите <br /> мы с радостью на них ответим!
            </p>
            <button onClick={() => handleNavigate('/contacts')} className="bg-[#9333ea] text-white px-8 py-2 rounded-full hover:bg-[#52009d] transition-colors">
              Контакты
            </button>
          </div>

          {/* Main Sections */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo section */}
            <div className="flex items-center justify-center md:justify-start">
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-[#9e8dfd]" />
                <span className="text-xl font-semibold dark:text-gray-100">devcourse.ru</span>
              </div>
            </div>

            {/* Navigation sections */}
            <div>
              <h3 className="text-[#9e8dfd] mb-4 text-sm uppercase tracking-wider">Обучение</h3>
              <ul className="space-y-2">
                <li onClick={() => handleNavigate('/roadmap')}><a href="#" className="text-sm text-gray-400 hover:text-[#9333ea] transition-colors">Программа обучения</a></li>
                <li onClick={() => handleNavigate('/pricing')}><a href="#" className="text-sm text-gray-400 hover:text-[#9333ea] transition-colors">Цены</a></li>
                {/* <li onClick={() => handleNavigate('/faq')}><a href="#" className="text-sm text-gray-400 hover:text-[#9333ea] transition-colors">Вопросы и ответы</a></li> */}
              </ul>
            </div>

            <div>
              <h3 className="text-[#9e8dfd] mb-4 text-sm uppercase tracking-wider">О нас</h3>
              <ul className="space-y-2">
                <li onClick={() => handleNavigate('/')}><a href="#" className="text-sm text-gray-400 hover:text-[#9333ea] transition-colors">О курсе</a></li>
                <li onClick={() => handleNavigate('/contacts')}><a href="#" className="text-sm text-gray-400 hover:text-[#9333ea] transition-colors">Контакты</a></li>
              </ul>
            </div>

            {/* <div>
              <h3 className="text-[#9e8dfd] mb-4 text-sm uppercase tracking-wider">Поддержка</h3>
              <ul className="space-y-2">
                <li onClick={() => handleNavigate('/tg')}><a href="#" className="text-sm text-gray-400 hover:text-[#9333ea] transition-colors">Техническая поддержка</a></li>
                <li onClick={() => handleNavigate('/infopay')}><a href="#" className="text-sm text-gray-400 hover:text-[#9333ea] transition-colors">Оплата</a></li>
              </ul>
            </div> */}
          </div>

          {/* Social Links */}
          {/* <div className="text-center mb-8">
            <h3 className="text-[#9e8dfd] mb-4 text-sm uppercase tracking-wider">Мы тут.</h3>
            <div className="flex justify-center space-x-4">
              <Facebook  className="w-5 h-5  hover:text-[#9e8dfd] transition-colors cursor-pointer dark:text-gray-100" />
              <Linkedin  className="w-5 h-5  hover:text-[#9e8dfd] transition-colors cursor-pointer dark:text-gray-100" />
              <Twitter  className="w-5 h-5  hover:text-[#9e8dfd] transition-colors cursor-pointer dark:text-gray-100" />
            </div>
          </div> */}

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              ©2025 Все права защищены. FocusCourse.
            </p>
            <a href="#" className="text-sm text-gray-400 hover:text-[#9e8dfd] transition-colors">
              Политика конфиденциальности
            </a>
          </div>

          <div style={{fontSize: '10px'}} className='text-gray-400 mt-4'>
            Все размещенные на сайте сведения носят информационный характер
            и ни при каких условиях не являются офертой по смыслу ст. 435 ГК РФ и не являются публичной офертой по смыслу <br /> ст. 437 ГК РФ, если иное прямо не указано.
            Использование материалов сайта возможно только с письменного разрешения правообладателя.
          </div>
        </div>
      </div>
    </footer>
  );
}