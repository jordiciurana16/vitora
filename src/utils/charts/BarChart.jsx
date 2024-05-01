// BarChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart({ chartData }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            let chartInstance = new Chart(ctx, {
                type: chartData.type, // Utilitza el tipus de gràfic definit a les dades
                data: {
                    labels: chartData.labels,
                    datasets: [{
                        label: chartData.title,
                        data: chartData.data,
                        backgroundColor: chartData.backgroundColor,
                        borderColor: chartData.borderColor,
                        borderWidth: 1
                    }]
                },
                options: chartData.options || {
                    indexAxis: chartData.indexAxis || 'x', // Afegeix la opció de l'eix d'index si està definit
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            return () => {
                chartInstance.destroy();
            };
        }
    }, [chartData]);

    return <canvas ref={chartRef} id={`chart-${chartData.id}`} width="400" height="200"></canvas>;
}

export default BarChart;
