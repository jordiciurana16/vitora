import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PolarAreaChart({ chartData }) {
    const chartRef = useRef(null);

    const createChartConfig = (data) => ({
        type: 'polarArea',
        data: {
            labels: data.labels || [],
            datasets: [{
                label: data.title || '',
                data: data.data || [],
                backgroundColor: data.backgroundColor || [],
                borderColor: data.borderColor || [],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Eliminar la llegenda
                },
                title: {
                    display: true,
                    text: data.title || '',
                    font: {
                        size: 18 // Mida del títol a 18
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

export default PolarAreaChart;
