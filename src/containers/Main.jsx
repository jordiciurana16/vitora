import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../hooks/GlobalContext';

function Main() {
  const { lifespan, percentage, birthdate, deathdate } = useGlobalContext();
  const [tableData, setTableData] = useState([]);



  const stringBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : ''; // Utilitza la data introduïda des del contexte global
  const stringDeathdate = deathdate ? new Date(deathdate).toLocaleDateString() : ''; // Utilitza la data introduïda des del contexte global


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data');
        const jsonData = await response.json();
        setTableData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <main>
      <Container fluid>
        <Row>
          <Col className='px-0'>
            <p>You were born in {stringBirthdate}</p>
            <p>You have lived {percentage}% of your life.</p>
            <p>Your life expectancy is {lifespan} years.</p>
            <p>You will die in {stringDeathdate}.</p>

            {/* Mostra les dades de la taula geneticquestions */}
            <div>
      <h2>Table Data</h2>
      <ul>
        {tableData.map((row, index) => (
          <li key={index}>
            <strong>Question ID:</strong> {row.question_id}, <strong>Question Text:</strong> {row.question_text}
          </li>
        ))}
      </ul>
    </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
