import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Badge, Form, Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { ChevronDoubleLeft } from 'react-bootstrap-icons';
import { fetchCountriesData } from '../../services/api/countriesData';

function Questionnaire({ factor, title }) {
  const [questions, setQuestions] = useState([]);
  const { updateLifeAndPercentage } = useGlobalContext();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [previousSelectedOptions, setPreviousSelectedOptions] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [countries, setCountries] = useState([]);
  const questionRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/vitora/data/${factor.toLowerCase()}.json`);
        const data = await response.json();
        setQuestions(data);

        if (factor === 'Geography') {
          const countriesData = await fetchCountriesData('SP.DYN.LE00.IN');
          setCountries(countriesData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [factor]);

  useEffect(() => {
    if (questionRefs.current[currentQuestion]) {
      const yOffset = -300; // Ajustament de desplaçament
      const y = questionRefs.current[currentQuestion].getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [currentQuestion]);

  useEffect(() => {
    setAnsweredCount(Object.keys(selectedOptions).length);
  }, [selectedOptions]);

  const handleCheckboxChange = (event, questionIndex, answerIndex) => {
    const { checked, value } = event.target;
    const effect = parseFloat(value);

    let effects = selectedOptions[questionIndex] || {};
    effects[answerIndex] = checked ? effect : 0;

    const totalEffect = Object.values(effects).reduce((acc, curr) => acc + curr, 0);
    setSelectedOptions({ ...selectedOptions, [questionIndex]: effects });
    setPreviousSelectedOptions({ ...previousSelectedOptions, [questionIndex]: totalEffect });

    updateLifeAndPercentage(totalEffect - (previousSelectedOptions[questionIndex] || 0));
  };

  const handleRadioChange = (event, questionIndex) => {
    const { value } = event.target;
    const effect = parseFloat(value);

    const previousEffect = previousSelectedOptions[questionIndex] || 0;
    setSelectedOptions({ ...selectedOptions, [questionIndex]: effect });
    setPreviousSelectedOptions({ ...previousSelectedOptions, [questionIndex]: effect });

    updateLifeAndPercentage(effect - previousEffect);
  };

  const handleSelectChange = (event, questionIndex) => {
    const { value } = event.target;
    const selectedCountry = countries.find(country => country.id === value);
    const effect = selectedCountry ? selectedCountry.lifeExpectancy - 72.4 : 0; // Suposant que 72.4 és l'esperança de vida base

    const previousEffect = previousSelectedOptions[questionIndex] || 0;
    setSelectedOptions({ ...selectedOptions, [questionIndex]: effect });
    setPreviousSelectedOptions({ ...previousSelectedOptions, [questionIndex]: effect });

    updateLifeAndPercentage(effect - previousEffect);
  };

  const handleChange = (event, questionIndex, answerIndex, isCheckbox) => {
    if (isCheckbox) {
      handleCheckboxChange(event, questionIndex, answerIndex);
    } else if (event.target.type === 'select-one') {
      handleSelectChange(event, questionIndex);
    } else {
      handleRadioChange(event, questionIndex);
    }

    if (questionIndex + 1 < questions.length) {
      setCurrentQuestion(questionIndex + 1);
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
    return '0.00';
  };

  const renderBadgeColor = (index) => {
    const value = selectedOptions[index];
    let totalEffect = 0;
    if (typeof value === 'number') {
      totalEffect = value;
    } else if (typeof value === 'object') {
      totalEffect = Object.values(value).reduce((acc, curr) => acc + curr, 0);
    }
    
    if (totalEffect > 0) {
      return 'success';
    } else if (totalEffect < 0) {
      return 'danger';
    } else {
      return 'secondary';
    }
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
                <Row id={`question-${index}`} className="mb-1" ref={el => questionRefs.current[index] = el}>
                  <Col xs={1}><h6>{index + 1}.</h6></Col>
                  <Col xs={6}><h6>{question.question_text}</h6></Col>
                  <Col xs={3}>
                    {selectedOptions[index] !== undefined && (
                      <Badge bg={renderBadgeColor(index)} className="float-end">
                        {`${renderBadgeValue(index) >= 0 ? '+' : ''}${renderBadgeValue(index)}%`}
                      </Badge>
                    )}
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col xs={{ span: 10, offset: 1 }}>
                    {question.input_type === 'select' ? (
                      <Form.Select className="custom-select-width" onChange={(e) => handleChange(e, index)}>
                        <option value="">Select a country</option>
                        {countries.map(country => (
                          <option key={country.id} value={country.id}>
                            {country.name}
                          </option>
                        ))}
                      </Form.Select>
                    ) : (
                      question.answers.map((answer, ansIndex) => (
                        <Form.Check
                          key={answer.id}
                          type={question.input_type}
                          id={`question-${index}-option-${ansIndex}`}
                          name={`question-${index}`}
                          label={answer.text}
                          value={answer.effect_on_lifespan}
                          checked={question.input_type === 'radio' ? selectedOptions[index] === answer.effect_on_lifespan : selectedOptions[index] && selectedOptions[index][ansIndex] !== undefined && selectedOptions[index][ansIndex] !== 0}
                          onChange={(e) => handleChange(e, index, ansIndex, question.input_type === 'checkbox')}
                        />
                      ))
                    )}
                  </Col>
                </Row>
              </React.Fragment>
            ))}
            <div className='pb-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
              <Button onClick={handleChevronClick} type='submit'>View results</Button>
              <p className='pt-4'>
                You have answered {answeredCount} of {questions.length} questions
              </p>
              <p className='text-muted'>The more questions you answer, the more accurate your prediction will be.</p>
            </div>
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
