import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsPersonFillGear, BsPersonCircle, BsGearWideConnected, BsTranslate, BsQuestionLg, BsSend, BsFillInboxFill, BsSearch, BsNewspaper, BsBoxArrowInLeft} from 'react-icons/bs';
import ProgressBar from '../../common/ProgressBar';
import Events from '../../feature/Events'
import styles from './Header.module.css';
import { useGlobalContext } from '../../../hooks/GlobalContext';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [displayedLifespan, setDisplayedLifespan] = useState("0");
  const { lifespan, birthdate } = useGlobalContext();
  const stringBirthdate = birthdate ? new Date(birthdate).toLocaleDateString() : '';
  const duration = 4; // Durada total de l'animació en segons
  const tooltipLifespan = (
    <Tooltip id="tooltip-lifespan">
      Your lifespan is {lifespan} years
    </Tooltip>
  );

  useEffect(() => {
    let start = 0;
    const end = parseFloat(lifespan); // Valor final de lifespan
  
    if (start === end) return;
  
    let totalMilSecDur = parseInt(duration) * 1000; // Durada total de l'animació en milisegons
    let incrementTime = (totalMilSecDur / (end * 10)); // Temps entre increments
  
    let timer = setInterval(() => {
      start += 0.1; // Incrementa en 0.1 en comptes de 1
      // Assegura que el valor no superi el valor final
      if (start > end) start = end;
  
      setDisplayedLifespan(start.toFixed(1)); // Mostra només un decimal
      // S'atura l'animació quan s'arriba al valor final
      if (start === end) clearInterval(timer);
    }, incrementTime);
  
    return () => clearInterval(timer); // Neteja el timer quan el component es desmonta o quan lifespan canvia
  }, [lifespan, duration]);
  

  return (
    <header className="sticky-top">
      <Container fluid>
        <Row className={`position-relative`}>
          <Col className="p-0 position-relative">
            <ProgressBar /> 
            <Events />
            <div className={`${styles.headerLifespan} position-absolute top-50 start-50 translate-middle`}>
            <OverlayTrigger placement="bottom" overlay={tooltipLifespan}>
              <span>{parseFloat(displayedLifespan).toFixed(1)}</span>
            </OverlayTrigger>
            </div>
            <div className="position-absolute top-0 end-0 mt-2 me-3 d-flex">
            <BsSearch size={30} className={`me-3 ${styles.headerIcon}`} />
            <BsNewspaper size={30} className={`me-3 ${styles.headerIcon}`} />

              <div style={{ position: 'relative' }}
                onMouseLeave={() => setDropdownOpen(false)}>
                <BsPersonFillGear
                  size={30}
                  className={`${styles.headerIcon}`}
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
