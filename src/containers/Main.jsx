import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function Main() {
  return (
    <main>
      <Container fluid>
        <Row>
          <Col className='px-0'>
            <p>Main component</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
