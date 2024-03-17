// RadarChart.js
import React from "react";
import { Radar } from "react-chartjs-2";
import chartOptions from './ChartOptions'; // Importa les opcions d'estil

function RadarChart({ chartData }) {
  return <Radar data={chartData}             options={chartOptions}
  />;
}

export default RadarChart;
