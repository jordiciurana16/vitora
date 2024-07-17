import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useGlobalContext } from '../../../hooks/GlobalContext'; // Assegura't que la ruta és correcta

const Timeline = ({ onSubmitSuccess, onBack }) => {
  const { birthdate, lifespan, percentage } = useGlobalContext(); // Accedint a birthdate i altres valors del context

  const handleNextClick = () => {
    onSubmitSuccess();
  };

  return (
    <Container fluid className='d-flex flex-column align-items-center ' style={{  marginTop: '13vh', minHeight: '50vh', maxHeight:'50vh' }}>
      <Row className="justify-content-center w-100 mt-5" style={{ minHeight: '40vh' }}>
        <Col xs={12} md={10} lg={8} xl={6}>
        <Card className=" shadow-sm">
              <Card.Header><h1 style={{ fontSize: '1.5rem' }}>The progress bar represents your life timeline</h1></Card.Header>
              <Card.Body className='px-3'>
              <p style={{ fontSize: '1.1rem' }}>Considering you were born on <strong>{birthdate ? birthdate.toLocaleDateString() : 'your birthdate'}</strong>, you have lived a <strong>{percentage}%</strong> of your life because right now your lifespan is <strong>{lifespan} years</strong>.</p>
              <p style={{ fontSize: '1.1rem' }}>But don't rush! This is just the mundial life expectancy.</p>
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

export default Timeline;
