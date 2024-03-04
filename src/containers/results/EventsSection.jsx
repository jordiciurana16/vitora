import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

function EventsSection() {
    return (
        <Row className="mt-4 ">
            <Col >
            <Card className='shadow-sm'>
            <Card.Header>Events</Card.Header>
            <Card.Body>
                <Card.Title>Discover the most significant events of your life</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button type="submit">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    )
}
export default EventsSection;