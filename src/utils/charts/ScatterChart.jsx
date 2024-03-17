// ScatterChart.js
import React from "react";
import { Scatter } from "react-chartjs-2";
import chartOptions from './ChartOptions'; // Importa les opcions d'estil

function ScatterChart({ chartData }) {
  return <Scatter data={chartData}             options={chartOptions}
  />;
}

export default ScatterChart;
