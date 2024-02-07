import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questionnaire from '../components/common/Questionnaire';

function Genetic() {
  const category = 'Genetic'; // Assignem la categoria 'Genetic'
  
  return (
    <Container fluid>
      <Row>
        <Col className='px-0'>
          <Questionnaire category={category} title={'Genetic'} />
        </Col>
      </Row>
    </Container>
  );
}

export default Genetic;
