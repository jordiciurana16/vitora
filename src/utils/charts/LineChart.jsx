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
                    datasets: [{
                        label: chartData.title,
                        data: chartData.data,
                        backgroundColor: chartData.backgroundColor,
                        borderColor: chartData.borderColor,
                        borderWidth: 1
                    },
                    // Afegim el nou conjunt de dades
                    {
                        label: 'New Population Increment',
                        data: [125000, 130000, 135000, 140000, 145000], // Dades inventades per a l'increment de població
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
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
