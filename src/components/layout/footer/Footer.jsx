import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'; // Importa Link i useLocation des de react-router-dom
import menuData from '../../../pages/menu/MenuData.json'; // Importa l'arxiu JSON amb les dades

function Footer() {
  const location = useLocation(); // Afegit: obté la ubicació actual

  const [content, setContent] = useState(null); // Afegit: useState per al contingut

  useEffect(() => {
    // La teva lògica aquí per carregar les dades segons la ubicació
    if (location.pathname === '/vitora/menu') {
      if (menuData && menuData.privacitat) {
        setContent(menuData.privacitat);
      }
    } else if (location.pathname === '/vitora/cookies') {
      if (menuData && menuData.cookies) {
        setContent(menuData.cookies);
      }
    } else {
      setContent(null); // Defineix un valor per defecte si la ruta no coincideix
    }
  }, [location]);



  return (
    <footer>
      <Container fluid className={styles.footerContainer}>
        <Row>
          <Col className="text-center pt-5 px-5">
            <Row className={`${styles.footerLinks} justify-content-center`}>
              <Col md={2}>
                <h6>
                <Link to="/vitora/privacy">PRIVACY</Link>
                </h6>
              </Col>
              <Col md={2}>
                <h6>
                <Link to="/vitora/terms">TERMS</Link>
                </h6>
              </Col>
              <Col md={2}>
                <h6>
                <Link to="/vitora/cookies">COOKIES</Link>
                </h6>
              </Col>
              <Col md={2}>
                <h6>
                <Link to="/vitora/help">HELP</Link>
                </h6>
              </Col>
              <Col md={2}>
                <h6>
                <Link to="/vitora/contact">CONTACT</Link>
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="my-5 mx-5" />
        <Row className="mb-4 px-5">
          <Col className="text-center px-5">
            <p className="px-5">
              This application is a prototype under development and is copyrighted.
            </p>
          </Col>
        </Row>
        <Row className={`${styles.copyrightRow} align-items-center px-5 `}>
          <Col xs={6} className="d-flex justify-content-start">
            <div>© 2024 Copyright: All rights reserved.</div>
          </Col>
          <Col xs={6} className="d-flex justify-content-end">
            <div className={`${styles.socialIcons}`}>
              <a href="#">
                <FaFacebook size={30} />
              </a>
              <a href="#" >
                <FaTwitter size={30} />
              </a>
              <a href="#" size={30} >
                <FaInstagram size={30} />
              </a>
              <a href="#">
                <FaYoutube size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;