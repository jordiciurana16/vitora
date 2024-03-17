// BubbleChart.js
import React from "react";
import { Bubble } from "react-chartjs-2";
import chartOptions from './ChartOptions'; // Importa les opcions d'estil


function BubbleChart({ chartData }) {
  return <Bubble data={chartData}             options={chartOptions}
  />;
}

export default BubbleChart;
