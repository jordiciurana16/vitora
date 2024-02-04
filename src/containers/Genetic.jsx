import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questionnaire from '../components/feature/Questionnaire';

function Genetic() {
  const geneticQuestions = [
    {
      type: 'radio',
      text: 'What is you biological sex?',
      options: ['Female', 'Male'],
      boolean: true,
    }
  ];

  return (
    <Container fluid>
      <Row>
        <Col className='px-0'>
          <Questionnaire questions={geneticQuestions} title={'Genetic'} />
        </Col>
      </Row>
    </Container>
  );
}

export default Genetic;
