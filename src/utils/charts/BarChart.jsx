// BarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import chartOptions from './ChartOptions'; // Importa les opcions d'estil

function BarChart({ chartData }) {
    const centeredOptions = {
        ...chartOptions,
        plugins: {
            ...chartOptions.plugins,
            legend: {
                ...chartOptions.plugins.legend,
                align: 'start', // Posiciona la llegenda a l'esquerra

            },
        },
        layout: {
            padding: {
                left: 25, // Augmenta el padding a l'esquerra per a la llegenda
                right: 25,
                top: 0,
                bottom: 0,
            },
        },
    };

    return (
        <div className="text-center"> {/* Div per centrar el gràfic */}
            <Bar
                data={chartData}
                options={centeredOptions} // Utilitza les opcions modificades
            />
        </div>
    );
}

export default BarChart;
