import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importem les icones
import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import MainRouting from '../components/layout/main/MainRouting';
import Footer from '../components/layout/footer/Footer';
import BirthdateModal from '../components/feature/BirthdateModal';
import { GlobalProvider } from '../hooks/GlobalContext';
import NavigationBar from '../components/layout/nav/Nav';
import ScrollProgress from '../components/layout/nav/ScrollProgress';

function ProfilePage() {
  const [showModal, setShowModal] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <GlobalProvider>
      <div className="sticky-container">
        <NavigationBar isProfilePage={true} />
        <div className='position-relative top-0'>
          <ScrollProgress />
        </div>
        <Header />
      </div>
      
      <Container fluid>
        <Row className='px-0'>
          <Col xs={2} className={`px-0 position-fixed ${isSidebarCollapsed ? 'd-none' : ''}`}>
            <Sidebar />
          </Col>
          <Col xs={{ span: 10, offset: isSidebarCollapsed ? 0 : 2 }} className='px-0'>
            <div className="m-2">
              {isSidebarCollapsed ? (
                <FaArrowRight
                  onClick={toggleSidebar}
                  style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                />
              ) : (
                <FaArrowLeft
                  onClick={toggleSidebar}
                  style={{ fontSize: '1.5rem', cursor: 'pointer' }}
                />
              )}
            </div>
            <MainRouting />
            <Footer />
          </Col>
        </Row>
      </Container>
      <BirthdateModal show={showModal} onHide={handleCloseModal} />
    </GlobalProvider>
  );
}

export default ProfilePage;
