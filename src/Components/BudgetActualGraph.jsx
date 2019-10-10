import React, { Component } from "react";
import * as d3 from "d3";

export default class BudgetActualGraph extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    this.createBarChart();
  }
  createBarChart() {
    const chartdata = [40, 60, 80, 100];
    const categories = ["cat1", "cat2", "cat3", "cat4"];
    var width = 700;
    var height = 300;

    var svg = d3
      .select("#chart1")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "bar-chart");

    var x = d3.scaleBand().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    x.domain(
      categories.map(item => {
        return item;
      })
    );
    y.domain([0, Math.max(chartdata)]);

    svg
      .selectAll(".bar")
      .data(chartdata)
      .enter()
      .append("rect")
      .attr("class", "bar");
  }
  render() {
    return (
      <div>
        <div id="chart1"></div>
      </div>
    );
  }
}
