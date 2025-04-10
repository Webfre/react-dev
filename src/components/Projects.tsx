import im1 from '../../public/image.png';
import im2 from '../../public/image2.png';
import im3 from '../../public/image3.png';

const projects = [
  {
    title: 'Social Media Dashboard',
    description: 'Создание современной социальной платформы с React и Redux',
    image: im1,
    tags: ['React', 'Redux', 'TypeScript'],
  },
  {
    title: 'E-commerce Platform',
    description: 'Полноценный интернет-магазин с корзиной и оплатой',
    image: im2,
    tags: ['React', 'Redux', 'Stripe'],
  },
  {
    title: 'Task Management App',
    description: 'Система управления задачами с drag-and-drop интерфейсом',
    image: im3,
    tags: ['React', 'DnD', 'TypeScript'],
  },
];

export function Projects() {
  return (
    <section id="проекты" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Проекты, которые вы создадите
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}