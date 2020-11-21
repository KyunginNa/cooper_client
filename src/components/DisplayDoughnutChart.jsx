import React from 'react';
import { Doughnut } from "react-chartjs-2";

const DisplayDoughnutChart = ({performanceData}) => {
  let doughnut;
  // let count;
  let messages = [];
  let numbers = [];
  let labels = [
      'Excellent',
      'Above average',
      'Average',
      'Below average',
      'Poor']

    if (performanceData != null) {
        performanceData.forEach((entry) => {
        messages.push(entry.data.message);
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
            'lightblue',
            'steelblue',
            'teal',
            'pink',
            'salmon',
          ],
          
          borderColor: [
            'lightblue',
            'steelblue',
            'teal',
            'pink',
            'salmon',
          ],
          borderWidth: 1,
        },
      ],
    }

    doughnut = <Doughnut data={data} />
  
  return (
    <>
    {doughnut}
    </>
    );   
}

export default DisplayDoughnutChart