import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Forms({ onSubmitSuccess, onBack }) {
  const handleNextClick = () => {
    onSubmitSuccess();
  };

  return (
    <Container fluid className='d-flex flex-column align-items-center pt-5' style={{ minHeight: '50vh', maxHeight:'50vh' }}>
      <Row className="justify-content-center w-100 mt-5" style={{ minHeight: '40vh' }}>
        <Col xs={12} md={10} lg={8} xl={6}>
        <Card className="px-2 shadow-sm">
        <Card.Body>
              <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Next Step: Complete the Forms</h2>
              <p style={{ fontSize: '1.25rem' }}>Here you will find instructions for the next step...</p>
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

export default Forms;
