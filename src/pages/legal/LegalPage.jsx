import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Form, InputGroup } from 'react-bootstrap';
import styles from './LegalPages.module.css';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsSearch } from 'react-icons/bs';
import legalData from './LegalData.json'; // Importa l'arxiu JSON amb les dades

const LegalPage = () => {
  const [legalContent, setLegalContent] = useState(null);

  useEffect(() => {
    // Obté la ruta actual
    const currentPath = window.location.pathname;
  
    // Carrega el contingut corresponent segons la ruta
    if (currentPath === '/vitora/privacy' && legalData.privacy) {
      setLegalContent(legalData.privacy);
    } else if (currentPath === '/vitora/cookies' && legalData.cookies) {
      setLegalContent(legalData.cookies);
     } else if (currentPath === '/vitora/help' && legalData.help) {
      setLegalContent(legalData.help);
    }
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.querySelectorAll('aside a').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('aside a').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <Container fluid className={`px-5 py-4 ${styles.legalPages}`}>
      <Row className={`px-5 `}>
        <Col>
          <header>
            <Link to="/vitora/">
              <BsArrowLeft className={`me-2 ${styles.backIcon}`} />
            </Link>
            <div className={`d-flex align-items-center justify-content-center flex-column ${styles.titleContainer}`}>
            <h1 className={`mb-2 `}>{legalContent && legalContent.titol}</h1>
            </div>
            <hr/>
          </header>
        </Col>
      </Row>
      {legalContent && (
        <Row className='px-5 pt-3'>
          <Col xs={9} className='pe-5'>
            {legalContent.seccions.map((seccio) => (
              <section id={seccio.id} key={seccio.id}>
                <h3>{seccio.capcalera}</h3>
                <p>{seccio.text}</p>
              </section>
            ))}
          </Col>
          <Col xs={3}>
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><BsSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
        />
      </InputGroup>            
        <aside>
              <h4 className="mb-3">Índex</h4>
              <ListGroup>
                {legalContent.seccions.map((seccio) => (
                  <ListGroup.Item key={seccio.id} action href={`#${seccio.id}`}>
                    {seccio.capcalera}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </aside>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default LegalPage;
