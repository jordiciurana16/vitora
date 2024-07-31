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
import StepProgress from '../components/feature/StepProgress';
import StepComponent from '../components/feature/StepComponent';
import { useGlobalContext } from '../hooks/GlobalContext';

function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const { lifespan, percentage } = useGlobalContext();

  useEffect(() => {
    if (currentStep >= 3) {
      setIsSidebarVisible(true);
    } else {
      setIsSidebarVisible(false);
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

  const stepDetails = [
    { step: 'birthdate', onSubmitSuccess: handleBirthdateSubmitSuccess },
    { step: 'timeline', onSubmitSuccess: handleTimelineSubmitSuccess },
    { step: 'factor', onSubmitSuccess: handleFactorSubmitSuccess },
    { step: 'forms', onSubmitSuccess: handleFormsSubmitSuccess }
  ];

  const currentStepDetail = stepDetails[currentStep - 1];

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
        <Row>
          <Col xs={12} className="position-relative">
            {currentStep >= 3 && (
              <div className="sidebar-toggle" onClick={toggleSidebar}>
                <BsLayoutSidebar />
              </div>
            )}
          </Col>
        </Row>
        <Row>
          {currentStep >= 3 && (
            <>
              <Col
                xs={2}
                className={`position-fixed sidebar-container ${isSidebarVisible ? 'expanded' : 'collapsed'}`}
              >
                <Sidebar isVisible={isSidebarVisible} />
              </Col>
              <Col
                xs={currentStep >= 3 && currentStep <= 4 ? 12 : isSidebarVisible ? 10 : 12}
                className={`main-content ${currentStep >= 3 && currentStep <= 4 ? '' : isSidebarVisible ? 'offset-2' : ''}`}
              >
                {currentStep <= 4 ? (
                  <div className="step-component-container">
                    <StepComponent
                      step={currentStepDetail.step}
                      onSubmitSuccess={currentStepDetail.onSubmitSuccess}
                      onBack={handleBack}
                      isCentered={true} // Afegim una prop per indicar que ha d'estar centrat
                    />
                  </div>
                ) : (
                  <div>
                    <div className="ps-1">
                      <MainRouting />
                    </div>
                    <Footer />
                  </div>
                )}
              </Col>
            </>
          )}
          {currentStep < 3 && (
            <Col xs={12} className="px-0">
              <div className="main-content">
                <div className="step-component-container">
                  <StepComponent
                    step={currentStepDetail.step}
                    onSubmitSuccess={currentStepDetail.onSubmitSuccess}
                    onBack={handleBack}
                    isCentered={true} // Afegim una prop per indicar que ha d'estar centrat
                  />
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>

      <style jsx>{`
        .step-progress-container {
          position: absolute;
          top: 22%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
        }
        .sidebar-toggle {
          position: fixed;
          top: 17vh;
          left: 10px;
          z-index: 2;
          font-size: 24px;
          color: black;
          cursor: pointer;
        }
        .sidebar-container {
          transition: transform 0.5s ease, width 0.5s ease;
          transform: translateX(0);
        }
        .sidebar-container.collapsed {
          transform: translateX(-100%);
        }
        .main-content {
          position: relative;
          margin-top: 0;
          padding: 0;
          transition: all 0.5s ease;
        }
        .main-content.offset-2 {
          margin-left: 16.6667%;
        }
      `}</style>
    </GlobalProvider>
  );
}

export default DashboardPage;
