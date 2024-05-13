import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap'; // Importem els components necessaris de react-bootstrap
import styles from './Events.module.css';

const Events = () => {
  // Definim la llista d'esdeveniments aquí
  const events = [
    { id: 1, event:'Job', percentage: 20 }, // Exemple: esdeveniment al 20%
    { id: 2, event:'Marriage', percentage: 30 }, // Exemple: esdeveniment al 20%
    { id: 3, event:'Offspring', percentage: 33 }, // Exemple: esdeveniment al 20%
    { id: 4, event:'Housing', percentage: 28 }, // Exemple: esdeveniment al 20%
    { id: 5, event:'Retirement', percentage: 80 },  // Exemple: esdeveniment al 80%
    { id: 6, event:'Death', percentage: 99 }  // Exemple: esdeveniment al 80%

  ];

  return (
    <div>
      {events.map(event => (
        <OverlayTrigger
          key={event.id}
          overlay={<Tooltip>{event.event}</Tooltip>}
        >
          <div
            className={styles.eventMarker}
            style={{ left: `${event.percentage}%` }}
          ></div>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default Events;
