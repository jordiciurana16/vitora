import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsPersonFillGear, BsPersonCircle, BsGearWideConnected, BsTranslate, BsQuestionLg, BsSend, BsFillInboxFill} from 'react-icons/bs';
import ProgressBar from '../../common/ProgressBar';
import styles from './Header.module.css';
import { useGlobalContext } from '../../../hooks/GlobalContext';

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const { lifespan, birthdate } = useGlobalContext();

  const stringBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : ''; // Utilitza la data introduïda des del contexte global

  const tooltipLifespan = (
    <Tooltip id="tooltip-lifespan">
      Your lifespan is {lifespan} years
    </Tooltip>
  );


  return (
    <header className="sticky-top">
      <Container fluid>
        <Row className={`position-relative`}>
          <Col className="p-0 position-relative">
            <ProgressBar />
            <div className={`${styles.headerLifespan} position-absolute top-50 start-50 translate-middle`}>
              <OverlayTrigger placement="bottom" overlay={tooltipLifespan}>
                <span>{lifespan}</span>
              </OverlayTrigger>
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
              <Dropdown.Menu className='m-0' style={{ marginTop: '-5px' }}>
                <Dropdown.Item href="#/action-1">
                  <div className="d-flex align-items-center">
                    <BsPersonCircle size={40} className="me-2" />
                    <div>
                      <span className="d-block">Jordi Ciurana</span>
                      <span className="d-block">{stringBirthdate}</span>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <span className="me-2">
                  <BsTranslate />
                  </span>
                  Language
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <span className="me-2">
                    <BsSend />
                  </span>
                  Share
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <span className="me-2">
                  <BsFillInboxFill />

                  </span>
                  Updates
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <span className="me-2">
                  <BsQuestionLg />
                  </span>
                  Help
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <span className="me-2">
                  <BsGearWideConnected />
                  </span>
                  Settings
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
