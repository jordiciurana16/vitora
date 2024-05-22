import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';
import styles from './ProgressBar.module.css';
import Events from '../common/Events';

const ProgressBar = () => {
  const { percentage, hoveredItem } = useGlobalContext();

  const tooltip = (
    <Tooltip id="tooltip-basic">
      You have lived a {percentage.toFixed(2)}% of your life.
    </Tooltip>
  );

  return (
    <Container fluid>
      <Row>
        <Col className='p-0'>
          <div className={styles.progressBar}>
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <div
                className={styles.progress}
                style={{ width: `${percentage}%` }}
              ></div>
            </OverlayTrigger>
            <Events hoveredItem={hoveredItem} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressBar;
