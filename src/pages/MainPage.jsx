import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/layout/header/Header';
import Nav from '../components/layout/nav/Nav';
import MainRouting from '../components/layout/main/MainRouting';
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
      <Container fluid>
        <Row className='px-0'>
          <Col xs={2} className='px-0 position-fixed'>
            <Nav />
          </Col>
          <Col xs={{ span: 10, offset: 2 }} className='px-0'>
            <MainRouting />
            <Footer />
          </Col>
        </Row>
      </Container>
      <BirthdateModal show={showModal} onHide={handleCloseModal} />
    </>
  );
}

export default MainPage;