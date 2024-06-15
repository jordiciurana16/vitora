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
    <Container fluid className='mb-5'>
      <Row className="justify-content-center align-items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Col className="d-flex flex-column align-items-center position-relative">
              <div className={`circle ${currentStep === step.number ? 'active' : ''}`}>
                <CircleFill className={`circle-icon`} />
                <span className="step-number">{step.number}</span>
              </div>
              <p className="step-label">{step.label}</p>
            </Col>
            {index < steps.length - 1 && (
              <Col className="d-flex justify-content-center align-items-center">
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
          width: 40px;
          height: 40px;
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
          font-size: 1.25rem;
        }
        .circle.active .step-number {
          color: white;
        }
        .arrow {
          width: 30px;
          height: 30px;
          color: var(--primary-color);
        }
        .step-label {
          position: absolute;
          top: 50px; /* Adjust this value to place the label correctly */
          font-size: 1rem;
          text-align: center;
          white-space: nowrap;
        }
      `}</style>
    </Container>
  );
}

export default StepProgress;
