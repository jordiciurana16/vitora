import React, { useState, useEffect } from 'react';
import { Row, Col, Tooltip } from 'react-bootstrap';
import { useGlobalContext } from '../../hooks/GlobalContext';
import ProfileCard from './ProfileCard';
import EventsCard from './EventsCard';
import { events } from '../../utils/data/eventsData';

const ResultsReview = () => {
  const { hoveredItem, setHoveredItem } = useGlobalContext();
  const [dynamicContent, setDynamicContent] = useState({});
  const [hovered, setHovered] = useState(null);
  const [clickedItem, setClickedItem] = useState(hoveredItem);
  const [infoHoverProfile, setInfoHoverProfile] = useState(false);
  const [infoHoverEvents, setInfoHoverEvents] = useState(false);

  const carouselData = [
    {
      id: 1,
      title: "Athlete",
      text: "You are the epitome of fitness, with a burning passion for pushing your body to its limits and achieving new heights of strength and endurance.",
      imageUrl: "https://i.ibb.co/5c7HdCb/Artboard-3-copy-100.jpg"
    },
    {
      id: 2,
      title: "Rested",
      text: "You stand out as someone who understands the power of slowing down and embracing stillness knowing that true rest isn't a luxury, it's a need.",
      imageUrl: "https://i.ibb.co/vY6QWRs/Artboard-3-100.jpg"
    },
    {
      id: 3,
      title: "Unhealthy",
      text: "You find yourself trapped in unhealthy eating habits, consuming limited variety of foods and high-calorie meals without consideration for your overall health.",
      imageUrl: "https://i.ibb.co/5R4nR9f/Artboard-3-copy-2-100.jpg"
    }
  ];

  const progressBarData = events.map(event => ({
    id: event.id,
    title: event.event,
    date: "Date not provided", // Add actual date if available
    imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
    description: `${event.event} event description`, // Add actual description if available
    link: "#",
    subEvents: event.subEvents
  }));

  const generateContent = (index) => {
    return progressBarData[index] || {};
  };

  useEffect(() => {
    const initialContent = generateContent(clickedItem - 1);
    setDynamicContent(initialContent);
  }, [clickedItem]);

  const handleMouseEnter = (index) => {
    setHovered(index);
    const content = generateContent(index - 1);
    setDynamicContent(content);
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    const content = generateContent(clickedItem - 1);
    setDynamicContent(content);
    setHoveredItem(clickedItem);
  };

  const handleClick = (index) => {
    setClickedItem(index);
    setHoveredItem(index);
  };

  const isDynamicContentRed = clickedItem && (hovered === clickedItem || hovered === null);

  const renderTooltipProfile = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Analyze the characteristics of your profile
    </Tooltip>
  );

  const renderTooltipEvents = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Browse through the significant events of your life
    </Tooltip>
  );

  return (
    <>
      <Row className="mx-3 my-4">
        <Col className='ps-3 pe-0' xs={4}>
          <ProfileCard 
            carouselData={carouselData}
            infoHoverProfile={infoHoverProfile}
            setInfoHoverProfile={setInfoHoverProfile}
            renderTooltipProfile={renderTooltipProfile}
          />
        </Col>
        <Col className='ps-4 pe-2' xs={8}>
          <EventsCard
            progressBarData={progressBarData}
            dynamicContent={dynamicContent}
            hovered={hovered}
            clickedItem={clickedItem}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleClick={handleClick}
            isDynamicContentRed={isDynamicContentRed}
            infoHoverEvents={infoHoverEvents}
            setInfoHoverEvents={setInfoHoverEvents}
            renderTooltipEvents={renderTooltipEvents}
          />
        </Col>
      </Row>
    </>
  );
};

export default ResultsReview;
