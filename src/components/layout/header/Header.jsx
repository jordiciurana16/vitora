import React, { useState } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { BsPersonFillGear, BsCalendarFill, BsGearFill, BsGlobe } from 'react-icons/bs';
import ProgressBar from '../../common/ProgressBar';
import styles from './Header.module.css';
import { useGlobalContext } from '../../../hooks/GlobalContext';

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const { lifespan } = useGlobalContext();

  return (
    <header className="sticky-top">
      <Container fluid>
        <Row className={`position-relative`}>
          <Col className="p-0 position-relative">
            <ProgressBar />
            <div className={`${styles.headerLifespan} position-absolute top-50 start-50 translate-middle`}>
              {lifespan}
            </div>
            <Dropdown
              show={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="position-absolute top-0 end-0 m-0 mt-2 me-2"
            >

            <Dropdown.Toggle className={styles.dropdownButton}>
              <BsPersonFillGear size={30} />
            </Dropdown.Toggle>


              <Dropdown.Menu className='m0' style={{ marginTop: '-5px' }}>
                <Dropdown.Item href="#/action-1">
                  <span className="me-2">
                    <BsCalendarFill /> {/* Icona de calendari */}
                  </span>
                  Element 1
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <span className="me-2">
                    <BsGlobe /> {/* Icona de planeta */}
                  </span>
                  Element 2
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <span className="me-2">
                    <BsGearFill /> {/* Icona d'engranatge */}
                  </span>
                  Element 3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
