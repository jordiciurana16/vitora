import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import BarChart from '../../utils/charts/BarChart';
import PieChart from '../../utils/charts/PieChart';
import LineChart from '../../utils/charts/LineChart';
import DoughnutChart from '../../utils/charts/DoughnutChart';
import RadarChart from '../../utils/charts/RadarChart';
import BubbleChart from '../../utils/charts/BubbleChart';
import UserData from '../../utils/charts/Data.json';
import chartOptions from '../../utils/charts/ChartOptions';

function DataSection() {
    const data = [
        { id: 1, card: 'Card 1', title: 'Title 1', description: 'Description of Event 1', type: 'bar' },
        { id: 2, card: 'Card 2', title: 'Title 2', description: 'Description of Event 2', type: 'radar' },
        { id: 3, card: 'Card 3', title: 'Title 3', description: 'Description of Event 3', type: 'line' },
        { id: 4, card: 'Card 4', title: 'Title 4', description: 'Description of Event 4', type: 'doughnut' },
        { id: 5, card: 'Card 5', title: 'Title 5', description: 'Description of Event 5', type: 'pie' },
        { id: 6, card: 'Card 6', title: 'Title 6', description: 'Description of Event 6', type: 'bubble' },
    ];

    return (
        <div className='bg-data p-0 py-4'>
            <div className='ps-3'>
                <h2>Statistics</h2>
                <h6>Browse your data statistics</h6>
            </div>

            <div className='d-flex dataSection'>
                {data.map((event) => (
                    <Col xs={5} key={event.id} className='ps-3 pe-3'>
                        <Card className='shadow-sm'>
                            <Card.Header>{event.card}</Card.Header>
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>
                                    {event.description}
                                </Card.Text>
                                <div style={{ height: '200px' }}>
                                    {renderChart(event.type)}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
        </div>
    );

    function renderChart(chartType) {
        switch (chartType) {
            case 'bar':
                return <BarChart chartData={getChartData()}  options={chartOptions}/>;
            case 'pie':
                return <PieChart chartData={getChartData()}  options={chartOptions}/>;
            case 'line':
                return <LineChart chartData={getChartData()}  options={chartOptions}/>;
            case 'doughnut':
                return <DoughnutChart chartData={getChartData()}  options={chartOptions}/>;
            case 'radar':
                return <RadarChart chartData={getChartData()}  options={chartOptions}/>;
            case 'bubble':
                return <BubbleChart chartData={getChartData()}  options={chartOptions}/>;
            default:
                return null;
        }
    }

    function getChartData() {
        return {
            labels: UserData.map((data) => data.year),
            datasets: [
                {
                    label: "Users Gained",
                    data: UserData.map((data) => data.userGain),
                },
            ],
        };
    }
    
}

export default DataSection;
