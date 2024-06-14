import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questionnaire from '../../components/common/Questionnaire';

function Exercise() {
  const factor = 'Exercise'; // Assignem la categoria 'Exercise'
  return (
    <Container fluid>
      <Row>
        <Col  className='ps-3 pe-0 pt-3'>
          <Questionnaire factor={factor} title={'Exercise'} />
        </Col>
      </Row>
    </Container>
  );
}

export default Exercise;
