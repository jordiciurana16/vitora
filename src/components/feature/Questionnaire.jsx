import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Form } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { fetchCountriesData } from '../../services/api/countriesData';

function Questionnaire({ title, category }) {
  const [questions, setQuestions] = useState([]);
  const { lifespan, updateLifeAndPercentage } = useGlobalContext();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [previousSelectedOptions, setPreviousSelectedOptions] = useState({});
  const [countriesDataFormatted, setCountriesDataFormatted] = useState([]); 
  const [userCountry, setUserCountry] = useState(''); 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountriesData('SP.DYN.LE00.IN'); 
        setCountriesDataFormatted(data); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); 
  }, []);

  const handleCountrySelectChange = (event) => {
    setUserCountry(event.target.value);
  };


  const handleQuestionSelection = (index) => {
    const questionElement = document.getElementById(`question-${index}`);
    if (questionElement) {
      const progressBarHeight = 17; // Height of the progress bar in vmin
      const progressBarOffset = progressBarHeight * window.innerHeight / 100; // Offset to account for the fixed header
      window.scrollTo({
        top: questionElement.offsetTop - progressBarOffset,
        behavior: 'smooth',
      });
    }
  };

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

  const handleChange = async (event, index) => {
  const { checked, value, name, type } = event.target;
  const previousValue = previousSelectedOptions[index] || 0;

  let selectedEffect;
  let newSelectedOptions = { ...selectedOptions }; // Move this declaration outside the switch

  switch (type) {
    case 'checkbox':
      const previousSelectedEffect = selectedOptions[index] || 0;
      selectedEffect = checked ? parseFloat(value) : -parseFloat(value);

      newSelectedOptions = { ...selectedOptions, [index]: checked ? previousSelectedEffect + parseFloat(value) : previousSelectedEffect - parseFloat(value) };
      setSelectedOptions(newSelectedOptions);
      break;
    case 'radio':
      selectedEffect = parseFloat(value) - parseFloat(previousValue);
      newSelectedOptions = { ...selectedOptions, [index]: selectedEffect };
      setSelectedOptions(newSelectedOptions);
      break;
    case 'select':
      newSelectedOptions = { ...selectedOptions, [index]: selectedEffect };
      setSelectedOptions(newSelectedOptions);

      break;
    default:
      // handle default case (if any)
      break;
  }

  updateLifeAndPercentage(selectedEffect);
  setPreviousSelectedOptions({ ...previousSelectedOptions, [index]: value });

  handleQuestionSelection(index); // Scroll to the next question after selection
};




  return (
    <Container>
      <Row>
        <h2 className='pb-4'>{title}</h2>
        <Form>
          {questions.map((question, index) => (
            <Row key={index} id={`question-${index}`}>
              <Col xs={1}><h6>{index + 1}.</h6></Col>
              <Col xs={11}>
                <Row className='mb-3'>
                  <Col xs={10}><h6>{question.question_text}</h6></Col>
                  <Col xs={2}>
                    {selectedOptions[index] !== undefined && (
                      <Badge bg={
                        selectedOptions[index] === 0 ? 'secondary' :
                        (selectedOptions[index] > 0 ? 'success' : 'danger')
                      }>
                        {selectedOptions[index] === 0 ? '= 0%' :
                          (selectedOptions[index] > 0 ? '+' + selectedOptions[index] + '%' : selectedOptions[index] + '%')
                        }
                      </Badge>
                    )}
                  </Col>
                </Row>
                <Row className='mb-4'>
                  <Col xs={7}>
                    {question.input_type === 'select' ? (
                      <Form.Select
                        name={`question-${index}`}
                        value={previousSelectedOptions[index] || ''}
                        onChange={(event) => handleChange(event, index)}
                      >
                        {countriesDataFormatted.map((country, index) => (
                          <option key={index} value={country.name}>{country.name}</option>
                        ))}
                      </Form.Select>
                    ) : (
                      question.options.map((option, optionIndex) => (
                        <div key={optionIndex}>
                          <Form.Check
                            type={question.input_type}
                            id={`question-${index}-option-${optionIndex}`}
                            name={`question-${index}`}
                            label={option.answer_text}
                            value={option.effect_on_lifespan.toString()}
                            onChange={(event) => handleChange(event, index)}
                          />
                        </div>
                      ))
                    )}
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