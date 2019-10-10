import React, { Component } from "react";
// import * as d3 from "d3";
import { BarChart } from "react-d3-components";
import axios from "axios";

export default class BudgetActualGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.getChartData = this.getChartData.bind(this);
  }
  componentDidMount() {
    // this.getChartData();
  }

  getChartData() {
    return axios
      .get("/transactions/chart")
      .then(({ data }) => {
        this.setState({ data: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div id="chart1"></div>
        <BarChart
          groupedBars
          data={this.state.data}
          width={600}
          height={400}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          xType={"ordinal"}
        />
      </div>
    );
  }
}
