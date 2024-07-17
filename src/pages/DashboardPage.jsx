import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsLayoutSidebar } from 'react-icons/bs';
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
import { useGlobalContext } from '../hooks/GlobalContext';

function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { lifespan, percentage } = useGlobalContext();

  useEffect(() => {
    if (currentStep >= 3) {
      setIsSidebarVisible(true);
    }
  }, [currentStep]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

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
        return null;
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
          <Header currentStep={currentStep} />
        </div>
      </div>

      {currentStep <= 4 && (
        <div className="step-progress-container">
          <StepProgress currentStep={currentStep} />
        </div>
      )}

      <Container fluid>
        <Row className='px-0'>
          <Col xs={12} className="position-relative">
            {currentStep >= 3 && (
              <div className="sidebar-toggle" onClick={toggleSidebar}>
                <BsLayoutSidebar />
              </div>
            )}
          </Col>
        </Row>
        <Row className='px-0'>
          {currentStep >= 3 && (
            <>
              <Col xs={2} className={`px-0 position-fixed sidebar-container ${isSidebarVisible ? 'expanded' : 'collapsed'}`}>
                <Sidebar isVisible={isSidebarVisible} />
              </Col>
              <Col xs={isSidebarVisible ? 10 : 12} className={`px-0 ${isSidebarVisible ? 'offset-2' : ''}`}>
                <div className="main-content">
                  {currentStep <= 4 && (
                    <div className="step-component-container">
                      {renderStepComponent()}
                    </div>
                  )}
                  {currentStep > 4 && (
                    <div>
                      <MainRouting />
                      <Footer />
                    </div>
                  )}
                </div>
              </Col>
            </>
          )}
          {currentStep < 3 && (
            <Col xs={12} className="px-0">
              <div className="main-content">
                <div className="step-component-container">
                  {renderStepComponent()}
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>

      <style jsx>{`
        .step-progress-container {
          position: absolute;
          top: 23%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
        .step-component-container {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          z-index: 0;
        }
        .sidebar-toggle {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
          font-size: 24px;
          color: black;
          cursor: pointer;
        }
        .sidebar-container {
          transition: transform 0.5s ease;
          transform: translateX(0);
        }
        .sidebar-container.collapsed {
          transform: translateX(-100%);
        }
        .main-content {
          position: relative;
          margin-top: 0;
        }
      `}</style>
    </GlobalProvider>
  );
}

export default DashboardPage;
