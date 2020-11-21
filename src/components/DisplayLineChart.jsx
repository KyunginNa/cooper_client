import React from 'react';
import { Line } from "react-chartjs-2";

const DisplayLineChart = ({performanceData}) => {
  let graph;
    let distances = [];
    let labels = [];
    let age = [];

    if (performanceData != null) {
        performanceData.forEach((entry) => {
        distances.push(entry.data.distance);
        labels.push(entry.data.message);
        age.push(entry.data.age)
      });
    }

    const data = {
      labels: age,
      datasets: [
        {
          label: "Previous result",
          data: distances,
          backgroundColor: 'transparent',
          borderColor: 'blue',
        }
      ],
    }

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }
    graph = <Line data={data} options={options} />
  
  return (
    <>
    {graph}
    </>
    );   
}

export default DisplayLineChart