import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineChart({ chartData }) {
    const chartRef = useRef(null);

    // Funció per configurar el gràfic
    const createChartConfig = (data) => ({
        type: data.type || 'line', // Tipus de gràfic per defecte
        data: {
            labels: data.labels || [],
            datasets: [{
                label: data.title || '',
                data: data.data || [],
                backgroundColor: data.backgroundColor || 'rgba(75, 192, 192, 0.2)',
                borderColor: data.borderColor || 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: true,
                tension: 0.4 // Suavitzar les línies
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: data.title || '',
                    font: {
                        size: 18
                    }
                }
            },
            ...data.options // Sobrescriu les opcions per defecte amb les opcions proporcionades
        }
    });

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            // Crear el gràfic amb la configuració generada
            const chartInstance = new Chart(ctx, createChartConfig(chartData));

            // Destruir el gràfic quan el component es desmunta o es re-renderitza amb dades noves
            return () => {
                chartInstance.destroy();
            };
        }
    }, [chartData]);

    return <canvas ref={chartRef} id={`chart-${chartData.id}`} style={{ width: '100%', height: '400px' }}></canvas>;
}

export default LineChart;
