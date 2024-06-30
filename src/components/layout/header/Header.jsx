import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from '../../feature/ProgressBar';
import styles from './Header.module.css';
import { useGlobalContext } from '../../../hooks/GlobalContext';

function Header({ currentStep }) {
  const { lifespan, birthdate, hoveredItem, setHoveredItem } = useGlobalContext();
  const stringBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : '';

  return (
    <header className="sticky-top">
      <Container fluid>
        <Row className="position-relative">
          <Col className="p-0 position-relative">
            <ProgressBar lifespan={lifespan} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} currentStep={currentStep} />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
