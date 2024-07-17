import React from 'react';
import { Container, Row, Col, Card, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../../hooks/GlobalContext';
import { userAge } from '../../../utils/calculations/UserAge';
import { InfoCircle } from 'react-bootstrap-icons';

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
    <Container fluid className='d-flex flex-column align-items-center' style={{ marginTop: '13vh', minHeight: '50vh', maxHeight:'50vh' }}>
      <Row className="justify-content-center w-100 mt-5" style={{ minHeight: '40vh' }}>
        <Col xs={12} md={10} lg={8} xl={6}>
        <Card className="px-2  pb-2 shadow-sm">
        <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h2 className=" mb-2" style={{ fontSize: '2.5rem' }}>Calculate your life expectancy</h2>
              </div>
              <BootstrapForm onSubmit={handleSubmit(onSubmit)}>
                <BootstrapForm.Group controlId="birthdate" className="">
                  <BootstrapForm.Label className="pb-1" style={{ fontSize: '1.25rem' }}>What's your birthdate?</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="date"
                    style={{ fontSize: '1.5rem' }}
                    {...register('birthdate', { required: 'Please enter your birthdate' })}
                  />
                  {errors.birthdate && <div className="text-danger" style={{ fontSize: '1.25rem' }}>{errors.birthdate.message}</div>}
                </BootstrapForm.Group>
              </BootstrapForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center w-100">
        <Col xs={12} md={10} lg={8} xl={6}>
          <div className="text-center">
            <Button variant="primary" size="lg" type="submit" style={{ fontSize: '1.25rem' }} onClick={handleSubmit(onSubmit)}>Submit</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Birthdate;
