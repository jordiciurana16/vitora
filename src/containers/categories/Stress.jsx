import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questionnaire from '../../components/common/Questionnaire';

function Stress() {
  const factor = 'Stress'; // Assignem la categoria 'Genetic'
  
  return (
    <Container fluid>
      <Row>
        <Col  className='ps-3 pe-0 pt-3'>
          <Questionnaire factor={factor} title={'Stress'} />
        </Col>
      </Row>
    </Container>
  );
}

export default Stress;
