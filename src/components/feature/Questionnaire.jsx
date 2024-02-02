import { Container, Row, Col, Badge, Form, Button } from 'react-bootstrap';

function Questionnaire({ title, questions }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = {};
    for (let entry of formData.entries()) {
      const [name, value] = entry;
      values[name] = value;
    }
    console.log(values); // Handle form submission here
  };

  return (
    <Container>
      <Row>
        <h2 className='pb-4'>{title}</h2>
        <Form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <Row key={index}>
              <Col xs={1}><h6>{index + 1}.</h6></Col>
              <Col xs={11}>
                <Row className='mb-3'>
                  <Col xs={10}><h6>{question.text}</h6></Col>
                  <Col xs={1}><Badge bg="success"> + 0.28%</Badge></Col>
                </Row>
                <Row className='mb-4'>
                  <Col xs={5}>
                    {question.type === 'text' ? (
                      <Form.Control
                        type="text"
                        name={`question-${index}`}
                        placeholder={question.placeholder || ''}
                      />
                    ) : question.type === 'select' ? (
                      <Form.Select
                        name={`question-${index}`}
                      >
                        <option value="">Select an option</option>
                        {question.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </Form.Select>
                    ) : question.type === 'checkbox' ? (
                      question.options.map((option, optionIndex) => (
                        <div key={optionIndex}>
                          <Form.Check
                            type="checkbox"
                            name={`question-${index}.${optionIndex}`}
                            label={option}
                            value={option}
                          />
                        </div>
                      ))
                    ) : (
                      question.options.map((option, optionIndex) => (
                        <div key={optionIndex}>
                          <Form.Check
                            type="radio"
                            name={`question-${index}`}
                            label={option}
                            value={option}
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
