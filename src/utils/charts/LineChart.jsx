// LineChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineChart({ chartData }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            let chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: chartData.labels,
                    datasets: chartData.data.map(dataset => ({ // Utilitzem map per crear un dataset per cada país
                        label: dataset.country, // Etiqueta del dataset serà el nom del país
                        data: dataset.data,
                        backgroundColor: chartData.backgroundColor[0], // Utilitzem el mateix color per a totes les línies
                        borderColor: chartData.borderColor[0],
                        borderWidth: 1
                    }))
                },
                options: chartData.options || {
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

export default LineChart;
