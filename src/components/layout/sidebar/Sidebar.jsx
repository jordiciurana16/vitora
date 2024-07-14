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
                  <Link Link to="accidents" className={isActive('/vitora/profile/accidents')}>Accidents</Link>
                </NavItem>
                <NavItem>
                <Link Link to="addiction" className={isActive('/vitora/profile/addiction')}>Addiction</Link>
                </NavItem>
                <NavItem>
                <Link Link to="climate" className={isActive('/vitora/profile/climate')}>Climate</Link>
                </NavItem>
                <NavItem>
                <Link Link to="economy" className={isActive('/vitora/profile/economy')}>Economy</Link>
                </NavItem>
                <NavItem>
                <Link Link to="education" className={isActive('/vitora/profile/education')}>Education</Link>
                </NavItem>
                <NavItem>
                <Link Link to="environment" className={isActive('/vitora/profile/environment')}>Environemnt</Link>
                </NavItem>
                <NavItem>
                  <Link to="exercise" className={isActive('/vitora/profile/exercise')}>Exercise</Link>
                </NavItem>
                <NavItem>
                  <Link to="genetic" className={isActive('/vitora/profile/genetic')}>Genetic</Link>
                </NavItem>
                <NavItem>
                <Link to="geography" className={isActive('/vitora/profile/geography')}>Geography</Link>
                </NavItem>
                <NavItem>
                <Link to="lawsandpolicies" className={isActive('/vitora/profile/lawsandpolicies')}>Laws and Policies</Link>
                </NavItem>
                <NavItem>
                <Link to="health" className={isActive('/vitora/profile/health')}>Health</Link>
                </NavItem>
                <NavItem>
                <Link to="nutrition" className={isActive('/vitora/profile/nutririon')}>Nutrition</Link>
                </NavItem>
                <NavItem>
                <Link to="occupation" className={isActive('/vitora/profile/occupation')}>Occupation</Link>
                </NavItem>
                <NavItem>
                  <Link to="stress" className={isActive('/vitora/profile/stress')}>Stress</Link>
                </NavItem>
                <NavItem>
                <Link to="sociallive" className={isActive('/vitora/profile/sociallive')}>Social live</Link>
                </NavItem>
                <NavItem>
                <Link to="warandconflict" className={isActive('/vitora/profile/warandconflict')}>War and Conflict</Link>
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
