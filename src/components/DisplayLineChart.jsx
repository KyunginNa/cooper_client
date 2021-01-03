import React from 'react'
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

const DisplayLineChart = () => {
  const pastResults = useSelector(state => state.pastResults)

  let graph;
  let distances = [];
  let labels = [];
  let age = [];

  if (pastResults != null) {
    pastResults.forEach((item) => {
      distances.push(item.data.distance);
      labels.push(item.data.result);
      age.push(item.data.age)
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
