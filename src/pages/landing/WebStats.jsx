import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';

const WebStats = ({ stats }) => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="stats-section py-5">
      <Container>
        <Row ref={statsRef}>
          <Col md={3} className="text-center">
            {startCount && (
              <h3><CountUp style={{ color: 'black' }} end={stats.testsToday} duration={4} separator="," />+</h3>
            )}
            <p>Tests taken today</p>
          </Col>
          <Col md={3} className="text-center">
            {startCount && (
              <h3><CountUp style={{ color: 'black' }} end={stats.testsInSpain} duration={4} separator="," />+</h3>
            )}
            <p>Tests taken in Spain</p>
          </Col>
          <Col md={3} className="text-center">
            {startCount && (
              <h3><CountUp style={{ color: 'black' }} end={stats.totalTests} duration={4} separator="," />+</h3>
            )}
            <p>Total tests taken</p>
          </Col>
          <Col md={3} className="text-center">
            {startCount && (
              <h3><CountUp style={{ color: 'black' }} end={stats.accuracy} duration={4} decimals={1} />%</h3>
            )}
            <p>Results rated as accurate</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebStats;
