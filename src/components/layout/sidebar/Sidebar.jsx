import React from 'react';
import styles from './Sidebar.module.css';
import { Container, Row, Col, Nav as BootstrapNav, NavItem } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../common/Logo'; // Importa el component del logotip aquí

function Sidebar() {
  const location = useLocation();
  const isActive = (link) => {
    return location.pathname === link ? styles.activeLink : '';
  };

  return (
    <Container fluid>
      <Row>
        <Col className='p-0'>
          <nav className={`${styles.navContainer} position-sticky pt-3`}>
            <BootstrapNav className='flex-column'>
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
                <NavItem>
                  <Link to="exercise" className={isActive('/vitora/profile/exercise')}>Exercise</Link>
                </NavItem>
                <NavItem>
                  <Link to="genetic" className={isActive('/vitora/profile/genetic')}>Genetic</Link>
                </NavItem>
                <NavItem>
                  <Link to="geography">Geography</Link>
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

export default Sidebar;
