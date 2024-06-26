import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Timeline = ({ lifespan, percentage, onSubmitSuccess, onBack }) => {
  const handleNextClick = () => {
    onSubmitSuccess();
  };
  

  return (
    <Container fluid className='d-flex flex-column align-items-center ' style={{ minHeight: '50vh', maxHeight:'50vh' }}>
      <Row className="justify-content-center w-100 mt-5" style={{ minHeight: '40vh' }}>
        <Col xs={12} md={10} lg={8} xl={6}>
        <Card className="px-2 shadow-sm">
        <Card.Body>
              <h2  style={{ fontSize: '1.5rem' }}>The progress bar represents your life timeline</h2>
              <p style={{ fontSize: '1.1rem' }}>Right now your lifespan is <strong>{lifespan}</strong> years old. But don't rush! This is just the mundial life expectancy.  </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={10} lg={8} xl={6}>
          <div className="d-flex justify-content-between">
            <Button variant="secondary" size="lg" onClick={onBack} style={{ fontSize: '1.25rem' }}>Back</Button>
            <Button variant="primary" size="lg" onClick={handleNextClick} style={{ fontSize: '1.25rem' }}>Next</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Timeline;
