export const salaryData = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Junior',
      data: [45000, 60000, 70000, 90000, 120000, 150000, 180000],
      borderColor: 'rgb(147, 51, 234)',
      backgroundColor: 'rgba(147, 51, 234, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Middle',
      data: [90000, 120000, 150000, 180000, 220000, 260000, 300000],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Senior',
      data: [150000, 200000, 250000, 300000, 350000, 400000, 450000],
      borderColor: 'rgb(236, 72, 153)',
      backgroundColor: 'rgba(236, 72, 153, 0.1)',
      fill: true,
      tension: 0.4,
    }
  ]
};