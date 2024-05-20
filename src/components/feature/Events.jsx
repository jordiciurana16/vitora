import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from './Events.module.css';

const Events = ({ hoveredItem }) => {
  const events = [
    {
      id: 1,
      event: 'Job',
      percentage: 25,
      subEvents: [
        { id: 1.1, type: 'First Job', percentage: 20 },
        { id: 1.2, type: 'Promotion', percentage: 40 },
        { id: 1.3, type: 'Career Change', percentage: 60 },
        { id: 1.4, type: 'Retirement Party', percentage: 80 }
      ]
    },
    {
      id: 2,
      event: 'Marriage',
      percentage: 35,
      subEvents: [
        { id: 2.1, type: 'First Date', percentage: 10 },
        { id: 2.2, type: 'Engagement', percentage: 20 },
        { id: 2.3, type: 'Wedding', percentage: 35 },
        { id: 2.4, type: 'Anniversary', percentage: 50 }
      ]
    },
    {
      id: 3,
      event: 'Offspring',
      percentage: 38,
      subEvents: [
        { id: 3.1, type: 'Pregnancy Announcement', percentage: 30 },
        { id: 3.2, type: 'Birth', percentage: 38 },
        { id: 3.3, type: 'First Steps', percentage: 45 },
        { id: 3.4, type: 'First Day of School', percentage: 55 }
      ]
    },
    {
      id: 4,
      event: 'Housing',
      percentage: 42,
      subEvents: [
        { id: 4.1, type: 'House Hunting', percentage: 20 },
        { id: 4.2, type: 'Purchase', percentage: 42 },
        { id: 4.3, type: 'Renovation', percentage: 50 },
        { id: 4.4, type: 'Moving In', percentage: 60 }
      ]
    },
    {
      id: 5,
      event: 'Retirement',
      percentage: 75,
      subEvents: [
        { id: 5.1, type: 'Retirement Announcement', percentage: 70 },
        { id: 5.2, type: 'Farewell Party', percentage: 75 },
        { id: 5.3, type: 'First Trip', percentage: 80 },
        { id: 5.4, type: 'Hobby Pursuit', percentage: 85 }
      ]
    },
    {
      id: 6,
      event: 'Illness',
      percentage: 60,
      subEvents: [
        { id: 6.1, type: 'Diagnosis', percentage: 60 },
        { id: 6.2, type: 'Treatment Start', percentage: 65 },
        { id: 6.3, type: 'Hospitalization', percentage: 70 },
        { id: 6.4, type: 'Recovery', percentage: 75 }
      ]
    },
    {
      id: 7,
      event: 'Death',
      percentage: 99,
      subEvents: [
        { id: 7.1, type: 'Funeral', percentage: 95 },
        { id: 7.2, type: 'Memorial Service', percentage: 96 },
        { id: 7.3, type: 'Reflection', percentage: 97 }
      ]
    }
  ];

  return (
    <div>
      {events.map(event => (
        <React.Fragment key={event.id}>
          {event.subEvents.map(subEvent => (
            hoveredItem === event.id && (
              <OverlayTrigger
                key={subEvent.id}
                overlay={<Tooltip>{subEvent.type}</Tooltip>}
              >
                <div
                  className={styles.eventMarker}
                  style={{ left: `${subEvent.percentage}%` }}
                ></div>
              </OverlayTrigger>
            )
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Events;
