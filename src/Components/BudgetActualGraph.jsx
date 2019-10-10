import React, { Component } from "react";
//import * as d3 from "d3";
import { BarChart } from "react-d3-components";
import axios from "axios";

export default class BudgetActualGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ x: "SomethingA", y: 10 }, { x: "SomethingB", y: 4 }, { x: "SomethingC", y: 3 }]
    };
    this.getChartValues = this.getChartValues.bind(this);
  }
  componentDidMount() {
    this.getChartValues();
  }

  getChartValues() {
    axios
      .get("/transactions/chart")
      .then(({ data }) => {
        console.log("chart data", data);
        this.setState({ data: data });
      })
      .then(() => {
        console.log("Here is state", this.state);
      });
  }

  render() {
    return (
      <div>
        <div id="chart1"></div>
        <BarChart groupedBars data={this.state.data} width={1000} height={400} margin={{ top: 10, bottom: 50, left: 50, right: 10 }} />
      </div>
    );
  }
}
