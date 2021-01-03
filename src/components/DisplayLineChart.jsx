import React from 'react'
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Container } from 'semantic-ui-react'

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
        label: "Distance",
        data: distances,
        backgroundColor: 'transparent',
        borderColor: 'skyblue',
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
  graph = <Line data-cy="line-graph" data={data} options={options} />

  return (
    <div data-cy="line-graph" className="chartSize">
      {graph}
    </div>
  );
}

export default DisplayLineChart
