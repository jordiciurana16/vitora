// Header.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsPersonFillGear, BsPersonCircle, BsGearWideConnected, BsTranslate, BsQuestionLg, BsSend, BsFillInboxFill, BsSearch, BsNewspaper, BsBoxArrowInLeft} from 'react-icons/bs';
import ProgressBar from '../../common/ProgressBar';
import Events from '../../feature/Events'
import styles from './Header.module.css';
import { useGlobalContext } from '../../../hooks/GlobalContext';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { lifespan, birthdate } = useGlobalContext();
  const stringBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : '';
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
            <Events />
            <div className={`${styles.headerLifespan} position-absolute top-50 start-50 translate-middle`}>
              <OverlayTrigger placement="bottom" overlay={tooltipLifespan}>
                <span>{lifespan}</span>
              </OverlayTrigger>
            </div>
            <div className="position-absolute top-0 end-0 mt-2 me-3 d-flex">
              <BsSearch size={30} className="me-3" />
              <BsNewspaper size={30} className="me-3" />
              <div style={{ position: 'relative' }}
                onMouseLeave={() => setDropdownOpen(false)}>
                <BsPersonFillGear
                  size={30}
                  onMouseEnter={() => setDropdownOpen(true)}
                />
                {dropdownOpen && (
                  <Dropdown.Menu
                    show={dropdownOpen}
                    onToggle={setDropdownOpen}
                    style={{ position: 'absolute', right: '0', top: '100%' }}
                  >
                    <Dropdown.Item href="#/action-1">
                      <div className="d-flex align-items-center">
                        <BsPersonCircle size={40} className="me-2" />
                        <div>
                          <span className="d-block">Jordi Ciurana</span>
                          <span className="d-block">{stringBirthdate}</span>
                        </div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Divider />
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
                    <Dropdown.Item href="#">
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
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">
                    <span className="me-2">
                        <BsBoxArrowInLeft />
                      </span>
                      Log out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;