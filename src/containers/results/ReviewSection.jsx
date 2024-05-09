import React, { useState } from 'react';
import { Row, Col, Card, Carousel, Button } from 'react-bootstrap';

function ResultsReview() {
    const [hoveredItem, setHoveredItem] = useState(1);
    const [dynamicContent, setDynamicContent] = useState({}); // Contingut dinàmic inicial

    const carouselData = [
        {
            id: 1,
            title: "Athlete",
            text: "You are the epitome of fitness, with a burning passion for pushing your body to its limits and achieving new heights of strength and endurance.",
            imageUrl: "https://i.ibb.co/5c7HdCb/Artboard-3-copy-100.jpg"
        },
        {
            id: 2,
            title: "Rested",
            text: "You stand out as someone who understands the power of slowing down and embracing stillness knowing that true rest isn't a luxury, it's a need.",
            imageUrl: "https://i.ibb.co/vY6QWRs/Artboard-3-100.jpg"
        },
        {
            id: 3,
            title: "Unhealthy",
            text: "You find yourself trapped in unhealthy eating habits, consuming limited variety of foods and high-calorie meals without consideration for your overall health.",
            imageUrl: "https://i.ibb.co/5R4nR9f/Artboard-3-copy-2-100.jpg"
        }
    ];

    const progressBarData = [
        {
            id: 1,
            title: "Job",
            date: "2025-06-15",
            imageUrl: "https://i.ibb.co/nCdDSsz/Artboard-work-100.jpg",
            description: "A new job opportunity arises! It's time to impress with your skills and expertise.",
            link: "#"
        },
        {
            id: 2,
            title: "Marriage",
            date: "2026-09-20",
            imageUrl: "https://i.ibb.co/Ct0QCVB/Artboard-1-100.jpg",
            description: "Love is in the air! Prepare for a beautiful journey together with your partner.",
            link: "#"
        },
        {
            id: 3,
            title: "Offspring",
            date: "2027-12-25",
            imageUrl: "https://i.ibb.co/CzwznrL/father-work-100.jpg",
            description: "Congratulations! You're expecting a new member in the family. Get ready for sleepless nights and joyful moments.",
            link: "#"
        },
        {
            id: 4,
            title: "Housing",
            date: "2028-03-10",
            imageUrl: "https://i.ibb.co/5c7HdCb/Artboard-3-copy-100.jpg",
            description: "It's time to find your dream home. Get ready for house hunting and making important decisions.",
            link: "#"
        },
        {
            id: 5,
            title: "Retirement",
            date: "2045-01-01",
            imageUrl: "https://i.ibb.co/5c7HdCb/Artboard-3-copy-100.jpg",
            description: "Congratulations on your retirement! It's time to relax, travel, and enjoy the fruits of your labor.",
            link: "#"
        },
        {
            id: 6,
            title: "Illness",
            date: "2030-08-03",
            imageUrl: "https://i.ibb.co/5c7HdCb/Artboard-3-copy-100.jpg",
            description: "Unfortunately, you've fallen ill. Take care of yourself and focus on recovery.",
            link: "#"
        },
        {
            id: 7,
            title: "Death",
            date: "2040-05-15",
            imageUrl: "https://i.ibb.co/5c7HdCb/Artboard-3-copy-100.jpg",
            description: "A sad event occurs. Remember to cherish the memories and celebrate the life of your loved one.",
            link: "#"
        }
    ];
    
    const generateContent = (title) => {
        return progressBarData.find(item => item.title === title) || {}; // Busquem el contingut pel títol de l'esdeveniment
    };

    return (
        <Row className="mx-3 my-4">
            <Col className='ps-2 pe-0'  xs={4}>
                <Card className='h-100 shadow-sm'>
                    <Card.Header className='mb-3'>
                        Profile
                    </Card.Header>
                    <Carousel className='h-100' controls={false} indicators={true}>
                        {carouselData.map(item => (
                            <Carousel.Item key={item.id} className='px-2'>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={item.imageUrl} alt="Profile" style={{ width: '100px' }} />
                                </div>
                                <Card.Body className='pt-0 mt-0 '>
                                    <h5 className=' pb-1'>{item.title}</h5>
                                    <Card.Text className='pt-0 mt-0'>{item.text}</Card.Text>
                                    <Button className='mt-0' type='submit'>Learn more</Button>
                                </Card.Body>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Card>
            </Col>
            <Col className='ps-4 pe-2' xs={8}>
                <Card className=" shadow-sm">
                    <Card.Header>Events</Card.Header>
                    <Row className='ps-5 pe-5 pb-4 pt-4'>
                    <Col xs={6} className="d-flex flex-column ps-0 pe-0">
                        {progressBarData.map((bar, index) => (
                            <div
                                key={index}
                                className={`p-2 ${hoveredItem === index + 1 ? 'leftCardHover' : ''}`}
                                onMouseEnter={() => {
                                    setHoveredItem(index + 1);
                                    const content = generateContent(bar.title); // Generem el contingut
                                    setDynamicContent(content); // Actualitzem el contingut dinàmic amb el contingut generat
                                }}
                                onMouseLeave={() => {
                                    // No cal fer res aquí
                                }}
                            >
                                <Row className="align-items-center d-flex justify-content-between">
                                    <Col>
                                    <h6>{bar.title}</h6>
                                    </Col>
                                    <Col>
                                    <span className="text-muted">{bar.date}</span>
                                    </Col>
                                </Row>
                            </div>
                        ))}

                        </Col>
                        <Col xs={6} className='rightCardHover'>
                            {dynamicContent.imageUrl && (
                                <img src={dynamicContent.imageUrl} alt={dynamicContent.title} style={{ width: '100px' }}/>
                            )}
                            <p>{dynamicContent.description}</p>
                            {dynamicContent.link && (
                                <Button href={dynamicContent.link} target="_blank" rel="noopener noreferrer">Learn more</Button>
                            )}
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default ResultsReview;
