interface IntensitySelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export function IntensitySelector({ value, onChange }: IntensitySelectorProps) {
  return (
    <div className="flex flex-col items-center space-y-4 max-w-full overflow-hidden">
      <label className="text-gray-700 dark:text-gray-300">
        Интенсивность обучения (часов в день)
      </label>
      <div className="flex flex-wrap justify-center gap-4">
        {[2, 4, 6].map((hours) => (
          <button
            key={hours}
            onClick={() => onChange(hours)}
            className={`px-6 py-2 rounded-lg transition-all ${
              value === hours
                ? 'bg-purple-600 text-white shadow-lg scale-105'
                : 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800'
            }`}
          >
            {hours} ч/день
          </button>
        ))}
      </div>
    </div>
  );
}