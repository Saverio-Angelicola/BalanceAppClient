import React from "react";
import "./Chart.css";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Chart = ({ data }) => {
  return (
    <section>
      <Line height={500} width={500} data={data} />
    </section>
  );
};

export default Chart;
