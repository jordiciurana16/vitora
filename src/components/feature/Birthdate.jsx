// src/components/feature/Birthdate.js

import React from 'react';
import { Container, Row, Col, Card, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { userAge } from '../../utils/calculations/UserAge'; // Import the UserAge function
import Logo from '../../components/common/Logo'; // Import the logo component here

function Birthdate() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAge, setBirthdate, setLifespan, lifespan } = useGlobalContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const birthdate = new Date(data.birthdate);
    const age = userAge(birthdate); // Use the UserAge function

    setAge(age);
    setBirthdate(birthdate);
    setLifespan(lifespan);
    // Navigate to the relative path
    navigate('/vitora/dashboard');
    console.log('Birthdate submitted:', birthdate);
  };

  return (
    <Container className='d-flex flex-column align-items-center pt-5'>
      <Row className="text-center mb-4">
        <Col>
          <h1>Your personalized life timeline journey</h1>
          <p className="lead">Enter your date of birth to calculate your estimated lifespan and receive personalized insights for a healthier, longer life.</p>
        </Col>
      </Row>
      <Row className="justify-content-center w-100 mb-5">
        <Col xs={12} md={8} lg={6}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">Calculate Your Lifespan</Card.Title>
              <BootstrapForm onSubmit={handleSubmit(onSubmit)}>
                <BootstrapForm.Group controlId="birthdate" className="pb-4">
                  <BootstrapForm.Label>Your birthdate:</BootstrapForm.Label>
                  <BootstrapForm.Control
                    type="date"
                    {...register('birthdate', { required: 'Please enter your birthdate' })}
                  />
                  {errors.birthdate && <div className="text-danger">{errors.birthdate.message}</div>}
                </BootstrapForm.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit">Calculate My Lifespan</Button>
                </div>
              </BootstrapForm>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>This test helps us provide personalized insights and recommendations for a healthier and longer life.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Birthdate;
