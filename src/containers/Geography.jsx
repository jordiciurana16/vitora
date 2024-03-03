import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Questionnaire from '../components/feature/Questionnaire';
import { fetchCountriesData } from '../services/api/countriesData'; 

function Geography() {
  const category = 'Geography'; 
  const [countriesDataFormatted, setCountriesDataFormatted] = useState([]); 
  const [userCountry, setUserCountry] = useState(''); 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountriesData('SP.DYN.LE00.IN'); 
        setCountriesDataFormatted(data); 
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); 
  }, []);

  const handleCountrySelectChange = (event) => {
    setUserCountry(event.target.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col className='px-0'>
          <Questionnaire category={category} title={'Geography'} countriesData={countriesDataFormatted} />
        </Col>
      </Row>
    </Container>
  );
}

export default Geography;
