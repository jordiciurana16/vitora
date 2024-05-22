// EventsCard.js
import React from 'react';
import { Card, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsBoxArrowInUpRight, BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs';

const EventsCard = ({
  progressBarData,
  dynamicContent,
  hovered,
  clickedItem,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  isDynamicContentRed,
  infoHoverEvents,
  setInfoHoverEvents,
  renderTooltipEvents
}) => (
  <Card className="shadow-sm">
    <Card.Header className='d-flex justify-content-between align-items-center events-header'>
      Events
      <OverlayTrigger placement="top" overlay={renderTooltipEvents}>
        <div onMouseEnter={() => setInfoHoverEvents(true)} onMouseLeave={() => setInfoHoverEvents(false)}>
          {infoHoverEvents ? <BsInfoCircleFill /> : <BsInfoCircle />}
        </div>
      </OverlayTrigger>
    </Card.Header>
    <Row className='ps-5 pe-5 pb-4 pt-4'>
      <Col xs={6} className="d-flex flex-column ps-0 pe-0 me-0">
        {progressBarData.map((bar, index) => (
          <div
            key={index}
            className={`ps-2 pt-2 pb-2 cursorClicked pe-0 me-0 ${clickedItem === index + 1 ? 'clickedCard' : ''} ${hovered === index + 1 && clickedItem !== index + 1 ? 'leftCardHover' : ''}`}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index + 1)}
          >
            <Row className="align-items-center d-flex justify-content-between">
              <Col>
                <h6>{bar.title}</h6>
              </Col>
              <Col>
                <span className="text-muted">{bar.date}</span>
              </Col>
            </Row>
          </div>
        ))}
      </Col>
      <Col xs={6} className={`p-3 m-0 ${isDynamicContentRed ? 'clickedContent' : 'rightCardHover'}`}>
        <Row className="d-flex align-items-center">
          <div className="col">
            <h6>{dynamicContent.title}</h6>
          </div>
          <div className="col-auto">
            <span className="text-muted">{dynamicContent.date}</span>
          </div>
        </Row>
        {dynamicContent.imageUrl && (
          <div className="d-flex justify-content-center">
            <img src={dynamicContent.imageUrl} alt={dynamicContent.title} style={{ width: '125px' }} />
          </div>
        )}
        <p>{dynamicContent.description}</p>
        {dynamicContent.link && (
          <a href={dynamicContent.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            See why <BsBoxArrowInUpRight />
          </a>
        )}
      </Col>
    </Row>
  </Card>
);

export default EventsCard;