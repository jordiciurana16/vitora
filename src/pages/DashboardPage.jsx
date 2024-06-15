import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import MainRouting from '../components/layout/main/MainRouting';
import Footer from '../components/layout/footer/Footer';
import { GlobalProvider } from '../hooks/GlobalContext';
import NavigationBar from '../components/layout/nav/Nav';
import ScrollProgress from '../components/layout/nav/ScrollProgress';
import Birthdate from '../components/feature/Birthdate';
import Timeline from '../components/feature/Timeline';
import Factor from '../components/feature/Factor';
import ResultsContainer from '../containers/results/ResultsContainer';

function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleBirthdateSubmitSuccess = () => {
    setCurrentStep(2);
  };

  const handleTimelineSubmitSuccess = () => {
    setCurrentStep(3);
  };

  const handleFactorSubmitSuccess = () => {
    setCurrentStep(4);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Birthdate onSubmitSuccess={handleBirthdateSubmitSuccess} />;
      case 2:
        return <Timeline onSubmitSuccess={handleTimelineSubmitSuccess} />;
      case 3:
        return <Factor onSubmitSuccess={handleFactorSubmitSuccess} />;
      default:
        return <ResultsContainer />;
    }
  };

  return (
    <GlobalProvider>
      <div className="sticky-container">
        <NavigationBar isProfilePage={true} />
        <div className={`position-relative top-0 ${currentStep > 1 ? 'visible' : 'invisible'}`}>
          <ScrollProgress />
        </div>
        <div className={`${currentStep > 1 ? 'visible' : 'invisible'}`}>
          <Header />
        </div>
      </div>
      
      <Container fluid>
        <Row className='px-0'>
          <Col xs={2} className={`px-0 position-fixed ${isSidebarCollapsed ? 'd-none' : ''} ${currentStep > 2 ? 'visible' : 'invisible'}`}>
            <Sidebar />
          </Col>
          <Col xs={{ span: 10, offset: isSidebarCollapsed ? 0 : 2 }} className='px-0'>
            {renderStepComponent()}
            {currentStep > 3 && <MainRouting />}
            {currentStep > 3 && <Footer />}
          </Col>
        </Row>
      </Container>
    </GlobalProvider>
  );
}

export default DashboardPage;
