import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questionnaire from '../components/feature/Questionnaire';

function Geography() {
  const category = 'Geography'; // Assignem la categoria 'Geography'
  
  return (
    <Container fluid>
      <Row>
        <Col className='px-0'>
          <Questionnaire category={category} title={'Geography'} />
        </Col>
      </Row>
    </Container>
  );
}

export default Geography;
