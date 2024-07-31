import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircleFill, ArrowRight } from 'react-bootstrap-icons';

function StepProgress({ currentStep }) {
  const steps = [
    { number: 1, label: 'Birthdate' },
    { number: 2, label: 'Timeline' },
    { number: 3, label: 'Factors' },
    { number: 4, label: 'Forms' },
  ];

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center flex-nowrap">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Col xs="auto" className="d-flex flex-column align-items-center position-relative">
              <div className={`circle ${currentStep === step.number ? 'active' : ''}`}>
                <CircleFill className={`circle-icon`} />
                <span className="step-number">{step.number}</span>
              </div>
              <p className="step-label">{step.label}</p>
            </Col>
            {index < steps.length - 1 && (
              <Col xs="auto" className="d-flex justify-content-center align-items-center">
                <ArrowRight className="arrow" />
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>

      <style jsx>{`
        .circle {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px; /* Adjusted size */
          height: 30px; /* Adjusted size */
          background-color: white;
          border-radius: 50%;
          border: 2px solid var(--primary-color);
        }
        .circle.active {
          background-color: var(--primary-color);
        }
        .circle-icon {
          display: none; /* Hide the CircleFill icon */
        }
        .step-number {
          position: absolute;
          color: var(--primary-color);
          font-size: 1rem; /* Adjusted size */
        }
        .circle.active .step-number {
          color: white;
        }
        .arrow {
          width: 20px; /* Adjusted size */
          height: 20px; /* Adjusted size */
          color: var(--primary-color);
        }
        .step-label {
          position: absolute;
          top: 40px; /* Adjusted position */
          font-size: 0.875rem; /* Adjusted size */
          text-align: center;
          white-space: nowrap;
        }
        @media (max-width: 576px) {
          .circle {
            width: 25px;
            height: 25px;
          }
          .step-number {
            font-size: 0.75rem;
          }
          .arrow {
            width: 15px;
            height: 15px;
          }
          .step-label {
            top: 35px;
            font-size: 0.75rem;
          }
          .no-gutters {
            overflow-x: auto;
            white-space: nowrap;
          }
        }
      `}</style>
    </Container>
  );
}

export default StepProgress;
