import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/layout/header/Header';
import Sidebar from '../components/layout/sidebar/Sidebar';
import MainRouting from '../components/layout/main/MainRouting';
import Footer from '../components/layout/footer/Footer';
import { GlobalProvider } from '../hooks/GlobalContext';
import NavigationBar from '../components/layout/nav/Nav';
import ScrollProgress from '../components/layout/nav/ScrollProgress';
import Birthdate from '../components/feature/steps/Birthdate';
import Timeline from '../components/feature/steps/Timeline';
import Factor from '../components/feature/steps/Factor';
import Forms from '../components/feature/steps/Forms';
import StepProgress from '../components/feature/StepProgress';

function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleBirthdateSubmitSuccess = () => {
    setCurrentStep(2);
  };

  const handleTimelineSubmitSuccess = () => {
    setCurrentStep(3);
  };

  const handleFactorSubmitSuccess = () => {
    setCurrentStep(4);
  };

  const handleFormsSubmitSuccess = () => {
    setCurrentStep(5);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Birthdate onSubmitSuccess={handleBirthdateSubmitSuccess} />;
      case 2:
        return <Timeline onSubmitSuccess={handleTimelineSubmitSuccess} onBack={handleBack} />;
      case 3:
        return <Factor onSubmitSuccess={handleFactorSubmitSuccess} onBack={handleBack} />;
      case 4:
        return <Forms onSubmitSuccess={handleFormsSubmitSuccess} onBack={handleBack} />;
      default:
        return null; // No renderitzem cap component aquí si currentStep > 4
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

      {currentStep <= 4 && (
        <div className="step-progress-container">
          <StepProgress currentStep={currentStep} />
        </div>
      )}

      <Container fluid>
        <Row className='px-0'>
          <Col xs={2} className={`px-0 position-fixed ${currentStep > 2 ? 'visible' : 'invisible'}`}>
            <Sidebar />
          </Col>
          <Col xs={{ span: 10, offset: 2 }} className='px-0'>
            {renderStepComponent()}
            {currentStep > 4 && <MainRouting />}
            {currentStep > 4 && <Footer />}
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .step-progress-container {
          position: absolute;
          top: 25%; /* Adjust the value to position it correctly */
          left: 50%;
          transform: translateX(-50%);
          z-index: 1; /* Ensure it is above other components */
        }
      `}</style>
    </GlobalProvider>
  );
}

export default DashboardPage;
