// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import chartOptions from './ChartOptions'; // Importa les opcions d'estil



function LineChart({ chartData }) {
  return <Line data={chartData}             options={chartOptions}
  />;
}

export default LineChart;
