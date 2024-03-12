import React from 'react';
import { Container, Col} from 'react-bootstrap';
import ReviewSection from './ReviewSection';
import ShareSection from './ShareSection'
import EventsSection from './EventsSection';
import DataSection from './DataSection';

function ResultsContainer() {


  return (
    <main>
      <Container fluid className='p-0'>
        <Col className='ps-3 pe-0 pt-3'>

        <h1>Your life expectancy</h1>
        <h6>Review your stats results and learn more about your life</h6>
        </Col>
       
        <ReviewSection />
        <EventsSection />
        
        <DataSection />
        <ShareSection />
      </Container>
    </main>
  );
}

export default ResultsContainer;
