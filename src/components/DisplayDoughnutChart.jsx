import React from "react"
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Container } from 'semantic-ui-react'

const DisplayDoughnutChart = () => {
  const pastResults = useSelector(state => state.pastResults)

  let doughnut;
  let messages = [];
  let numbers = [];
  let labels = [
    'Excellent',
    'Above average',
    'Average',
    'Below average',
    'Poor']

  if (pastResults != null) {
    pastResults.forEach((item) => {
      messages.push(item.data.result);
    });

    labels.forEach((index) => {
      let count
      count = messages.filter(x => x === index).length
      numbers.push(count)
    })
  }

  const data = {
    labels: labels,

    datasets: [
      {
        label: "Result",
        data: numbers,
        backgroundColor: [
          'teal',
          'steelblue',
          'lightblue',
          'pink',
          'salmon',
        ],

        borderColor: [
          'teal',
          'steelblue',
          'lightblue',
          'pink',
          'salmon',
        ],
        borderWidth: 1,
      },
    ],
  }

  doughnut = <Doughnut data={data} />

  return (
    <div data-cy="doughnut-graph" className="chartSize">
      {doughnut}
    </div>
  );
}

export default DisplayDoughnutChart
