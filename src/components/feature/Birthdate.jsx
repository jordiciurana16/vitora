// src/components/feature/Birthdate.js

import React from 'react';
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { userAge } from '../../utils/calculations/UserAge'; // Importem la funció UserAge
import Logo from '../../components/common/Logo'; // Importa el component del logotip aquí

function Birthdate() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAge, setBirthdate, setLifespan, lifespan } = useGlobalContext();

  const onSubmit = (data) => {
    const birthdate = new Date(data.birthdate);
    const age = userAge(birthdate); // Utilitzem la funció UserAge

    setAge(age);
    setBirthdate(birthdate);
    setLifespan(lifespan);
    // Aquí pots redirigir a una altra pàgina si ho desitges
    console.log('Birthdate submitted:', birthdate);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <div className="text-center">
            <Logo />
            <h2>Welcome to Vitora!</h2>
            <p>Start your journey towards a healthier life with Vitora.</p>
          </div>
          <BootstrapForm onSubmit={handleSubmit(onSubmit)}>
            <BootstrapForm.Group controlId="birthdate" className='pb-4'>
              <BootstrapForm.Label>Date of Birth:</BootstrapForm.Label>
              <BootstrapForm.Control
                type="date"
                {...register('birthdate', { required: 'Birthdate is required' })}
              />
              {errors.birthdate && <div>{errors.birthdate.message}</div>}
            </BootstrapForm.Group>
            <div className='text-center'>
              <Button type="submit">Next</Button>
            </div>
          </BootstrapForm>
        </Col>
      </Row>
    </Container>
  );
}

export default Birthdate;
