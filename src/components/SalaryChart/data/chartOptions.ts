import { ChartOptions } from 'chart.js';

export const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'rgb(156, 163, 175)',
        font: {
          size: 14
        }
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function(context: any) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('ru-RU', {
              style: 'currency',
              currency: 'RUB',
              maximumFractionDigits: 0
            }).format(context.parsed.y);
          }
          return label;
        }
      }
    }
  },
  scales: {
    y: {
      ticks: {
        callback: function(value: any) {
          return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0
          }).format(value);
        },
        color: 'rgb(156, 163, 175)',
      },
      grid: {
        color: 'rgba(156, 163, 175, 0.1)',
      },
    },
    x: {
      ticks: {
        color: 'rgb(156, 163, 175)',
      },
      grid: {
        color: 'rgba(156, 163, 175, 0.1)',
      },
    }
  }
};