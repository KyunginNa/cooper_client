import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import { Line } from "react-chartjs-2";

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getPerformanceData()
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    })
  }

  render() {
    let graph;
    let distances = [];
    let labels = [];
    let age = [];

    if (this.state.performanceData != null) {
      this.state.performanceData.forEach((entry) => {
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
      <div id="index">
        {graph}
      </div>
    )
  }
}

export default DisplayPerformanceData
