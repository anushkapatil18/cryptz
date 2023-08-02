import React from 'react';
import { Line } from 'react-chartjs-2';


const SimpleLineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Simple Line Chart Example</h2>
      <div style={{ maxWidth: '600px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SimpleLineChart;
