import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/layout/footer/Footer';
import NavigationBar from '../components/layout/nav/Nav';
import ScrollProgress from '../components/layout/nav/ScrollProgress';

function DataPage() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <div className="sticky-container">
        <NavigationBar />
        <div className='position-relative top-0'>
          <ScrollProgress />
        </div>
        <div className="hero-section" style={{ backgroundColor: '#f5f5f5', padding: '60px 0' }}>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>World Development Indicators</h1>
                <p style={{ fontSize: '1.25rem', marginBottom: '40px' }}>The World Bank's most comprehensive database of development indicators, compiled from officially-recognized international sources.</p>
                <Form>
                  <Form.Group controlId="search">
                    <Form.Control
                      type="text"
                      placeholder="Search for indicators, countries, or topics"
                      style={{ padding: '15px', fontSize: '1rem', marginBottom: '10px' }}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" style={{ fontSize: '1rem', padding: '10px 20px' }}>
                    Search
                  </Button>
                </Form>
              </Col>
              <Col xs={12} md={4} className="d-none d-md-block">
                <div className="index-section" style={{ borderLeft: '1px solid #ddd', paddingLeft: '20px' }}>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Index</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    <li style={{ marginBottom: '10px' }}><a href="#indicator1" style={{ color: '#007bff', textDecoration: 'none' }}>Indicator 1</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#indicator2" style={{ color: '#007bff', textDecoration: 'none' }}>Indicator 2</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#indicator3" style={{ color: '#007bff', textDecoration: 'none' }}>Indicator 3</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#indicator4" style={{ color: '#007bff', textDecoration: 'none' }}>Indicator 4</a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </Container>
  );
}

export default DataPage;
