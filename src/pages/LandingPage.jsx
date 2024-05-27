import React from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle, BsSearch, BsGlobeAmericas } from 'react-icons/bs';
import Footer from '../components/layout/footer/Footer';
import Logo from '../components/common/Logo';

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/vitora/profile');
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#"><Logo /> Vitora</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/vitora/about">About</Nav.Link>
              <Nav.Link href="/vitora/data">Data</Nav.Link>
              <Nav.Link href="/vitora/articles">Articles</Nav.Link>
              <Nav.Link href="/vitora/events">Events</Nav.Link>
              <Nav.Link href="/vitora/donations">Donations</Nav.Link>
              <Nav.Link href="/vitora/contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#search"><BsSearch /></Nav.Link>
              <Nav.Link href="#globe"><BsGlobeAmericas /></Nav.Link>
              <Nav.Link href="#profile"><BsPersonCircle /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="hero-section text-center py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col>
              <h1>Discover your lifespan with Vitora</h1>
              <p className="lead">
                Understand how your daily habits impact your quality and length of life.
              </p>
              <Button type='submit' size="lg" onClick={handleButtonClick}>Get Started</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="info-section py-5">
        <Container>
          <Row>
            <Col md={4}>
              <h3>Accurate</h3>
              <p>
                Our algorithm provides accurate results based on scientific research and statistical data.
              </p>
            </Col>
            <Col md={4}>
              <h3 style={{ color: 'green', fontSize: '1.5em' }}>Open Access</h3>
              <p>
                Our application is free and open to everyone. Leverage open access data to understand and improve your life.
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

      <div className="articles-section py-5 bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <h3>Latest Articles</h3>
              <p>Read the latest articles and news about factors affecting your lifespan. Stay informed and make better decisions for a healthier life.</p>
              <Button type='submit'>Read More</Button>
            </Col>
            <Col md={6} className="text-center">
              <img src="https://i.ibb.co/dBTFsq0/undraw-online-articles-re-yrkj.png" alt="Article Thumbnail" style={{ width: '300px' }} className="img-fluid mx-auto d-block" />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={6} className="text-center">
              <img src="https://i.ibb.co/0jRHyYm/undraw-data-trends-re-2cdy.png" alt="Article Thumbnail" style={{ width: '375px' }} className="img-fluid mx-auto d-block" />
            </Col>
            <Col md={6}>
              <h3>Latest Articles</h3>
              <p>Read the latest articles and news about factors affecting your lifespan. Stay informed and make better decisions for a healthier life.</p>
              <Button type='submit'>Read More</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="stats-section py-5">
        <Container>
          <Row>
            <Col md={3} className="text-center">
              <h3>1M+</h3>
              <p>Tests taken today</p>
            </Col>
            <Col md={3} className="text-center">
              <h3>13M+</h3>
              <p>Tests taken in Spain</p>
            </Col>
            <Col md={3} className="text-center">
              <h3>1156M+</h3>
              <p>Total tests taken</p>
            </Col>
            <Col md={3} className="text-center">
              <h3>91.2%</h3>
              <p>Results rated as accurate or very accurate</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default LandingPage;
