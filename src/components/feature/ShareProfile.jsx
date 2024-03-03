import React from 'react';
import { Container, Row, Col, Form, Card, ProgressBar } from 'react-bootstrap';

function ShareProfile() {
  const exampleUrl = "https://example.com";

  return (
    <Container fluid className="bg-light p-4">
      <Row className="mt-4">
        <Col xs={3} className="bg-danger">
          {/* Columna de mida 3 amb color de fons danger */}
          <Card className="p-3">
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Text>Example Text</Card.Text>
              <button className="btn btn-primary">Button</button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={9} className="bg-warning">
          {/* Columna de mida 9 amb color de fons warning */}
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
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h2>Share Your Profile</h2>
        </Col>
      </Row>
      <Row >
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="exampleUrl">
              <Form.Label>Share your profile among your friends.</Form.Label>
              <Form.Control type="text" placeholder="Enter URL" value={exampleUrl} readOnly />
              <Form.Text className="text-muted">
                This is an example URL. You can share it with your friends.
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ShareProfile;
