import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BrowseData = () => {
  return (
    <div className="articles-section py-5 ">
      <Container>
        <Row>
        <Col md={6} className="text-center">
            <img src="https://i.ibb.co/0jRHyYm/undraw-data-trends-re-2cdy.png" alt="Article Thumbnail" style={{ width: '300px' }} className="img-fluid mx-auto d-block" />
          </Col>
          <Col md={6}>
            <h3>Browse Data</h3>
            <p>Read the latest articles and news about factors affecting your lifespan. Stay informed and make better decisions for a healthier life.</p>
            <Button type='submit'>Read More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrowseData;
