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
              <h1><CountUp style={{ color: 'black' }} end={stats.testsToday} duration={4} separator="," />+</h1>
            )}
            <p>Tests taken today</p>
          </Col>
          <Col md={3} className="text-center">
            {startCount && (
              <h1><CountUp style={{ color: 'black' }} end={stats.totalTests} duration={4} separator="," />+</h1>
            )}
            <p>Total tests taken</p>
          </Col>
          <Col md={3} className="text-center">
            {startCount && (
              <h1><CountUp style={{ color: 'black' }} end={stats.webVisits} duration={4} separator="," />+</h1>
            )}
            <p>Total web visits</p>
          </Col>
          <Col md={3} className="text-center">
            {startCount && (
              <h1><CountUp style={{ color: 'black' }} end={stats.accuracy} duration={4} decimals={1} />%</h1>
            )}
            <p>Results rated as accurate</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebStats;
