import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import BarChart from '../../utils/charts/BarChart';
import PieChart from '../../utils/charts/PieChart';
import { UserData } from '../../utils/charts/Data';

function DataSection() {
    const data = [
        { card: 'Card 1', title: 'Title 1', description: 'Description of Event 1', type: 'bar' },
        { card: 'Card 2', title: 'Title 2', description: 'Description of Event 2', type: 'pie' },
        { card: 'Card 3', title: 'Title 3', description: 'Description of Event 3', type: 'bar' },
        { card: 'Card 4', title: 'Title 4', description: 'Description of Event 4', type: 'pie' },
        { card: 'Card 5', title: 'Title 5', description: 'Description of Event 5', type: 'bar' },
        { card: 'Card 6', title: 'Title 6', description: 'Description of Event 6', type: 'pie' },
        { card: 'Card 7', title: 'Title 7', description: 'Description of Event 7', type: 'bar' },
        { card: 'Card 8', title: 'Title 8', description: 'Description of Event 8', type: 'pie' },
    ];

    return (
        <div className='bg-data p-0 py-4'>
            <div className='ps-3'>
                <h2>Statistics</h2>
                <h6>Browse your data statistics</h6>
            </div>

            <div className='d-flex dataSection'>
                {data.map((event, index) => (
                    <Col xs={5} key={index} className='ps-3 pe-3'>
                        <Card className='shadow-sm'>
                            <Card.Header>{event.card}</Card.Header>
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>
                                    {event.description}
                                </Card.Text>
                                <div style={{ height: '200px' }}>
                                    {event.type === 'bar' ? (
                                        <BarChart chartData={getChartData()} />
                                    ) : (
                                        <PieChart chartData={getChartData()} />
                                    )}
                                </div>
                                <Button type="submit">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </div>
        </div>
    );

    // Funció per obtenir les dades dels gràfics sense repetició de codi
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
