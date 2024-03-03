import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BiHeart } from 'react-icons/bi'; // Importa la icona de cor de Bootstrap Icons


function MainCardSection() {
    const cardData = [
        {
          title: "Títol 1",
          text: "Paràgraf 1"
        },
        {
          title: "Títol 2",
          text: "Paràgraf 2"
        },
        {
          title: "Títol 3",
          text: "Paràgraf 3"
        }
      ];
  return (
    <Container fluid className="bg-danger"> {/* Afegit la classe bg-yellow per al color groc */}
      <Row className="d-flex justify-content-center">
        <Col className='px-0 text-center' xs={12}>
          <h1>Life Expectancy Calculator</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
      <>
      {/* Mapeja els elements de l'array cardData per a generar els cards */}
      {cardData.map((card, index) => (
        <Col key={index} xs={4} className="d-flex">
          <Card className="w-100">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <BiHeart size={24} className="mb-2" /> {/* Icona de cor, mb-2 afegit per separar-la del títol */}
              <Card.Title className="text-center">{card.title}</Card.Title>
              <Card.Text className="text-center">{card.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
      </Row>
    </Container>
  );
}

export default MainCardSection;
