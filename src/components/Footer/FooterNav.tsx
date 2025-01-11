interface NavSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const navSections: NavSection[] = [
  {
    title: 'Партнерства',
    links: [
      { label: 'Компаниям', href: '/for-companies' },
      { label: 'Стать ментором', href: '/become-mentor' },
      { label: 'Стажировки', href: '/internships' },
    ],
  },
  {
    title: 'О нас',
    links: [
      { label: 'О школе', href: '/about' },
      { label: 'Команда', href: '/team' },
      { label: 'Карьера', href: '/careers' },
    ],
  },
  {
    title: 'Поддержка',
    links: [
      { label: 'База знаний', href: '/knowledge' },
      { label: 'Контакты', href: '/contacts' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export function FooterNav() {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {navSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}