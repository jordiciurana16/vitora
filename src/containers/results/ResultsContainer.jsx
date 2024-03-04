import React from 'react';
import { Container} from 'react-bootstrap';
import ReviewSection from './ReviewSection';
import ShareSection from './ShareSection'
import EventsSection from './EventsSection';
import DataSection from './DataSection';

function ResultsContainer() {


  return (
    <main>
      <Container fluid>
        <h1>Your life expectancy</h1>
        <h6>Review your stats results and learn more about your life</h6>
        <ReviewSection />
        <EventsSection />
        <DataSection />
        <ShareSection />
      </Container>
    </main>
  );
}

export default ResultsContainer;
