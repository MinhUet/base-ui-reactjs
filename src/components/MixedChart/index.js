import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import './index.scss';

MixedChart.propTypes = {};

function MixedChart(props) {
  return (
    <div className='mixed-chart'>
      <Line
        width={500}
        height={300}
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'June1',
            'July1',
          ],
          datasets: [
            {
              label: 'Dataset 1',
              data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgb(255, 99, 132)',
              yAxisID: 'y1',
            },
            {
              label: 'Dataset 2',
              data: [63, 96, 1, 58, 74, 25, 8, 13, 41],
              borderColor: '#35a2eb',
              backgroundColor: '#35a2eb',
              yAxisID: 'y1',
            },
            {
              label: 'Dataset 3',
              data: [10, 63, 25, 24, 200, 45, 12, 45, 9],
              borderColor: '#1eff18',
              backgroundColor: '#1eff18',
              yAxisID: 'y1',
            },
            {
              type: 'bar',
              label: 'Bar Dataset',
              data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              yAxisID: 'y',
            },
          ],
        }}
        options={{
          responsive: true,
          stacked: false,
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Line Chart - Multi Axis',
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              grace: '5%',
              beginAtZero: true,
              grid: {
                color: '#bbb',
                borderDash: [5, 5],
              },
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              grace: '5%',
              beginAtZero: true,
              grid: {
                drawOnChartArea: false,
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default MixedChart;
