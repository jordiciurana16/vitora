// ChartFactory.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

class ChartFactory {
    static createChart(type, chartData) {
        switch (type) {
            case 'bar':
                return <Bar data={chartData} />;
            case 'pie':
                return <Pie data={chartData} />;
            // Altres tipus de gràfics aquí...
            default:
                return null;
        }
    }
}

export default ChartFactory;
