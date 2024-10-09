import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from './Events.module.css';
import { events } from '../../utils/data/eventsData';

const Events = ({ hoveredItem, className }) => {
  return (
    <div className={className}>
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
