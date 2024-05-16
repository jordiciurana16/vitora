// src/pages/ResultsReview.jsx
import React, { useState } from 'react';
import { Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { useGlobalContext } from '../../hooks/GlobalContext';

function ResultsReview() {
  const { hoveredItem, setHoveredItem } = useGlobalContext();
  const [dynamicContent, setDynamicContent] = useState({});

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
      date: "15/06/2025",
      imageUrl: "https://i.ibb.co/5hT7wqx/jobwork.webp",
      description: "A new job opportunity arises! It's time to impress with your skills and expertise.",
      link: "#"
    },
    {
      id: 2,
      title: "Marriage",
      date: "20/09/2026",
      imageUrl: "https://i.ibb.co/XtLqMBC/marriage.webp",
      description: "Love is in the air! Prepare for a beautiful journey together with your partner.",
      link: "#"
    },
    {
      id: 3,
      title: "Offspring",
      date: "25/12/2027",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "Congratulations! You're expecting a new member in the family. Get ready for joyful moments.",
      link: "#"
    },
    {
      id: 4,
      title: "Housing",
      date: "10/03/2028",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "It's time to find your dream home. Get ready for house hunting and making important decisions.",
      link: "#"
    },
    {
      id: 5,
      title: "Retirement",
      date: "10/03/2029",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "Congratulations on your retirement! It's time to relax, travel, and enjoy the fruits of your labor.",
      link: "#"
    },
    {
      id: 6,
      title: "Illness",
      date: "03/08/2030",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "Unfortunately, you've fallen ill. Take care of yourself and focus on recovery.",
      link: "#"
    },
    {
      id: 7,
      title: "Death",
      date: "15/05/2040",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "A sad event occurs. Remember to cherish the memories and celebrate the life of your loved one.",
      link: "#"
    }
  ];

  const generateContent = (title) => {
    return progressBarData.find(item => item.title === title) || {};
  };

  return (
    <>
      <Row className="mx-3 my-4">
        <Col className='ps-2 pe-0' xs={4}>
          <Card className='h-100 shadow-sm'>
            <Card.Header className='mb-3 profile-header'>
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
          <Card className="shadow-sm">
            <Card.Header className='events-header'>Events</Card.Header>
            <Row className='ps-5 pe-5 pb-4 pt-4'>
              <Col xs={6} className="d-flex flex-column ps-0 pe-0 me-0">
                {progressBarData.map((bar, index) => (
                  <div
                    key={index}
                    className={`ps-2 pt-2 pb-2 pe-0 me-0 ${hoveredItem === index + 1 ? 'leftCardHover' : ''}`}
                    onMouseEnter={() => {
                      setHoveredItem(index + 1);
                      const content = generateContent(bar.title);
                      setDynamicContent(content);
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
              <Col xs={6} className='rightCardHover p-3 m-0'>
                <Row className="d-flex align-items-center">
                  <div className="col">
                    <h6>{dynamicContent.title}</h6>
                  </div>
                  <div className="col-auto">
                    <span className="text-muted">{dynamicContent.date}</span>
                  </div>
                </Row>
                {dynamicContent.imageUrl && (
                  <div className="d-flex justify-content-center">
                    <img src={dynamicContent.imageUrl} alt={dynamicContent.title} style={{ width: '125px' }} />
                  </div>
                )}
                <p>{dynamicContent.description}</p>
                {dynamicContent.link && (
                  <a href={dynamicContent.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    See why <BsBoxArrowInUpRight />
                  </a>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ResultsReview;
