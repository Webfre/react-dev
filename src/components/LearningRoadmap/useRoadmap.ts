import { useState, useMemo } from 'react';

export function useRoadmap() {
  const [intensity, setIntensity] = useState(4);

  const totalHours = 1200;

  const estimatedMonths = useMemo(() => {
    const daysToComplete = Math.ceil(totalHours / intensity);
    return Math.ceil(daysToComplete / 30);
  }, [intensity]);

  return {
    intensity,
    setIntensity,
    totalHours,
    estimatedMonths,
  };
}