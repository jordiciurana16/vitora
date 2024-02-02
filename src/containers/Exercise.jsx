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
      type: 'checkbox',
      text: 'What motivates you to exercise regularly?',
      options: ['Health benefits', 'Stress relief', 'Weight management', 'Social interaction']
    },
    {
      type: 'checkbox',
      text: 'How long is your typical exercise session?',
      options: ['Less than 30 minutes', '30-60 minutes', 'More than 60 minutes']
    },
    {
      type: 'select',
      text: 'On average, how intense are your workouts?',
      options: ['Low intensity (e.g., leisurely walking)', ' Moderate intensity (e.g., brisk walking, light jogging)', ' High intensity (e.g., sprinting, high-intensity interval training)']
    },
    {
      type: 'checkbox',
      text: 'Are there any barriers that hinder your regular exercise?',
      options: ['Lack of time', 'Lack of motivation', ' Lack of access to facilities', 'Physical limitations']
    },
    {
      type: 'checkbox',
      text: 'Do you incorporate exercise into your daily routine (e.g., walking instead of driving, taking stairs instead of elevator)?',
      options: ['Never', 'Rarely', 'Occasionally','Yes, frequently']
    },
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
