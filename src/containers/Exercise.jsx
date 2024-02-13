import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questionnaire from '../components/feature/Questionnaire';

function Exercise() {
  const category = 'Exercise'; // Assignem la categoria 'Exercise'
  
  return (
    <Container fluid>
      <Row>
        <Col className='px-0'>
          <Questionnaire category={category} title={'Exercise'} />
        </Col>
      </Row>
    </Container>
  );
}

export default Exercise;
