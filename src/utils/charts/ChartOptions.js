// ChartOptions.js

const chartOptions = {
    borderWidth: 1,
    backgroundColor: ['#7579e77c'], // Colors for each chart
    borderColor: ['#7579e7'],
    
    // To change label style, you can add or modify the `plugins` property
    plugins: {
        // Here, we're modifying the legend configuration to customize the label style
        legend: {
            labels: {
                usePointStyle: true,
                pointStyle: 'rectRot', // Change this to the desired point style, e.g., 'cross', 'triangle', etc.
                
            },
        },
    },
    // Add any other chart options or configurations as needed...
};

export default chartOptions;
