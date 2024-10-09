import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Questionnaire from '../../components/common/Questionnaire';

// Funció per capitalitzar la primera lletra
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function FactorComponent() {
  const { factor } = useParams(); // Recollim el factor des de la URL dinàmicament

  // Utilitzem la funció per capitalitzar el títol
  const capitalizedFactor = capitalizeFirstLetter(factor);

  return (
    <Container fluid>
      <Row>
        <Col className='ps-3 pe-0 pt-3'>
          <Questionnaire factor={factor} title={capitalizedFactor} />
        </Col>
      </Row>
    </Container>
  );
}

export default FactorComponent;
