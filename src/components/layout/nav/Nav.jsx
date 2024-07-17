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
    <Navbar bg="white" expand="lg" className={`${styles.navbar} sticky-top py-1`}>
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Logo />
          <span className="ms-2">Vitora</span>
        </Navbar.Brand>
        <div className="d-flex d-lg-none align-items-center">
          <Nav className="d-flex flex-row align-items-center">
            <Nav.Link className={`${styles.navIcon} mx-2`}>
              <BsSearch />
            </Nav.Link>
            <Nav.Link as={Link} to="#globe" className={`${styles.navIcon} mx-2`}><BsGlobeAmericas /></Nav.Link>
            <Nav.Link className={`${styles.navIcon} mx-2`} onClick={() => setDropdownOpen(!dropdownOpen)}>
              <BsPersonCircle />
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-2" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/dashboard/" className={styles.navLink}>Timeline</Nav.Link>
            <Nav.Link as={Link} to="/articles" className={styles.navLink}>Articles</Nav.Link>
            <Nav.Link as={Link} to="#" className={styles.navLink}>Resources</Nav.Link>
            <Nav.Link as={Link} to="#" className={styles.navLink}>Donations</Nav.Link>
          </Nav>
          <Nav className="ml-auto d-none d-lg-flex align-items-center">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
