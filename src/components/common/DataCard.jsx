import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Defineix les dades aquí

function DataCard({ title, description }) {
    return (
        <Card className='shadow-sm'>
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button type="submit">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default DataCard;