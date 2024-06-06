import React from 'react';
import { Row, Col, Form, InputGroup} from 'react-bootstrap';
import { BsLink45Deg, BsFillShareFill } from "react-icons/bs";


function ShareSection() {
    const exampleUrl = "https://vitora.com/jordiciurana16";

    return(
    <Row className='mx-3 my-4'>
          <Col  xs={12}>
            <h2>Share your results</h2>

            <Form>
              <Form.Group controlId="exampleUrl">
                <Form.Label>Share your profile among your circles so they can see your results.</Form.Label>
                <div className="input-group mb-2 ">
                <InputGroup.Text id="basic-addon1"><BsLink45Deg /></InputGroup.Text>
                  <Form.Control  placeholder="Enter URL" value={exampleUrl} disabled className="form-control-lg bg-light" />
                  <InputGroup.Text id="basic-addon1"><BsFillShareFill /></InputGroup.Text>
                </div>
                <Form.Text className="text-muted">
                  You need a user session to save, share, and modify your results over time.
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>
)}
export default ShareSection