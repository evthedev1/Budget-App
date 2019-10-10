import React, { Component } from "react";
import * as d3 from "d3";
import { BarChart } from "react-d3-components";

export default class BudgetActualGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "budget",
          values: [
            { x: "Food", y: 10 },
            { x: "Entertainment", y: 4 },
            { x: "Transportation", y: 3 }
          ]
        },
        {
          label: "actual",
          values: [
            { x: "Food", y: 6 },
            { x: "Entertainment", y: 8 },
            { x: "Transportation", y: 5 }
          ]
        }
      ]
    };
  }
  componentDidMount() {
    // this.createBarChart();
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
        />
      </div>
    );
  }
}
