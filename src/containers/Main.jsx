import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap'; // Afegit Form des de react-bootstrap
import { useGlobalContext } from '../hooks/GlobalContext';

function Main() {
  const { lifespan, percentage, birthdate, deathdate } = useGlobalContext();

  const stringBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : '';
  const stringDeathdate = deathdate ? new Date(deathdate).toLocaleDateString() : '';

  return (
    <main>
      <Container fluid>
        <Row>
          <Col className='px-0'>
            <p>You were born in {stringBirthdate}</p>
            <p>You have lived {percentage}% of your life.</p>
            <p>Your life expectancy is {lifespan} years.</p>
            <p>You will die in {stringDeathdate}.</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
