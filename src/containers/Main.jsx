import React from 'react';
import { Container, Row, Col, Form, Card, Carousel, ProgressBar } from 'react-bootstrap';
import { BsLink45Deg, BsFillShareFill} from "react-icons/bs";

function Main() {
  const exampleUrl = "https://vitora.com/jordiciurana16";

  // Dades per al carrusel
  const carouselData = [
    { 
      id: 1,
      imgSrc: "https://via.placeholder.com/150",
      text: "First Card Text"
    },
    { 
      id: 2,
      imgSrc: "https://via.placeholder.com/150",
      text: "Second Card Text"
    },
    { 
      id: 3,
      imgSrc: "https://via.placeholder.com/150",
      text: "Third Card Text"
    }
  ];

  return (
    <main>
      <Container fluid>
        <h1>Your life expectancy</h1>
        <h6>Review your results and learn more about your life</h6>
        <Row className="mt-4 align-items-stretch">
          <Col xs={3}>
            {/* Carrusel amb diverses targetes */}
            <Carousel controls={false} indicators={true}>
              {carouselData.map(item => (
                <Carousel.Item key={item.id} className='px-2'>
                  <Card className="p-3  h-100">
                    <Card.Img variant="top" src={item.imgSrc} />
                    <Card.Body>
                      <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={9} className="">
            {/* Columna de mida 9 amb color de fons warning */}
            <Card className="p-3  h-100">
              <Row>
                <Col xs={7}>
                  {/* Divisió de la columna de mida 9 en dues columnes */}
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <ProgressBar key={index} now={item * 20} label={`Bar ${item}`} className="mt-2" />
                  ))}
                </Col>
                <Col xs={5}>
                  {/* Segona columna amb un paràgraf */}
                  <p>This is a paragraph in the second column.</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className='pt-4'>
          <Col xs={12} >
            <h2>Share Your Results</h2>
          </Col>
        </Row>
        <Row >
          <Col xs={12} >
          <Form>
              <Form.Group controlId="exampleUrl">
                <Form.Label>Share your profile among your circles so they can see your results.</Form.Label>
                <div className="input-group mb-2">
                  <button className="btn btn-outline-secondary" type="button"><BsLink45Deg /></button> {/* Ícone de link */}
                  <Form.Control type="text" placeholder="Enter URL" value={exampleUrl} readOnly className="form-control-lg" />
                  <button className="btn btn-outline-secondary" type="button"><BsFillShareFill /></button> {/* Ícone de compartir */}
                </div>
                <Form.Text className="text-muted">
                  You need a user session to save, share, and modify your results over time.
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
