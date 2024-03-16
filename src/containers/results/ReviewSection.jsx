import React, { useState } from 'react';
import { Row, Col, Card, Carousel, ProgressBar, Button } from 'react-bootstrap';
import { BsArrowsFullscreen } from "react-icons/bs";

function ResultsReview() {
    const [hoveredItem, setHoveredItem] = useState(1);
    const carouselData = [
        {
            id: 1,
            title: "Lorem",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ornare enim, ac ullamcorper ex dapibus a."
        },
        {
            id: 2,
            title: "Lorem",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ornare enim, ac ullamcorper ex dapibus a. "
        },
        {
            id: 3,
            title: "Lorem",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ornare enim, ac ullamcorper ex dapibus a."
        }
    ];
    const progressBarData = [
        {
          name: "Lorem",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ornare enim, ac ullamcorper ex dapibus a. Nullam feugiat orci in sapien iaculis convallis. Proin pulvinar venenatis justo, eu aliquet ante commodo sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ornare ligula tortor, id venenatis elit imperdiet non.",
          percentage: 15 // Exemple de percentatge
        },
        {
          name: "Lorem",
          content: "Curabitur cursus eleifend ligula vel lobortis. Nulla lacinia, est in tempus facilisis, lorem sapien sagittis elit, laoreet luctus augue magna at sapien. Mauris faucibus, leo eget blandit tempor, lacus quam pulvinar dui, eu pharetra est tellus pellentesque ante. Curabitur feugiat luctus tempor. Sed gravida gravida velit sed viverra. ",
          percentage: 25 // Exemple de percentatge
        },
        {
          name: "Lorem",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ornare enim, ac ullamcorper ex dapibus a. Nullam feugiat orci in sapien iaculis convallis. Proin pulvinar venenatis justo, eu aliquet ante commodo sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ornare ligula tortor, id venenatis elit imperdiet non.",
          percentage: 50 // Exemple de percentatge
        },
        {
          name: "Lorem",
          content: "Curabitur cursus eleifend ligula vel lobortis. Nulla lacinia, est in tempus facilisis, lorem sapien sagittis elit, laoreet luctus augue magna at sapien. Mauris faucibus, leo eget blandit tempor, lacus quam pulvinar dui, eu pharetra est tellus pellentesque ante. Curabitur feugiat luctus tempor. Sed gravida gravida velit sed viverra. ",
          percentage: 10 // Exemple de percentatge
        },
        {
            name: "Lorem",
            content: "Curabitur cursus eleifend ligula vel lobortis. Nulla lacinia, est in tempus facilisis, lorem sapien sagittis elit, laoreet luctus augue magna at sapien. Mauris faucibus, leo eget blandit tempor, lacus quam pulvinar dui, eu pharetra est tellus pellentesque ante. Curabitur feugiat luctus tempor. Sed gravida gravida velit sed viverra. ",
            percentage: 50 // Exemple de percentatge
          },
          {
            name: "Lorem",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ornare enim, ac ullamcorper ex dapibus a. Nullam feugiat orci in sapien iaculis convallis. Proin pulvinar venenatis justo, eu aliquet ante commodo sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ornare ligula tortor, id venenatis elit imperdiet non.",
            percentage: 10 // Exemple de percentatge
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
                    <Card.Header>Probability</Card.Header>
                    <Row className='ps-5 pe-5 pb-4 pt-4'>
                        <Col xs={7} className="d-flex flex-column ps-0 pe-0">
                            {progressBarData.map((bar, index) => (
                                <div
                                    key={index}
                                    className={`d-flex align-items-center p-3 ${hoveredItem === index + 1 ? 'leftCardHover' : ''}`}
                                    onMouseEnter={() => {
                                        setHoveredItem(index + 1);
                                        setDynamicContent(bar.content); // Actualitza el contingut dinàmic amb el contingut del JSON
                                    }}
                                    onMouseLeave={() => {
                                        // No cal fer res aquí
                                    }}
                                >
                                    <span>{bar.name}</span>
                                    <ProgressBar now={bar.percentage} label={`${bar.percentage}%`} className="flex-grow-1 ms-3" />
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
