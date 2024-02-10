import React from 'react';
import styles from './Nav.module.css';
import { Container, Row, Col, Nav as BootstrapNav, NavItem } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { BsXLg } from "react-icons/bs";
function Nav() {
  const location = useLocation();
  const isActive = (link) => {
    return location.pathname === link ? styles.activeLink : '';
  };

  return (
    <Container fluid>
      <Row>
        <Col className='p-0'>
          <nav className={`${styles.navContainer} position-sticky `}>
            <BootstrapNav className='flex-column'>
              <div className={`d-flex justify-content-center align-items-center mt-3 ${styles.lifespanItem}`}>
                <Link to="/vitora/" className={`${styles.mainLink} d-flex mb-2 align-items-center `}>
                  <BsXLg size={23} className="me-2 mt-1" /> {/* Afegir l'icona a l'esquerra del link */}
                  <span>Vitora</span>
                </Link>
          </div>
              <div className={styles.navLinks}>
                <NavItem>
                  <Link to="/accidents">Accidents</Link>
                </NavItem>
                <NavItem>
                  <Link to="/addiction">Addiction</Link>
                </NavItem>
                <NavItem>
                  <Link to="/climate">Climate</Link>
                </NavItem>
                <NavItem>
                  <Link to="/economy">Economy</Link>
                </NavItem>
                <NavItem>
                  <Link to="/education">Education</Link>
                </NavItem>
                <NavItem>
                  <Link to="/environment">Environment</Link>
                </NavItem>
                <NavItem >
                  <Link to="/vitora/exercise" className={isActive('/vitora/exercise')}>Exercise</Link>
                </NavItem>
                <NavItem>
                  <Link to="/vitora/genetic" className={isActive('/vitora/genetic')}>Genetic</Link>
                </NavItem>
                <NavItem>
                  <Link to="/geography">Geography</Link>
                </NavItem>
                <NavItem>
                  <Link to="/lawsandpolicies">Laws and Policies</Link>
                </NavItem>
                <NavItem>
                  <Link to="/health">Health</Link>
                </NavItem>
                <NavItem>
                  <Link to="/nutrition">Nutrition</Link>
                </NavItem>
                <NavItem>
                  <Link to="/occupation">Occupation</Link>
                </NavItem>
                <NavItem>
                  <Link to="/sociallive">Social Live</Link>
                </NavItem>
                <NavItem>
                  <Link to="/warandconflict">War and Conflict</Link>
                </NavItem>
              </div>
            </BootstrapNav>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav;
