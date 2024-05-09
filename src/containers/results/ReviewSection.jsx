import React, { useState } from 'react';
import { Row, Col, Card, Carousel, ProgressBar, Button } from 'react-bootstrap';
import { BsArrowsFullscreen } from "react-icons/bs";

function ResultsReview() {
    const [hoveredItem, setHoveredItem] = useState(1);
    const carouselData = [
        {
            id: 1,
            title: "Athlete",
            text: "You are the epitome of fitness, with a burning passion for pushing your body to its limits and achieving new heights of strength and endurance.",
            imageUrl: "https://i.ibb.co/5c7HdCb/Artboard-3-copy-100.jpg" // Nou camp per al URL de la imatge
        },
        {
            id: 2,
            title: "Rested",
            text: "You stand out as someone who understands the power of slowing down and embracing stillness knowing that true rest isn't a luxury, it's a need.",
            imageUrl: "https://i.ibb.co/vY6QWRs/Artboard-3-100.jpg" // Nou camp per al URL de la imatge
        },
        {
            id: 3,
            title: "Unhealthy",
            text: "You find yourself trapped in unhealthy eating habits, consuming limited variety of foods and high-calorie meals without consideration for your overall health.",
            imageUrl: "https://i.ibb.co/5R4nR9f/Artboard-3-copy-2-100.jpg" // Nou camp per al URL de la imatge
        }
    ];
    const progressBarData = [
        {
            id: 1,
            title: "Marriage",
        },
        {
            id: 2,
            title: "Offspring",
        },
        {
            id: 3,
            title: "Housing",
        },
        {
            id: 4,
            title: "Retirement",
        },
        {
            id: 4,
            title: "Death",
        }
    ];
    
    const [dynamicContent, setDynamicContent] = useState(progressBarData[0].content); // Estableix el contingut dinàmic com el contingut de la primera progress bar
      

    return (
        <Row className="mx-3 my-4">
            <Col className='px-0'  xs={4}>
                <Card className='h-100 shadow-sm'>
                    <Card.Header className='mb-3'>
                        Profile
                    </Card.Header>
                    <Carousel className='h-100' controls={false} indicators={true}>
                        {carouselData.map(item => (
                            <Carousel.Item key={item.id} className='px-2'>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={item.imageUrl} alt="Profile" style={{ width: '100px' }} /> {/* Nou: Imatge en lloc d'ícona */}
                                </div>
                                <Card.Body>
                                    <h5 className='pb-2'>{item.title}</h5>
                                    <Card.Text className='pb-2'>{item.text}</Card.Text>
                                    <Button type='submit'>Learn more</Button>
                                </Card.Body>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Card>
            </Col>
            <Col className='pe-0' xs={8}>
                <Card className=" shadow-sm">
                    <Card.Header>Events</Card.Header>
                    <Row className='ps-5 pe-5 pb-4 pt-4'>
                    <Col xs={7} className="d-flex flex-column ps-0 pe-0">
                            {progressBarData.map((bar, index) => (
                                <div
                                    key={index}
                                    className={`p-2 ${hoveredItem === index + 1 ? 'leftCardHover' : ''}`}
                                    onMouseEnter={() => {
                                        setHoveredItem(index + 1);
                                        setDynamicContent(`Curabitur cursus eleifend ligula vel lobortis. Nulla lacinia, est in tempus facilisis, lorem sapien sagittis elit, laoreet luctus augue magna at sapien. Mauris faucibus, leo eget blandit tempor, lacus quam pulvinar dui, eu pharetra est tellus pellentesque ante. Curabitur feugiat luctus tempor. Sed gravida gravida velit sed viverra.`); // Actualitza el contingut dinàmic amb les dades start i end
                                    }}
                                    onMouseLeave={() => {
                                        // No cal fer res aquí
                                    }}
                                >
                                    <Row><h6>{bar.title}</h6></Row>
                                </div>
                            ))}
                        </Col>
                        <Col xs={5} className='rightCardHover'>
                            <p>{dynamicContent}</p>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default ResultsReview;
