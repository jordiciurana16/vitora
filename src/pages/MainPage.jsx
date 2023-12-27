import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/layout/header/Header';
import Nav from '../components/layout/nav/Nav';
import Routing from '../components/layout/main/MainRouting';
import Aside from '../components/layout/aside/Aside';
import Footer from '../components/layout/footer/Footer';
import BirthdateModal from '../components/feature/BirthdateModal';

function MainPage() {
  const [showModal, setShowModal] = useState(true); // Local state to control the visibility of the modal

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal when this function is called
  };

  return (
    <>
      <Header />
      <Container fluid className='bg-dark'>
        <Row className='px-0'>
          <Col xs={2} className='px-0 position-fixed'>
            <Nav />
          </Col>
          <Col xs={{ span: 10, offset: 2 }} className='px-0'>
            <Row className='mx-0'>
              <Col xs={9} className='px-0'>
                <Routing />
              </Col>
              <Col xs={3} className='px-0'>
                <Aside />
              </Col>
            </Row>
            <Footer />
          </Col>
        </Row>
      </Container>
      <BirthdateModal show={showModal} onHide={handleCloseModal} />
    </>
  );
}

export default MainPage;