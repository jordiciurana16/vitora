import React, { useState, useEffect } from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';
import styles from './ProgressBar.module.css';
import Events from '../common/Events';

const ProgressBar = () => {
  const { lifespan, birthdate, percentage, hoveredItem, setHoveredItem } = useGlobalContext();
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

  const tooltip = (
    <Tooltip id="tooltip-basic">
      You have lived {percentage.toFixed(2)}% of your life.
    </Tooltip>
  );

  return (
    <header className="sticky-top">
      <Container fluid>
        <Row className="position-relative">
          <Col className="p-0 position-relative">
            <div className={styles.progressBar}>
              <OverlayTrigger placement="bottom" overlay={tooltip}>
                <div
                  className={styles.progress}
                  style={{ width: `${percentage}%` }}
                ></div>
              </OverlayTrigger>
              <Events hoveredItem={hoveredItem} />
            </div>
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
};

export default ProgressBar;
