import React from 'react';
import { Container, Row, Col, Card, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { userAge } from '../../utils/calculations/UserAge';

function StepComponent({ step, onSubmitSuccess, onBack }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAge, setBirthdate, setLifespan, birthdate, lifespan, percentage } = useGlobalContext();

  const handleFormSubmit = (data) => {
    if (step === 'birthdate') {
      const birthdate = new Date(data.birthdate);
      const age = userAge(birthdate);
      setAge(age);
      setBirthdate(birthdate);
      setLifespan(lifespan);
      onSubmitSuccess();
      console.log('Birthdate submitted:', birthdate);
    } else {
      onSubmitSuccess();
    }
  };

  const renderContent = () => {
    switch (step) {
      case 'birthdate':
        return (
          <>
            <BootstrapForm.Group controlId="birthdate">
              <BootstrapForm.Label className="pb-1" style={{ fontSize: '1.25rem' }}>What's your birthdate?</BootstrapForm.Label>
              <BootstrapForm.Control
                type="date"
                style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
                {...register('birthdate', { required: 'Please enter your birthdate' })}
              />
              {errors.birthdate && <div className="text-danger" style={{ fontSize: '1.25rem' }}>{errors.birthdate.message}</div>}
            </BootstrapForm.Group>
            <Button variant="primary" size="lg" type="submit" style={{ fontSize: '1.25rem' }}>Submit</Button>
          </>
        );
      case 'timeline':
        return (
          <>
            <p style={{ fontSize: '1.1rem' }}>Considering you were born on <strong>{birthdate ? birthdate.toLocaleDateString() : 'your birthdate'}</strong>, you have lived a <strong>{percentage}%</strong> of your life because right now your lifespan is <strong>{lifespan} years</strong>.</p>
            <p style={{ fontSize: '1.1rem' }}>But don't rush! This is just the mundial life expectancy.</p>
            <div className="d-flex justify-content-between">
              <Button variant="primary" size="lg" type="submit" onClick={onBack} style={{ fontSize: '1.25rem' }}>Back</Button>
              <Button variant="primary" size="lg" type="submit" onClick={onSubmitSuccess} style={{ fontSize: '1.25rem' }}>Next</Button>
            </div>
          </>
        );
      case 'factor':
        return (
          <>
            <p style={{ fontSize: '1.1rem' }}>Browse the factors sidebar to modify the timeline.</p>
            <p style={{ fontSize: '1.1rem' }}>The more questions you answer, the more accurate the approximation of your life expectancy will be.</p>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" size="lg" type="submit" onClick={onBack} style={{ fontSize: '1.25rem' }}>Back</Button>
              <Button variant="primary" size="lg" type="submit" onClick={onSubmitSuccess} style={{ fontSize: '1.25rem' }}>Next</Button>
            </div>
          </>
        );
      case 'forms':
        return (
          <>
            <p style={{ fontSize: '1.1rem' }}>The more accurate your responses, the more accurate the timeline will be.</p>
            <p style={{ fontSize: '1.1rem' }}>The entered data is not commercialized, and after the calculation is done, it is deleted forever.</p>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" size="lg" type="submit" onClick={onBack} style={{ fontSize: '1.25rem' }}>Back</Button>
              <Button variant="primary" size="lg" type="submit" onClick={onSubmitSuccess} style={{ fontSize: '1.25rem' }}>Next</Button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container fluid className='d-flex flex-column align-items-center' style={{ marginTop: '13vh', minHeight: '50vh', maxHeight: '50vh' }}>
      <Row className="justify-content-center w-100 mt-5" style={{ minHeight: '40vh' }}>
        <Col xs={12} md={10} lg={8} xl={6}>
          <Card className="px-2 pb-2 shadow-sm">
            <Card.Body>
              {step === 'birthdate' ? (
                <BootstrapForm onSubmit={handleSubmit(handleFormSubmit)}>
                  {renderContent()}
                </BootstrapForm>
              ) : (
                <div>
                  {renderContent()}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StepComponent;
