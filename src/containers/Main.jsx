import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'; // Afegit Form des de react-bootstrap
import { useGlobalContext } from '../hooks/GlobalContext';

function Main() {
  const { lifespan, percentage, birthdate, deathdate } = useGlobalContext();
  const [questionData, setQuestionData] = useState([]);
  const [answerData, setAnswerData] = useState([]);

  const stringBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : '';
  const stringDeathdate = deathdate ? new Date(deathdate).toLocaleDateString() : '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obté les dades de la taula geneticquestions
        const questionResponse = await fetch('http://localhost:3000/table/geneticquestions');
        const questionJsonData = await questionResponse.json();
        setQuestionData(questionJsonData);

        // Obté les dades de la taula geneticanswers
        const answerResponse = await fetch('http://localhost:3000/table/geneticanswers');
        const answerJsonData = await answerResponse.json();
        setAnswerData(answerJsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Container fluid>
        <Row>
          <Col className='px-0'>
            <p>You were born in {stringBirthdate}</p>
            <p>You have lived {percentage}% of your life.</p>
            <p>Your life expectancy is {lifespan} years.</p>
            <p>You will die in {stringDeathdate}.</p>
            <Form onSubmit={handleSubmit}>
              {questionData.map((question, index) => (
                <div key={index}>
                  <h2>Question {question.question_id}</h2>
                  <p>{question.question_text}</p>
                  {answerData.filter(answer => answer.question_id === question.question_id).map((answer, answerIndex) => (
                    <Form.Check
                      key={answerIndex}
                      type={question.input_type}
                      label={answer.answer_text}
                      name={`question_${question.question_id}`} // Afegit un name únic per a cada grup de radio buttons
                      id={`answer_${answer.answer_id}`} // Afegit un id únic per a cada radio button
                    />
                  ))}
                </div>
              ))}
              <button type="submit">Submit</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );

  // Funció per gestionar l'enviament del formulari
  function handleSubmit(event) {
    event.preventDefault();
    // Aquí pots gestionar l'enviament del formulari, accedint als valors dels inputs mitjançant l'event.target
  }
}

export default Main;
