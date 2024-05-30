import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Foundations = () => {
  return (
    <div className="info-section py-5">
          <Container className='py-3'>
            <Row>
              <Col clas md={4}>
                <h3>Accurate</h3>
                <p>
                  Our algorithm provides accurate results based on scientific research and statistical data.
                </p>
              </Col>
              <Col md={4}>
                <h3>Open Access</h3>
                <p>
                  Leverage open access data to understand and improve your life.
                </p>
              </Col>
              <Col md={4}>
                <h3>Comprehensive</h3>
                <p>
                  Get a comprehensive analysis of your habits and how they affect your life.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
  );
};

export default Foundations;
