import React from 'react';
import { Card, Button, Row, Container, Col } from 'react-bootstrap';

function DataSection() {
    const data = [
        { title: 'Event 1', description: 'Description of Event 1' },
        { title: 'Event 2', description: 'Description of Event 2' },
        { title: 'Event 3', description: 'Description of Event 3' },
        { title: 'Event 4', description: 'Description of Event 4' },
        { title: 'Event 5', description: 'Description of Event 5' },
        { title: 'Event 6', description: 'Description of Event 6' },
        { title: 'Event 7', description: 'Description of Event 7' },
        { title: 'Event 8', description: 'Description of Event 8' },
    ];

return (
    <div className='bg-data'>
    <div className=" p-0 py-4">
        <div className='ps-3'><h2>Statistics</h2>
    <h6>Browse your data statistics</h6></div>
    
    
        <div className={`d-flex dataSection`}>
            {data.map((event, index) => (
                <Col xs={5} key={index} className='ps-3 pe-3'> {/* Utilitzem col-3 perquè cada Card ocupi 1/4 de l'ample total */}
                    <Card className='shadow-sm'>
                        <Card.Header>{event.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{event.title}</Card.Title>
                            <Card.Text>
                                {event.description}
                            </Card.Text>
                            <Button type="submit">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>

    </div>
    
        </div>
    );
}

export default DataSection;
