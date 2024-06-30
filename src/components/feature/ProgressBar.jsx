import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';
import styles from './ProgressBar.module.css';
import Events from '../common/Events';

const ProgressBar = ({ lifespan, hoveredItem, setHoveredItem, currentStep }) => {
  const { percentage } = useGlobalContext();

  const tooltip = (
    <Tooltip id="tooltip-basic">
      You have lived {percentage.toFixed(2)}% of your life.
    </Tooltip>
  );

  return (
    <Container fluid className={styles.progressContainer}>
      <Row>
        <Col className='p-0'>
          <div className={styles.progressBar}>
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <div
                className={styles.progress}
                style={{ width: `${percentage}%` }}
              ></div>
            </OverlayTrigger>
            <div className={`${styles.lifespan} position-absolute top-50 start-50 translate-middle`}>
              <OverlayTrigger placement="bottom" overlay={<Tooltip>Your lifespan is {lifespan} years</Tooltip>}>
                <span>{parseFloat(lifespan).toFixed(1)}</span>
              </OverlayTrigger>
            </div>
            <Events hoveredItem={hoveredItem} className={currentStep > 4 ? 'visible' : 'invisible'} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressBar;
