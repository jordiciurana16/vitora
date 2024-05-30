import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CountUp from 'react-countup';
import Footer from '../components/layout/footer/Footer';
import NavigationBar from '../components/layout/nav/Nav';
import ScrollProgress from '../components/layout/nav/ScrollProgress';
import lottie from 'lottie-web';
import LatestArticles from './landing/LatestArticles';
import WebStats from './landing/WebStats';
import Foundations from './landing/Foundations';
import landingSvg from '../assets/landing.svg';
import groundSvg from '../assets/ground.svg';
import BrowseData from './landing/BrowseData';

function LandingPage() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    testsToday: 1509,
    testsInSpain: 32582,
    totalTests: 297303,
    accuracy: 91.2
  });
  const animationContainerRef = useRef(null);

  useEffect(() => {
    // Uncomment and use your API endpoint
    // axios.get('https://api.example.com/stats')
    //   .then(response => {
    //     setStats(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching stats:', error);
    //   });
  }, []);

  useEffect(() => {
    if (animationContainerRef.current) {
      const animation = lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'src/assets/cat.json', // Ensure this path is correct
      });

      animationContainerRef.current.addEventListener('mouseenter', () => {
        animation.goToAndPlay(0, true);
      });

      return () => {
        animation.destroy();
      };
    }
  }, []);

  const handleButtonClick = () => {
    navigate('/vitora/profile');
  };

  const imageUrlBottom = "https://i.ibb.co/QnL2qyY/test2.png";

  return (
    <>
      <NavigationBar isProfilePage={false} />
      <ScrollProgress />
      <div style={{ marginTop: '4px' }}>
        <div className="hero-section pt-5 text-white">
          <Container className='first'>
            <Row>
              <Col>
                <h1 style={{ fontSize: '2.7rem' }}>Discover your life timeline</h1>
                <p className="lead" style={{ fontSize: '1.5rem', fontWeight:'400' }}>
                  Understand how your daily habits impact your quality and length of life.
                </p>
                <Button type='submit' size="lg" onClick={handleButtonClick} style={{ fontSize: '1.1rem' }}>Get Started</Button>
              </Col>
              <Col md={6} className="text-center" style={{ position: 'relative' }}>
                <img src={landingSvg} alt="Article Thumbnail" style={{ width: '375px', position: 'relative' }} className="img-fluid mx-auto d-block" />
              </Col>
            </Row>
          </Container>
          <Container fluid className='p-0 pb-3'>
            <div className="image-container adalt">
              <img src={groundSvg} alt="Graphic" className="img-fluid w-100" />
            </div>
            <Foundations />
          </Container>
        </div>
        <LatestArticles />
        <BrowseData />
        <WebStats stats={stats} />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
