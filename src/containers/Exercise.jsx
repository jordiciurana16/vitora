import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questionnaire from '../components/feature/Questionnaire';

function Exercise() {
  const exerciseQuestions = [
    {
      type: 'radio',
      text: 'How many days a week do you engage in physical activity?',
      options: ['None', '1-2 days', '3-4 days', '5-6 days', 'Every day']
    },
    {
      type: 'checkbox',
      text: 'What type of exercises do you usually do?',
      options: ['Cardiovascular', 'Strength training', 'Flexibility exercises', 'Sports']
    },
    {
      type: 'select',
      text: 'How long is your typical exercise session?',
      options: ['Less than 30 minutes', '30-60 minutes', 'More than 60 minutes']
    },
    {
      type: 'text',
      text: 'What is your preferred time for exercise?',
      placeholder: 'Enter your preferred time'
    }
  ];

  return (
    <Container fluid>
      <Row>
        <Col className='px-0'>
          <Questionnaire questions={exerciseQuestions} title={'Exercise'} />
        </Col>
      </Row>
    </Container>
  );
}

export default Exercise;
