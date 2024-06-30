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
    <Row className='ps-5 pe-5 pb-5 pt-4'>
      <Col xs={12} className="d-flex flex-wrap ps-0 pe-0 me-0">
        {progressBarData.map((bar, index) => (
          <div
            key={index}
            className={`flex-fill px-2 pt-2 pb-2 cursorClicked ${clickedItem === index + 1 ? 'clickedCard' : ''} ${hovered === index + 1 && clickedItem !== index + 1 ? 'leftCardHover' : ''}`}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index + 1)}
          >
            <h6 className="text-center">{bar.title}</h6>
          </div>
        ))}
      </Col>
      <Col xs={12} className={`p-3 m-0 d-flex ${isDynamicContentRed ? 'clickedContent' : 'rightCardHover'}`}>
        <Col xs={8}>
          <h6>{dynamicContent.title}</h6>
          <p>{dynamicContent.description}</p>
          {dynamicContent.link && (
            <a href={dynamicContent.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
              See why <BsBoxArrowInUpRight />
            </a>
          )}
        </Col>
        <Col xs={4} className="d-flex justify-content-center align-items-center">
          {dynamicContent.imageUrl && (
            <img src={dynamicContent.imageUrl} alt={dynamicContent.title} style={{ width: '100%' }} />
          )}
        </Col>
      </Col>
    </Row>
  </Card>
);

export default EventsCard;
