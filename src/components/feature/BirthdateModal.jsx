// components/BirthdateModal.js

import React from 'react';
import { Modal, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { userAge } from '../../utils/calculations/UserAge'; // Importem la funció UserAge
import Logo from '../../components/common/Logo'; // Importa el component del logotip aquí


function BirthdateModal({ show, onHide }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAge, setBirthdate, setLifespan, lifespan } = useGlobalContext();

  const onSubmit = (data) => {
    const birthdate = new Date(data.birthdate);
    const age = userAge(birthdate); // Utilitzem la funció UserAge

    setAge(age);
    setBirthdate(birthdate);
    setLifespan(lifespan);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title className='px-5'>
          <div>
            <Logo /><span className='ms-3'>Welcome to Vitora!</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto mb-3">
        <p>Start your journey towards a healthier life with Vitora.</p>
        <BootstrapForm onSubmit={handleSubmit(onSubmit)}>
          <BootstrapForm.Group controlId="birthdate" className='pb-4'>
            <BootstrapForm.Label>Date of Birth:</BootstrapForm.Label>
            <BootstrapForm.Control
              type="date"
              {...register('birthdate')}
            />
            {errors.birthdate && <div>{errors.birthdate.message}</div>}
          </BootstrapForm.Group>
          <div className='text-center'>
            <Button type="submit">Next</Button>
          </div>
        </BootstrapForm>
      </Modal.Body>
    </Modal>
  );
}

export default BirthdateModal;
