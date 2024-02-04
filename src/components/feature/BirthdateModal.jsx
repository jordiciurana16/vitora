import React from 'react';
import { Modal, Form as BootstrapForm, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useGlobalContext } from '../../hooks/GlobalContext';
import styles from './BirthdateModal.module.css'; // Importa el fitxer CSS


function BirthdateModal({ show, onHide }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
const { setAge, setBirthdate, setLifespan } = useGlobalContext();

  const onSubmit = (data) => {
    const birthdate = new Date(data.birthdate);
    const currentDate = new Date();
    const ageInMillis = currentDate - birthdate;
    const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365);

    setAge(ageInYears);
    setBirthdate(birthdate); // Verifica que aquesta línia actualitzi correctament la data introduïda al contexte global
    setLifespan(72.4); // Modifica la variable lifespan a 72.4


    onHide();
    
  };

  return (
    <Modal show={show} onHide={onHide} className={styles.birthdateModal}> {/* Aplica la classe al modal */}
      <Modal.Header>
        <Modal.Title>Welcome to Vitora!</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto mb-3">
        <p>Start your journey towards a healthier life with Vitora.</p>
        <BootstrapForm onSubmit={handleSubmit(onSubmit)}> {/* Aplica la classe al formulari */}
          <BootstrapForm.Group controlId="birthdate" className='pb-4'>
            <BootstrapForm.Label>Date of Birth:</BootstrapForm.Label>
            <BootstrapForm.Control
              type="date"
              {...register('birthdate')}
              
            />
            {errors.birthdate && <div>{errors.birthdate.message}</div>}
          </BootstrapForm.Group>
          <div style={{ textAlign: 'center' }}>
            <Button type="submit">Next</Button>
          </div>
        </BootstrapForm>
      </Modal.Body>
    </Modal>
  );
}

export default BirthdateModal;
