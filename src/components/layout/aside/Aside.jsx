import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Aside.module.css'

function Aside() {
  return (
    <aside>
      <Container fluid >
        <Row>
          <Col className='px-0'>
            <p>aside</p>
          </Col>
        </Row>
      </Container>
    </aside>
  );
}

export default Aside;
