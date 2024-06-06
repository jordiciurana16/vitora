import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Footer from '../components/layout/footer/Footer';
import NavigationBar from '../components/layout/nav/Nav';
import ScrollProgress from '../components/layout/nav/ScrollProgress';

function ResourcesPage() {
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
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>Vitora Resources</h1>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '300', marginBottom: '20px' }}>Open-access data for a healthier future</h2>
                <p style={{ fontSize: '1.25rem', marginBottom: '40px' }}>Vitora uses open data from the World Bank Group to provide a prospective view of life expectancy. This resource is accessible to everyone and offers valuable insights for your health and well-being.</p>
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
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Recent Resources</h4>
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    <li style={{ marginBottom: '10px' }}><a href="#resource1" style={{ color: '#007bff', textDecoration: 'none' }}>Life Expectancy by Country</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#resource2" style={{ color: '#007bff', textDecoration: 'none' }}>GDP and Health Comparison</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#resource3" style={{ color: '#007bff', textDecoration: 'none' }}>Climate Impact on Health</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#resource4" style={{ color: '#007bff', textDecoration: 'none' }}>Mortality Trends</a></li>
                  </ul>
                </div>
                <Card style={{ marginTop: '20px' }}>
                  <Card.Body>
                    <Card.Title>New Highlighted Resource</Card.Title>
                    <Card.Text>
                      Check out our latest highlighted resource on life expectancy and how public policies influence global health.
                    </Card.Text>
                    <Button variant="primary" href="#highlightedResource">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Container style={{ marginTop: '40px' }}>
          <Row>
            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Resource 1</Card.Title>
                  <Card.Text>
                    An overview of life expectancy trends across different regions.
                  </Card.Text>
                  <Button variant="primary" href="#resource1">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Resource 2</Card.Title>
                  <Card.Text>
                    Analysis of GDP impact on public health outcomes.
                  </Card.Text>
                  <Button variant="primary" href="#resource2">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Resource 3</Card.Title>
                  <Card.Text>
                    Exploring the relationship between climate change and health indicators.
                  </Card.Text>
                  <Button variant="primary" href="#resource3">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Resource 4</Card.Title>
                  <Card.Text>
                    Current trends in global mortality rates and causes.
                  </Card.Text>
                  <Button variant="primary" href="#resource4">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Resource 5</Card.Title>
                  <Card.Text>
                    The influence of healthcare policies on life expectancy.
                  </Card.Text>
                  <Button variant="primary" href="#resource5">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Resource 6</Card.Title>
                  <Card.Text>
                    Socioeconomic factors affecting health outcomes.
                  </Card.Text>
                  <Button variant="primary" href="#resource6">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </Container>
  );
}

export default ResourcesPage;
