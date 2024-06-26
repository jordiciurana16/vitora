import React, { useState } from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPersonCircle, BsSearch, BsGlobeAmericas, BsSend, BsFillInboxFill, BsQuestionLg, BsGearWideConnected, BsBoxArrowInLeft } from 'react-icons/bs';
import Logo from '../../common/Logo';
import styles from './Nav.module.css';

const NavigationBar = ({ stringBirthdate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return (
    <Navbar bg="light" expand="lg" className="sticky-top py-1">
      <Container>
        <Navbar.Brand as={Link} to="/"><Logo /> Vitora</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/dashboard/" className={styles.navLink}>Timeline</Nav.Link>
          <Nav.Link as={Link} to="/articles" className={styles.navLink}>Articles</Nav.Link>
          <Nav.Link as={Link} to="#" className={styles.navLink}>Resources</Nav.Link>
          <Nav.Link as={Link} to="#" className={styles.navLink}>Donations</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link className={styles.navIcon}>
            <BsSearch />
          </Nav.Link>
          <Nav.Link as={Link} to="#globe" className={styles.navIcon}><BsGlobeAmericas /></Nav.Link>
          <Dropdown 
            show={dropdownOpen} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            align="end"
          >
            <Dropdown.Toggle as={Nav.Link} className={`${styles.navIcon} ${styles.dropdownToggle}`}>
              <BsPersonCircle />
            </Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenu} popperConfig={{ modifiers: [{ name: 'preventOverflow', options: { boundary: 'viewport' } }] }}>
              <Dropdown.Item as={Link} to="#/action-1">
                <div className="d-flex align-items-center">
                  <BsPersonCircle size={35} className="me-2" />
                  <div>
                    <span className="d-block">Jordi Ciurana</span>
                    <span className="d-block">{stringBirthdate}</span>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="#/action-3" className={styles.menuIcon}>
                <span className="me-2"><BsSend /></span> Share
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#/action-3" className={styles.menuIcon}>
                <span className="me-2"><BsFillInboxFill /></span> Updates
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="#" className={styles.menuIcon}><span className="me-2"><BsQuestionLg /></span> Help</Dropdown.Item>
              <Dropdown.Item as={Link} to="#/action-3" className={styles.menuIcon}>
                <span className="me-2"><BsGearWideConnected /></span> Settings
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to="#/action-3" className={styles.menuIcon}>
                <span className="me-2"><BsBoxArrowInLeft /></span> Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
