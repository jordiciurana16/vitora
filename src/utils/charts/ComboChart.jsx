import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ComboChart({ chartData }) {
    const chartRef = useRef(null);

    const createChartConfig = (data) => ({
        type: 'bar',
        data: {
            labels: data.labels || [],
            datasets: [
                {
                    type: 'bar',
                    label: data.barLabel || 'Bar Dataset',
                    data: data.barData || [],
                    backgroundColor: data.barBackgroundColor || 'rgba(75, 192, 192, 0.2)',
                    borderColor: data.barBorderColor || 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    yAxisID: 'y-temperature'
                },
                {
                    type: 'line',
                    label: data.lineLabel || 'Line Dataset',
                    data: data.lineData || [],
                    backgroundColor: data.lineBackgroundColor || 'rgba(255, 99, 132, 0.2)',
                    borderColor: data.lineBorderColor || 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false,
                    yAxisID: 'y-precipitation'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                },
                'y-temperature': {
                    type: 'linear',
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Temperature (°C)',
                        font: {
                            size: 14
                        }
                    },
                    ticks: {
                        callback: function(value) {
                            return `${value}°C`;
                        }
                    }
                },
                'y-precipitation': {
                    type: 'linear',
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Precipitation (mm)',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Eliminar la llegenda
                },
                title: {
                    display: true,
                    text: data.title || '',
                    font: {
                        size: 18
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

export default ComboChart;
