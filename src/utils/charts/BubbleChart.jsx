// BubbleChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BubbleChart({ chartData }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            let chartInstance = new Chart(ctx, {
                type: 'bubble',
                data: {
                    datasets: [{
                        label: chartData.title,
                        data: chartData.data,
                        backgroundColor: chartData.backgroundColor,
                        borderColor: chartData.borderColor,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            return () => {
                chartInstance.destroy(); // Destruïm el gràfic quan el component es desmonti
            };
        }
    }, [chartData]);

    return <canvas ref={chartRef} id={`chart-${chartData.id}`} width="400" height="200"></canvas>;
}

export default BubbleChart;
