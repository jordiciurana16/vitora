import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import articlesSvg from '../../assets/articles.svg';

const LatestArticles = () => {
  return (
    <div className="articles-section pt-5 pb-4">
      <Container>
        <Row>
          <Col md={6}>
            <h3 style={{ fontSize: '2.5rem' }}>Latest Articles</h3>
            <p style={{ fontSize: '1.25rem' }}>Read the latest articles and news about factors affecting your lifespan. Stay informed and make better decisions for a healthier life.</p>
            <Button style={{ fontSize: '1rem' }} type='submit'>Read More</Button>
          </Col>
          <Col md={6} className="text-center">
            <img src={articlesSvg} alt="Article Thumbnail" style={{ width: '290px' }} className="mx-auto d-block" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestArticles;
