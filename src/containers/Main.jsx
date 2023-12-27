import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../hooks/GlobalContext'; // Importa el hook del contexte global

function Main() {
  const { lifespan, percentage } = useGlobalContext();

  return (
    <main>
      <Container fluid>
        <Row>
          <Col className='px-0'>
            <h2>Your life expectancy is {lifespan} years.</h2>
            <p>You have lived {percentage}% of your life.</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
