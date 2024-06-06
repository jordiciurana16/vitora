import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Carousel, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { BsBoxArrowInUpRight, BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs';
import { useGlobalContext } from '../../hooks/GlobalContext';
import ProfileCard from './ProfileCard';
import EventsCard from './EventsCard';

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

  const progressBarData = [
    {
      id: 1,
      title: "Job",
      date: "15/06/2025",
      imageUrl: "https://i.ibb.co/5hT7wqx/jobwork.webp",
      description: "A new job opportunity arises! It's time to impress with your skills and expertise.",
      link: "#",
      subEvents: [
        {
          id: 1.1,
          type: "First Job",
          percentage: 20,
        },
        {
          id: 1.2,
          type: "Promotion",
          percentage: 40,
        },
        {
          id: 1.3,
          type: "Career Change",
          percentage: 60,
        },
        {
          id: 1.4,
          type: "Retirement Party",
          percentage: 80,
        }
      ]
    },
    {
      id: 2,
      title: "Marriage",
      date: "20/09/2026",
      imageUrl: "https://i.ibb.co/XtLqMBC/marriage.webp",
      description: "Love is in the air! Prepare for a beautiful journey together with your partner.",
      link: "#",
      subEvents: [
        {
          id: 2.1,
          type: "First Date",
          percentage: 10,
        },
        {
          id: 2.2,
          type: "Engagement",
          percentage: 20,
        },
        {
          id: 2.3,
          type: "Wedding",
          percentage: 35,
        },
        {
          id: 2.4,
          type: "Anniversary",
          percentage: 50,
        }
      ]
    },
    {
      id: 3,
      title: "Offspring",
      date: "25/12/2027",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "Congratulations! You're expecting a new member in the family. Get ready for joyful moments.",
      link: "#",
      subEvents: [
        {
          id: 3.1,
          type: "Pregnancy Announcement",
          percentage: 30,
        },
        {
          id: 3.2,
          type: "Birth",
          percentage: 38,
        },
        {
          id: 3.3,
          type: "First Steps",
          percentage: 45,
        },
        {
          id: 3.4,
          type: "First Day of School",
          percentage: 55,
        }
      ]
    },
    {
      id: 4,
      title: "Housing",
      date: "10/03/2028",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "It's time to find your dream home. Get ready for house hunting and making important decisions.",
      link: "#",
      subEvents: [
        {
          id: 4.1,
          type: "House Hunting",
          percentage: 20,
        },
        {
          id: 4.2,
          type: "Purchase",
          percentage: 42,
        },
        {
          id: 4.3,
          type: "Renovation",
          percentage: 50,
        },
        {
          id: 4.4,
          type: "Moving In",
          percentage: 60,
        }
      ]
    },
    {
      id: 5,
      title: "Retirement",
      date: "10/03/2029",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "Congratulations on your retirement! It's time to relax, travel, and enjoy the fruits of your labor.",
      link: "#",
      subEvents: [
        {
          id: 5.1,
          type: "Retirement Announcement",
          percentage: 70,
        },
        {
          id: 5.2,
          type: "Farewell Party",
          percentage: 75,
        },
        {
          id: 5.3,
          type: "First Trip",
          percentage: 80,
        },
        {
          id: 5.4,
          type: "Hobby Pursuit",
          percentage: 85,
        }
      ]
    },
    {
      id: 6,
      title: "Illness",
      date: "03/08/2030",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "Unfortunately, you've fallen ill. Take care of yourself and focus on recovery.",
      link: "#",
      subEvents: [
        {
          id: 6.1,
          type: "Diagnosis",
          percentage: 60,
        },
        {
          id: 6.2,
          type: "Treatment Start",
          percentage: 65,
        },
        {
          id: 6.3,
          type: "Hospitalization",
          percentage: 70,
        },
        {
          id: 6.4,
          type: "Recovery",
          percentage: 75,
        }
      ]
    },
    {
      id: 7,
      title: "Death",
      date: "15/05/2040",
      imageUrl: "https://i.ibb.co/h72nzXD/father-work.webp",
      description: "A sad event occurs. Remember to cherish the memories and celebrate the life of your loved one.",
      link: "#",
      subEvents: [
        {
          id: 7.1,
          type: "Funeral",
          percentage: 95,
        },
        {
          id: 7.2,
          type: "Memorial Service",
          percentage: 96,
        },
        {
          id: 7.3,
          type: "Reflection",
          percentage: 97,
        }
      ]
    }
  ];

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
