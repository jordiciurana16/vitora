import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { fetchCountriesData } from '../../services/api/countriesData'; 
import { useGlobalContext } from '../../hooks/GlobalContext';
import Questionnaire from '../../components/common/Questionnaire'
function Geography() {
  const category = 'Geography'; 
  const [countriesDataFormatted, setCountriesDataFormatted] = useState([]); 
  const { setLifespan } = useGlobalContext();

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
    const selectedCountry = event.target.value;
    const selectedCountryData = countriesDataFormatted.find(country => country.name === selectedCountry);

    if (selectedCountryData && selectedCountryData.lifeExpectancy !== null) {
      setLifespan(selectedCountryData.lifeExpectancy);
    } else {
      // Si no hi ha dades de l'esperança de vida o si és null, pots optar per mantenir el valor predeterminat de lifespan
      setLifespan(72.4); // O qualsevol altre valor predeterminat desitjat
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col  className='ps-3 pe-0 pt-3'>
          <Questionnaire
            category={category}
            title={'Geography'}
            countriesData={countriesDataFormatted}
            setLifespan={handleCountrySelectChange} // Pass setLifespan as a prop
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Geography;