import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BsPersonCircle, BsSearch, BsGlobeAmericas } from 'react-icons/bs';
import Logo from '../../common/Logo';
import styles from './Nav.module.css';

const NavigationBar = ({ isProfilePage }) => {
  return (
    <Navbar bg="light" expand="lg" className={`sticky-top ${isProfilePage ? styles.smallNavbar : styles.normalNavbar}`}>
      <Container>
        <Navbar.Brand href="#"><Logo /> Vitora</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/vitora/about">About</Nav.Link>
            <Nav.Link href="/vitora/data">Data</Nav.Link>
            <Nav.Link href="/vitora/articles">Articles</Nav.Link>
            <Nav.Link href="/vitora/events">Events</Nav.Link>
            <Nav.Link href="/vitora/donations">Donations</Nav.Link>
            <Nav.Link href="/vitora/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto align-items-center">
            <Nav.Link href="#search" className={styles.navIcon}><BsSearch /></Nav.Link>
            <Nav.Link href="#globe" className={styles.navIcon}><BsGlobeAmericas /></Nav.Link>
            <Nav.Link href="#profile" className={styles.navIcon}><BsPersonCircle /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
