import React from 'react';
import styles from './Sidebar.module.css';
import { Container, Row, Col, Nav as BootstrapNav, NavItem } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isVisible }) {
  const location = useLocation();
  const isActive = (link) => {
    return location.pathname === link ? styles.activeLink : '';
  };

  return (
    <Container fluid className={` ${styles.sidebarContainer} ${isVisible ? styles.visible : styles.hidden}`}>
      <Row>
        <Col className='p-0'>
          <nav className={`${styles.navContainer} pt-4 position-sticky`}>
            <BootstrapNav className={`flex-column ${styles.navLinks}`}>
              <NavItem>
                <Link to="/dashboard/accidents" className={isActive('/dashboard/accidents')}>Accidents</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/addiction" className={isActive('/dashboard/addiction')}>Addiction</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/climate" className={isActive('/dashboard/climate')}>Climate</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/economy" className={isActive('/dashboard/economy')}>Economy</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/education" className={isActive('/dashboard/education')}>Education</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/environment" className={isActive('/dashboard/environment')}>Environment</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/exercise" className={isActive('/dashboard/exercise')}>Exercise</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/genetic" className={isActive('/dashboard/genetic')}>Genetic</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/geography" className={isActive('/dashboard/geography')}>Geography</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/lawsandpolicies" className={isActive('/dashboard/lawsandpolicies')}>Laws and Policies</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/health" className={isActive('/dashboard/health')}>Health</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/nutrition" className={isActive('/dashboard/nutrition')}>Nutrition</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/occupation" className={isActive('/dashboard/occupation')}>Occupation</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/stress" className={isActive('/dashboard/stress')}>Stress</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/sociallive" className={isActive('/dashboard/sociallive')}>Social live</Link>
              </NavItem>
              <NavItem>
                <Link to="/dashboard/warandconflict" className={isActive('/dashboard/warandconflict')}>War and Conflict</Link>
              </NavItem>
            </BootstrapNav>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
