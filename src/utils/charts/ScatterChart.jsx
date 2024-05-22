import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ScatterChart({ chartData }) {
    const chartRef = useRef(null);

    const createChartConfig = (data) => ({
        type: 'scatter',
        data: {
            datasets: [{
                label: data.title || '',
                data: data.data || [],
                backgroundColor: data.backgroundColor || 'rgba(75, 192, 192, 0.2)',
                borderColor: data.borderColor || 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                },
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false // Disable legend
                },
                title: {
                    display: true,
                    text: data.title || '',
                    font: {
                        size: 18 // Set title size to 18
                    }
                }
            }
        }
    });

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const chartInstance = new Chart(ctx, createChartConfig(chartData));
            return () => {
                chartInstance.destroy();
            };
        }
    }, [chartData]);

    return <canvas ref={chartRef} id={`chart-${chartData.id}`} style={{ width: '100%', height: '400px' }}></canvas>;
}

export default ScatterChart;
