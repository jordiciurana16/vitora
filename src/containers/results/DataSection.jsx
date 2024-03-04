import React from 'react';
import DataCard from '../../components/common/DataCard';
import Carousel from 'react-bootstrap/Carousel';

function DataSection() {
    // Defineix les dades aquí
    const data = [
        { title: 'Event 1', description: 'Description of Event 1' },
        { title: 'Event 2', description: 'Description of Event 2' },
        { title: 'Event 3', description: 'Description of Event 3' },
        { title: 'Event 4', description: 'Description of Event 4' },
        { title: 'Event 5', description: 'Description of Event 5' },
        { title: 'Event 6', description: 'Description of Event 6' },
        { title: 'Event 7', description: 'Description of Event 7' },
        { title: 'Event 8', description: 'Description of Event 8' }
    ];

    return (
        <Carousel indicators={false} interval={null} prevLabel="" nextLabel=""> {/* Eliminem els indicadors i el control automàtic */}
            <Carousel.Item>
                <div className="d-flex">
                    {data.map((event, index) => (
                        <DataCard key={index} title={event.title} description={event.description} />
                    ))}
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default DataSection;
