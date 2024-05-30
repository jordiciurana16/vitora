import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ProgressBar from '../../feature/ProgressBar';
import styles from './Header.module.css';
import { useGlobalContext } from '../../../hooks/GlobalContext';

function Header() {
  const { lifespan, birthdate, hoveredItem, setHoveredItem } = useGlobalContext();
  const stringBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : '';
  const tooltipLifespan = (
    <Tooltip id="tooltip-lifespan">
      Your lifespan is {lifespan} years
    </Tooltip>
  );

  const [lastLifespan, setLastLifespan] = useState(0);

  useEffect(() => {
    setLastLifespan(lifespan);
  }, [lifespan]);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <header className="sticky-top">
      <Container fluid>
        <Row className="position-relative">
          <Col className="p-0 position-relative">
            <ProgressBar lastLifespan={lastLifespan} hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
            <div className={`${styles.headerLifespan} position-absolute top-50 start-50 translate-middle`}>
              <OverlayTrigger placement="bottom" overlay={tooltipLifespan}>
                <span>{parseFloat(lifespan).toFixed(1)}</span>
              </OverlayTrigger>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
