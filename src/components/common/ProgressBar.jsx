import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  const { percentage } = useGlobalContext();

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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressBar;