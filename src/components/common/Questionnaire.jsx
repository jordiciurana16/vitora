import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Form, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { ChevronDoubleLeft } from 'react-bootstrap-icons';

function Questionnaire({ factor, title }) {
  const [questions, setQuestions] = useState([]);
  const { updateLifeAndPercentage } = useGlobalContext();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [previousSelectedOptions, setPreviousSelectedOptions] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/vitora/data/${factor.toLowerCase()}.json`);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [factor]);

  const handleChange = (event, questionIndex, answerIndex, isCheckbox) => {
    const { checked, value } = event.target;
    const effect = parseFloat(value);

    if (isCheckbox) {
      let effects = selectedOptions[questionIndex] || {};
      effects[answerIndex] = checked ? effect : 0;

      const totalEffect = Object.values(effects).reduce((acc, curr) => acc + curr, 0);
      setSelectedOptions({ ...selectedOptions, [questionIndex]: effects });
      setPreviousSelectedOptions({ ...previousSelectedOptions, [questionIndex]: totalEffect });

      updateLifeAndPercentage(totalEffect - (previousSelectedOptions[questionIndex] || 0));
    } else {
      const previousEffect = previousSelectedOptions[questionIndex] || 0;
      setSelectedOptions({ ...selectedOptions, [questionIndex]: effect });
      setPreviousSelectedOptions({ ...previousSelectedOptions, [questionIndex]: effect });

      updateLifeAndPercentage(effect - previousEffect);
    }
  };

  const handleChevronClick = () => {
    navigate('/dashboard');
  };

  const renderBadgeValue = (index) => {
    const value = selectedOptions[index];
    if (typeof value === 'number') {
      return value.toFixed(2);
    } else if (typeof value === 'object') {
      const totalEffect = Object.values(value).reduce((acc, curr) => acc + curr, 0);
      return totalEffect.toFixed(2);
    }
    return '';
  };

  return (
    <Container>
      <Row>
        <Col className='pt-4 ps-4' xs={12} style={{ backgroundColor: 'white', boxShadow: '3px 0 5px -2px rgba(0, 0, 0, 0.3)' }}>
          <h2>{title}</h2>
          <hr/>
          <Form className='ms-3 '>
            {questions.map((question, index) => (
              <React.Fragment key={index}>
                <Row id={`question-${index}`} className="mb-1">
                  <Col xs={1}><h6>{index + 1}.</h6></Col>
                  <Col xs={6}><h6>{question.question_text}</h6></Col>
                  <Col xs={3}>
                    {selectedOptions[index] !== undefined && (
                      <Badge bg={renderBadgeValue(index) >= 0 ? 'success' : 'danger'} className="float-end">
                        {`${renderBadgeValue(index) > 0 ? '+' : ''}${renderBadgeValue(index)}%`}
                      </Badge>
                    )}
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col xs={{ span: 10, offset: 1 }}>
                    {question.answers.map((answer, ansIndex) => (
                      <Form.Check
                        key={answer.id}
                        type={question.input_type}
                        id={`question-${index}-option-${ansIndex}`}
                        name={`question-${index}`}
                        label={answer.text}
                        value={answer.effect_on_lifespan}
                        checked={question.input_type === 'radio' ? selectedOptions[index] === answer.effect_on_lifespan : selectedOptions[index] && selectedOptions[index][ansIndex]}
                        onChange={(e) => handleChange(e, index, ansIndex, question.input_type === 'checkbox')}
                      />
                    ))}
                  </Col>
                </Row>
              </React.Fragment>
            ))}
          </Form>

          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip>View results</Tooltip>}
          >
            <div 
              onClick={handleChevronClick} 
              style={{
                position: 'fixed',
                top: '150px',
                right: '30px',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-50%) translateX(-20px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(-50%) translateX(0)'}
            >
              <ChevronDoubleLeft size={24} />
              <span style={{ marginLeft: '8px', fontSize: '14px' }}>View results</span>
            </div>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  );
}

export default Questionnaire;
