import React, { useState } from 'react';
import { Container, Row, Col, Badge, Form } from 'react-bootstrap';

function Questionnaire({ title, questions }) {
  const [updatedQuestions, setUpdatedQuestions] = useState(questions);

  const handleChange = (event, index) => {
    const { value } = event.target;

    // Actualitza el camp boolean en l'objecte question
    const newQuestions = updatedQuestions.map((question, i) => {
      if (i === index) {
        const isFemale = value === 'Female';
        return { ...question, boolean: isFemale };
      }
      return question;
    });

    // Actualitza l'estat amb les noves preguntes actualitzades
    setUpdatedQuestions(newQuestions);
  };

  return (
    <Container>
      <Row>
        <h2 className='pb-4'>{title}</h2>
        <Form>
          {updatedQuestions.map((question, index) => (
            <Row key={index}>
              <Col xs={1}><h6>{index + 1}.</h6></Col>
              <Col xs={11}>
                <Row className='mb-3'>
                  <Col xs={10}><h6>{question.text}</h6></Col>
                  <Col xs={1}>
                    <Badge bg={question.boolean ? 'success' : 'danger'}>
                      {question.boolean ? '+ 0.28%' : '- 0.28%'}
                    </Badge>
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col xs={5}>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <Form.Check
                          type={question.type}
                          name={`question-${index}`}
                          label={option}
                          value={option}
                          onChange={(event) => handleChange(event, index)}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Form>
      </Row>
    </Container>
  );
}

export default Questionnaire;
