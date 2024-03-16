import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import ReviewSection from './ReviewSection';
import ShareSection from './ShareSection';
import DataSection from './DataSection';
import { UserData } from '../../utils/charts/Data';

function ResultsContainer() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

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
