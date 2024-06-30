import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import ReviewSection from './ReviewSection';
import ShareSection from './ShareSection';
import DataSection from './DataSection';

function ResultsContainer() {

  return (
    <main>
      <Container className='ps-5 pe-0 pt-5'>
          <h1 className='ps-4 pe-0 mb-3'>Your life timeline expectancy report</h1>
          <h6 className='ps-4 pe-0 mb-4'>Review your stats results and learn more about your life</h6>
        <ReviewSection />
        <DataSection />
        <ShareSection />
      </Container>
    </main>
  );
}

export default ResultsContainer;
