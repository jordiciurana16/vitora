// DoughnutChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import chartOptions from './ChartOptions'; // Importa les opcions d'estil


function DoughnutChart({ chartData }) {
  return <Doughnut data={chartData}             options={chartOptions}
  />;
}

export default DoughnutChart;
