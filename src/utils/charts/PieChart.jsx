// PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import chartOptions from './ChartOptions'; // Importa les opcions d'estil


function PieChart({ chartData }) {
  return <Pie data={chartData}             options={chartOptions}
  />;
}

export default PieChart;
