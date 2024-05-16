import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from './Events.module.css';

const Events = ({ hoveredItem }) => {
  const events = [
    { id: 1, event: 'Job', percentage: 25 },
    { id: 2, event: 'Marriage', percentage: 35 },
    { id: 3, event: 'Offspring', percentage: 38 },
    { id: 4, event: 'Housing', percentage: 42 },
    { id: 5, event: 'Retirement', percentage: 75 },
    { id: 6, event: 'Death', percentage: 99 }
  ];

  return (
    <div>
      {events.map(event => (
        hoveredItem === event.id && (
          <OverlayTrigger
            key={event.id}
            overlay={<Tooltip>{event.event}</Tooltip>}
          >
            <div
              className={styles.eventMarker}
              style={{ left: `${event.percentage}%` }}
            ></div>
          </OverlayTrigger>
        )
      ))}
    </div>
  );
};

export default Events;
