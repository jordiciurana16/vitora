import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Form } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';

function Questionnaire({ title, category }) {
  const [questions, setQuestions] = useState([]);
  const { lifespan, updateLifeAndPercentage } = useGlobalContext();
  const [selectedOptions, setSelectedOptions] = useState({}); // Afegit estat per a les opcions seleccionades

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionResponse = await fetch(`http://localhost:3000/table/${category.toLowerCase()}questions`);
        const questionJsonData = await questionResponse.json();

        const answerResponse = await fetch(`http://localhost:3000/table/${category.toLowerCase()}answers`);
        const answerJsonData = await answerResponse.json();

        const mergedQuestions = questionJsonData.map(question => {
          const options = answerJsonData.filter(answer => answer.question_id === question.question_id);
          return { ...question, options };
        });

        setQuestions(mergedQuestions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);


  const handleChange = (event, index, effectOnLifespan) => {
    const { checked, value } = event.target;
    
    // Verifica si la pregunta és de tipus checkbox
    if (questions[index].input_type === 'checkbox') {
      // Obté l'efecte de la resposta seleccionada
      const selectedEffect = checked ? effectOnLifespan : -effectOnLifespan;
  
      // Obté el valor actual del badge per a aquesta pregunta
      const currentBadgeValue = selectedOptions[index] || 0;
  
      // Suma l'efecte de la resposta seleccionada al valor actual del badge
      const newBadgeValue = parseFloat(currentBadgeValue) + selectedEffect;
  
      // Actualitza l'esperança de vida i el badge amb el nou valor
      updateLifeAndPercentage(selectedEffect);
      const newSelectedOptions = { ...selectedOptions, [index]: newBadgeValue.toString() };
      setSelectedOptions(newSelectedOptions);
    } else {
      // Si no és de tipus checkbox, actualitza l'esperança de vida segons la resposta seleccionada
      updateLifeAndPercentage(checked ? effectOnLifespan : -effectOnLifespan);
  
      // Actualitza les opcions seleccionades
      const newSelectedOptions = { ...selectedOptions, [index]: value };
      setSelectedOptions(newSelectedOptions);
    }
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
                    {/* Renderitza el badge basat en les opcions seleccionades */}
                    {selectedOptions[index] !== undefined && (
                      <Badge bg={
                        selectedOptions[index] === '0' ? 'secondary' :
                        (selectedOptions[index] > 0 ? 'success' : 'danger')
                      }>
                        {selectedOptions[index] === '0' ? '= 0.00%' :
                          (selectedOptions[index] > 0 ? '+' + selectedOptions[index] + '%' : selectedOptions[index] + '%')
                        }
                      </Badge>
                    )}
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
                          value={option.effect_on_lifespan.toString()}
                          onChange={(event) => handleChange(event, index, option.effect_on_lifespan)}
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
