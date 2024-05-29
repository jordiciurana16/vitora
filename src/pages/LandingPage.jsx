import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/footer/Footer';
import NavigationBar from '../components/layout/nav/Nav';

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/vitora/profile');
  };

  const imageUrlTop = "https://i.ibb.co/r2jZhJV/Artboard-1.png";
  const imageUrlBottom ="https://i.ibb.co/p14YzRw/Artboard-1-copy.png";

  return (
    <>
      <NavigationBar isProfilePage={false} />
      <div className="hero-section pt-5 text-white">
        <Container>
          <Row>
            <Col>
              <h1>Discover your life timeline</h1>
              <p className="lead">
                Understand how your daily habits impact your quality and length of life.
              </p>
              <Button type='submit' size="lg" onClick={handleButtonClick}>Get Started</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid className='p-0 m-0'>
          <div className="image-container adalt">
            <img src={imageUrlTop} alt="Graphic" className="img-fluid w-100" />
          </div>
          <div className="image-container">
            <img src={imageUrlBottom} alt="Graphic" className="img-fluid w-100" />
          </div>
        </Container>
      </div>

      <div className="info-section">´
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
