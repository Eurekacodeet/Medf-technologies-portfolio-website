import React from 'react';
import { Radar } from 'react-chartjs-2';

const MemberStat = () => {
  const data = {
    labels: ['Attack', 'Defense', 'Speed', 'Health', 'Magic'],
    datasets: [
      {
        label: 'Stats',
        data: [80, 60, 70, 90, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true, max: 100 },
      pointLabels: { fontSize: 14 },
    },
    legend: {
      display: false,
    },
  };

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default MemberStat;
