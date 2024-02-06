import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Form } from 'react-bootstrap';

function Questionnaire({ title, category }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obté les dades de la taula de preguntes corresponent segons la categoria
        const questionResponse = await fetch(`http://localhost:3000/table/${category.toLowerCase()}questions`);
        const questionJsonData = await questionResponse.json();

        // Obté les dades de les respostes corresponents
        const answerResponse = await fetch(`http://localhost:3000/table/${category.toLowerCase()}answers`);
        const answerJsonData = await answerResponse.json();

        // Combina les dades de les preguntes i les respostes
        const mergedQuestions = questionJsonData.map(question => {
          // Filtra les respostes corresponents a la pregunta actual
          const options = answerJsonData.filter(answer => answer.question_id === question.question_id);
          return { ...question, options };
        });

        // Actualitza l'estat amb les preguntes i les seves opcions
        setQuestions(mergedQuestions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]); // Assegura que la consulta es faci només quan la categoria canviï

  const handleChange = (event, index) => {
    const { value } = event.target;

    // Actualitza el camp boolean en l'objecte question
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        const isFemale = value === 'Female'; // Aquí pots modificar la lògica segons el teu cas
        return { ...question, boolean: isFemale };
      }
      return question;
    });

    // Actualitza l'estat amb les noves preguntes actualitzades
    setQuestions(newQuestions);
  };

  return (
    <Container>
      <Row>
        <h2 className='pb-4'>{title}</h2>
        <Form>
          {questions.map((question, index) => (
            <Row key={index}>
              <Col xs={1}><h6>{index + 1}.</h6></Col>
              <Col xs={11}>
                <Row className='mb-3'>
                  <Col xs={10}><h6>{question.question_text}</h6></Col>
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
                          type={question.input_type}
                          name={`question-${index}`}
                          label={option.answer_text}
                          value={option.answer_text}
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
