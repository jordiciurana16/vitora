import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Forms({ onSubmitSuccess, onBack }) {
  const handleNextClick = () => {
    onSubmitSuccess();
  };

  return (
    <Container fluid className='d-flex flex-column align-items-center ' style={{ minHeight: '50vh', maxHeight:'50vh' }}>
      <Row className="justify-content-center w-100 mt-5" style={{ minHeight: '40vh' }}>
        <Col xs={12} md={10} lg={8} xl={6}>
        <Card className=" shadow-sm">
              <Card.Header><h2 style={{ fontSize: '1.5rem' }}>Insert your data in the forms </h2></Card.Header>
              <Card.Body className='px-3'>
              <p style={{ fontSize: '1.1rem' }}>The more accurate are your responses, the more accurate the timeline will be.</p>
              <p style={{ fontSize: '1.1rem' }}>The entered data is not commercialized, and after the calculation is done, it si deleted forever</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={10} lg={8} xl={6}>
          <div className="d-flex justify-content-between">
            <Button variant="secondary" size="lg"  type="submit" onClick={onBack} style={{ fontSize: '1.25rem' }}>Back</Button>
            <Button variant="primary" size="lg"  type="submit" onClick={handleNextClick} style={{ fontSize: '1.25rem' }}>Next</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Forms;
