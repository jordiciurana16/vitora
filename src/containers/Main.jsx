import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchCountriesData } from '../services/api/countriesData'; // Importa la funció fetchCountriesData

function Main() {
  const [countriesDataFormatted, setCountriesDataFormatted] = useState([]); // Estat local per emmagatzemar les dades dels països

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCountriesData('SP.DYN.LE00.IN'); // Crida la funció fetchCountriesData
        console.log(data); // Imprimeix les dades a la consola
        setCountriesDataFormatted(data); // Actualitza l'estat local amb les dades obtingudes
      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); // Crida la funció per obtenir les dades quan el component es munti
  }, []);

  return (
    <main>
      <Container fluid>
        <Row>
          <Col className='px-0'>
            <table>
              <thead>
                <tr>
                  <th>Country ID</th>
                  <th>Country Name</th>
                  <th>Life Expectancy</th>
                </tr>
              </thead>
              <tbody>
                {countriesDataFormatted.map((country, index) => (
                  <tr key={index}>
                    <td>{country.id}</td>
                    <td>{country.name}</td>
                    <td>{country.lifeExpectancy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;