import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Factor({ onSubmitSuccess, onBack }) {
  const handleNextClick = () => {
    onSubmitSuccess();
  };

  return (
    <Container fluid className='d-flex flex-column align-items-center' style={{ minHeight: '50vh', maxHeight:'50vh' }}>
      <Row className="justify-content-center w-100 mt-5 "style={{ minHeight: '40vh' }}>
        <Col xs={12} md={10} lg={8} xl={6}>
        <Card className=" shadow-sm">
              <Card.Header><h2 style={{ fontSize: '1.5rem' }}>Browse the factors sidebar to modify the timeline </h2></Card.Header>
              <Card.Body className='px-3'>
              <p style={{ fontSize: '1.1rem' }}>Each factor contains a form with variables related to it. </p>
              <p style={{ fontSize: '1.1rem' }}>The more questions you answer, the more accurate the approximation of your life expectancy will be</p>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={10} lg={8} xl={6}>
          <div className="d-flex justify-content-between ">
            <Button variant="secondary" size="lg" onClick={onBack} style={{ fontSize: '1.25rem' }}>Back</Button>
            <Button variant="primary" size="lg" onClick={handleNextClick} style={{ fontSize: '1.25rem' }}>Next</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Factor;
