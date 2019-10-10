import { BarChart } from "react-d3-components";

import React from "react";

export default function BudgetActualGraph({ data }) {
  return (
    <div>
      <div id="chart1"></div>
      <BarChart
        groupedBars
        data={data}
        width={1000}
        height={400}
        margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
      />
    </div>
  );
}
