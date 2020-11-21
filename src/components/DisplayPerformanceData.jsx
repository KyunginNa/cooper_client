import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import DisplayLineChart from "../components/DisplayLineChart";
import DisplayDoughnutChart from "../components/DisplayDoughnutChart"

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
    return (
      <div id="index">
     <DisplayLineChart performanceData={this.state.performanceData}/>
     <DisplayDoughnutChart performanceData={this.state.performanceData}/>
      </div>
    )
  }
}

export default DisplayPerformanceData
