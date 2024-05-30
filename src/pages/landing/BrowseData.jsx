import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import dataSvg from '../../assets/data.svg';

const BrowseData = () => {
  return (
    <div className="articles-section pb-4 pt-5 ">
      <Container>
        <Row>
          <Col md={6} className="text-center">
            <img src={dataSvg} alt="Article Thumbnail" style={{ width: '370px' }} className="img-fluid mx-auto d-block" />
          </Col>
          <Col md={6}>
            <h3 style={{ fontSize: '2.5rem' }}>Browse Data</h3>
            <p style={{ fontSize: '1.25rem' }}>Read the latest articles and news about factors affecting your lifespan. Stay informed and make better decisions for a healthier life.</p>
            <Button style={{ fontSize: '1rem'}} type='submit'>Read More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrowseData;
