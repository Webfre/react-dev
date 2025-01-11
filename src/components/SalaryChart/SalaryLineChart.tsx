import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Move data and options to separate files for better organization
import { salaryData } from './data/salaryData';
import { chartOptions } from './data/chartOptions';

export function SalaryLineChart() {
  return (
    <div className="w-full h-[400px]">
      <Line data={salaryData} options={chartOptions} />
    </div>
  );
}