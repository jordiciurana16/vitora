import React from 'react';
import { Container, Row, Col, Card, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { userAge } from '../../utils/calculations/UserAge';
import { InfoCircle } from 'react-bootstrap-icons';
import StepProgress from './StepProgress';

function Birthdate({ onSubmitSuccess }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAge, setBirthdate, setLifespan, lifespan } = useGlobalContext();

  const onSubmit = (data) => {
    const birthdate = new Date(data.birthdate);
    const age = userAge(birthdate);

    setAge(age);
    setBirthdate(birthdate);
    setLifespan(lifespan);
    onSubmitSuccess();
    console.log('Birthdate submitted:', birthdate);
  };

  return (
    <Container fluid className='d-flex flex-column align-items-center pt-5'>
      <Row className="mb-4 w-100 justify-content-center">
        <Col xs={12} md={10} lg={8} xl={6}>
          <StepProgress currentStep={1} />
        </Col>
      </Row>
      <Row className="justify-content-center w-100 mb-5">
        <Col xs={12} md={10} lg={8} xl={6}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="my-1" style={{ fontSize: '2.5rem' }}>Know your life timeline</h2>
                <InfoCircle size={32} className="icon-adjust" />
              </div>
              <BootstrapForm onSubmit={handleSubmit(onSubmit)}>
                <BootstrapForm.Group controlId="birthdate" className="pb-5">
                  <BootstrapForm.Label style={{ fontSize: '1.25rem' }}>What's your birthdate?</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="date"
                    style={{ fontSize: '1.25rem' }}
                    {...register('birthdate', { required: 'Please enter your birthdate' })}
                  />
                  {errors.birthdate && <div className="text-danger" style={{ fontSize: '1.25rem' }}>{errors.birthdate.message}</div>}
                </BootstrapForm.Group>
                <div className="text-center">
                  <Button variant="primary" size="lg" type="submit" style={{ fontSize: '1.25rem' }}>Next</Button>
                </div>
              </BootstrapForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Birthdate;
