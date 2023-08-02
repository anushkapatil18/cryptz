import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  // Dummy data for testing
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Price',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          tooltipFormat: 'll',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="line-chart mt-8">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
