import { Timeline } from './Timeline';
import { IntensitySelector } from './IntensitySelector';
import { useRoadmap } from './useRoadmap';

export function RoadmapSection() {
  const { intensity, setIntensity, totalHours, estimatedMonths } = useRoadmap();

  return (
    <section className="bg-white dark:bg-gray-900 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Сколько времени нужно, чтобы стать Frontend разработчиком?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Разбейте обучение на этапы и контролируйте свой прогресс
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            При {intensity} часах занятий в день вы сможете завершить курс за {estimatedMonths} месяца(ов) 
            и быть готовыми к трудоустройству.
          </p>
        </div>

        <IntensitySelector value={intensity} onChange={setIntensity} />
        
        <div className="mt-12">
          <Timeline intensity={intensity} />
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
            Общая продолжительность: {totalHours} часов
          </p>
        </div>
      </div>
    </section>
  );
}