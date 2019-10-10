// d3.ascending, d3.descending, func(a,b) { return a - b; }, etc...

import React, { Component } from "react";
import { PieChart } from "react-d3-components";

export default class PieTestChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        label: "somethingA",
        values: [{ x: "SomethingA", y: 10 }, { x: "SomethingB", y: 4 }, { x: "SomethingC", y: 3 }]
      }
    };
  }

  render() {
    return (
      <div>
        <PieChart data={this.state.data} width={600} height={400} margin={{ top: 10, bottom: 10, left: 100, right: 100 }} sort={null} />
      </div>
    );
  }
}
