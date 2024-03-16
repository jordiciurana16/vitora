import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questionnaire from '../../components/common/Questionnaire';

function Genetic() {
  const category = 'Genetic'; // Assignem la categoria 'Genetic'
  
  return (
    <Container fluid>
      <Row>
        <Col  className='ps-3 pe-0 pt-3'>
          <Questionnaire category={category} title={'Genetic'} />
        </Col>
      </Row>
    </Container>
  );
}

export default Genetic;
