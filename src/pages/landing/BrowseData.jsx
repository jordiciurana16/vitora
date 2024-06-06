import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import dataSvg from '../../assets/data.svg';

const BrowseData = () => {
  return (
    <div className="articles-section pb-4 pt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center">
            <img src={dataSvg} alt="Data Thumbnail" style={{ width: '370px' }} className="img-fluid mx-auto d-block" />
          </Col>
          <Col md={6}>
            <h3 style={{ fontSize: '2.5rem' }}>Explore Data</h3>
            <p style={{ fontSize: '1.25rem' }}>
              Access a wealth of open data and statistical analyses to enhance your understanding and help you make data-driven decisions for a healthier lifestyle.
            </p>
            <Button style={{ fontSize: '1rem' }} type='submit'>Read More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrowseData;
