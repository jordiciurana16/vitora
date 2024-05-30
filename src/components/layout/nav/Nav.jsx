import React, { useState } from 'react';
import { Container, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { BsPersonCircle, BsSearch, BsGlobeAmericas, BsSend, BsFillInboxFill, BsQuestionLg, BsGearWideConnected, BsBoxArrowInLeft } from 'react-icons/bs';
import Logo from '../../common/Logo';
import styles from './Nav.module.css';

const NavigationBar = ({ stringBirthdate }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/vitora/"><Logo /> Vitora</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/vitora/data" className={styles.navLink}>Data</Nav.Link>
            <Nav.Link href="/vitora/articles" className={styles.navLink}>Articles</Nav.Link>
            <Nav.Link href="/vitora/events" className={styles.navLink}>Events</Nav.Link>
            <Nav.Link href="/vitora/donations" className={styles.navLink}>Donations</Nav.Link>
            <Nav.Link href="/vitora/resources" className={styles.navLink}>Resources</Nav.Link>
          </Nav>
          <Nav className="ml-auto align-items-center">
            <Nav.Link className={styles.navIcon}>
              <BsSearch />
            </Nav.Link>
            <Nav.Link href="#globe" className={styles.navIcon}><BsGlobeAmericas /></Nav.Link>
            <Dropdown show={dropdownOpen} onToggle={toggleDropdown} align="end">
              <Dropdown.Toggle as={Nav.Link} className={`${styles.navIcon} ${styles.dropdownToggle}`} onClick={toggleDropdown}>
                <BsPersonCircle />
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.dropdownMenu} popperConfig={{ modifiers: [{ name: 'preventOverflow', options: { boundary: 'viewport' } }] }}>
                <Dropdown.Item href="#/action-1">
                  <div className="d-flex align-items-center">
                    <BsPersonCircle size={35} className="me-2" />
                    <div>
                      <span className="d-block">Jordi Ciurana</span>
                      <span className="d-block">{stringBirthdate}</span>
                    </div>
                  </div>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3" className={styles.menuIcon}>
                  <span className="me-2"><BsSend /></span> Share
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className={styles.menuIcon}>
                  <span className="me-2"><BsFillInboxFill /></span> Updates
                </Dropdown.Item>
                <Dropdown.Item href="#" className={styles.menuIcon}><span className="me-2"><BsQuestionLg /></span> Help</Dropdown.Item>
                <Dropdown.Item href="#/action-3" className={styles.menuIcon}>
                  <span className="me-2"><BsGearWideConnected /></span> Settings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3" className={styles.menuIcon}>
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
