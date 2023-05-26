import React, { useState, useEffect, useRef } from 'react';
import Whychus from '../Home/Whychus';
import Footer from '../Home/Footer';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Switch, Typography } from 'antd';
import { Chart } from 'chart.js';


const Aboutus = () => {
  const { Paragraph, Text } = Typography;
const [ellipsis, setEllipsis] = useState(true);
const [expanded, setExpanded] = useState(false);
const [ellipsisA, setEllipsisA] = useState(true);
const [expandedA, setExpandedA] = useState(false);
const chartRef = useRef(null);
  const memberData = {
    members: [
      {
        name: '',
        experience: '',
        skills: [{ skillone: '' }, { skilltwo: '' }, { skillthree: '' }],
        selectedWorks: [],
        certifications: [],
      },
    ],
  };

  const [chartInstance, setChartInstance] = useState(null);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleExpandA = () => {
    setExpandedA(!expandedA);
  };

  // Sample data for the character's stats
  const statsData = {
    labels: ['Front end development', 'Backend development', 'Speed', 'Health', 'UI/UX Design'],
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
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grace: '5%',
      },
    },
  };

  useEffect(() => {
    let chartInstance = null; // Initialize the chart instance variable

    const renderChart = () => {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance) {
          chartInstance.destroy();
        }
        chartInstance = new Chart(ctx, {
          type: 'radar',
          data: statsData,
          options: options,
        });
      }
    };

    renderChart();

    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Character Stats</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="mb-2">Stats:</h3>
            <div className="grid grid-cols-2 gap-2">
              {statsData.labels.map((label, index) => (
                <div key={label} className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2">Graph:</h3>
            <div className='border-2 border-red-500 object-contain w-[20vw]'>
            <canvas ref={chartRef} id="stats-chart"></canvas>
            </div>
          </div>
        </div>
      </div>
      <Whychus />
      <Footer />
    </div>
  );
};

export default Aboutus;