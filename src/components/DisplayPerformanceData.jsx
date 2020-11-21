import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import DisplayLineChart from "../components/DisplayLineChart";
import DisplayDoughnutChart from "../components/DisplayDoughnutChart"
import { Divider } from 'semantic-ui-react'

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
     <Divider horizontal className="chartDivider">Line Chart</Divider>   
     <DisplayLineChart performanceData={this.state.performanceData}/>
      <Divider horizontal className="chartDivider">Doughnut Chart</Divider>
     <DisplayDoughnutChart performanceData={this.state.performanceData}/>
      </div>
    )
  }
}

export default DisplayPerformanceData
