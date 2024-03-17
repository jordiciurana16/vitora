import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import ReviewSection from './ReviewSection';
import ShareSection from './ShareSection';
import DataSection from './DataSection';

function ResultsContainer() {

  return (
    <main>
      <Container fluid className='p-0'>
        <Col className='ps-3 pe-0 pt-3'>
          <h1 className='mb-3'>Your Life Expectancy</h1>
          <h6 className='mb-4'>Review your stats results and learn more about your life</h6>
        </Col>
        <ReviewSection />
        <DataSection />
        <ShareSection />
      </Container>
    </main>
  );
}

export default ResultsContainer;
