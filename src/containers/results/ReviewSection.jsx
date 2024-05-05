import React, { useState } from 'react';
import { Row, Col, Card, Carousel, ProgressBar, Button } from 'react-bootstrap';
import { BsArrowsFullscreen } from "react-icons/bs";

function ResultsReview() {
    const [hoveredItem, setHoveredItem] = useState(1);
    const carouselData = [
        {
            id: 1,
            title: "Athlete",
            text: "You are the epitome of fitness, with a burning passion for pushing your body to its limits and achieving new heights of strength and endurance."
        },
        {
            id: 2,
            title: "Rested",
            text: "You stand out as someone who understands the power of slowing down and embracing stillness knowing that true rest isn't a luxury, it's a need."
        },
        {
            id: 3,
            title: "Unhealthy",
            text: "You find yourself trapped in unhealthy eating habits, consuming limited variety of foods and high-calorie meals without consideration for your overall health."
        }        
    ];
    const progressBarData = [
        {
            id: 1,
            title: "Death",
            start: "Premature",
            end: "Natural",
            percentage: 76
        },
        {
            id: 2,
            title: "Status",
            start: "Single",
            end: "Married",
            percentage: 45
        },
        {
            id: 3,
            title: "Housing",
            start: "Rent",
            end: "Property",
            percentage: 50
        },
        {
            id: 4,
            title: "Estat Civil",
            start: "Solter",
            end: "Casat",
            percentage: 50
        },
        {
            id: 5,
            title: "Estat Civil",
            start: "Solter",
            end: "Casat",
            percentage: 50
        }
    ];
    
    const [dynamicContent, setDynamicContent] = useState(progressBarData[0].content); // Estableix el contingut dinàmic com el contingut de la primera progress bar
      

    return (
        <Row className="mx-3 my-4">
            <Col className='px-0'  xs={4}>
                <Card className='h-100 shadow-sm'>
                    <Card.Header className='mb-5'>
                        Profile
                    </Card.Header>
                    <Carousel className='h-100' controls={false} indicators={true}>
                        {carouselData.map(item => (
                            <Carousel.Item key={item.id} className='px-2'>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <BsArrowsFullscreen size={40} />
                                </div>
                                <Card.Body>
                                    <h5 className='pb-2'>{item.title}</h5>
                                    <Card.Text className='pb-4'>{item.text}</Card.Text>
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
                                    <Row className="align-items-center"><h6 className='d-flex justify-content-center'>{bar.title}</h6></Row>
                                    <Row className="align-items-center">
                                    <Col xs={2} className="d-flex justify-content-end">
                                            <div>
                                                <span>{bar.start}</span>
                                            </div>
                                        </Col>
                                        <Col xs={8} className='p-0' >
                                            <ProgressBar now={bar.percentage} label={`${bar.percentage}%`} />
                                        </Col>
                                        <Col xs={2} className="d-flex justify-content-end">
                                            <div>
                                                <span>{bar.end}</span>
                                            </div>
                                        </Col>
                                    </Row>
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
