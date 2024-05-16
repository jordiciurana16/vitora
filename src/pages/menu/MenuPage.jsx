import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, Form, InputGroup, Accordion, Card } from 'react-bootstrap';
import styles from './MenuPages.module.css';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsSearch } from 'react-icons/bs';
import menuData from './MenuData.json';

const MenuPage = () => {
  const [menuContent, setMenuContent] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === '/vitora/privacy' && menuData.privacy) {
      setMenuContent(menuData.privacy);
    } else if (currentPath === '/vitora/cookies' && menuData.cookies) {
      setMenuContent(menuData.cookies);
    } else if (currentPath === '/vitora/terms' && menuData.terms) {
      setMenuContent(menuData.terms);
    } else if (currentPath === '/vitora/help' && menuData.help) {
      setMenuContent(menuData.help);
    } else if (currentPath === '/vitora/contact' && menuData.contact) {
      setMenuContent(menuData.contact);
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
    <Container fluid className={`px-5 py-4 ${styles.menuPages}`}>
      <Row className={`px-5 `}>
        <Col>
          <header>
            <Link to="/vitora/">
              <BsArrowLeft className={`me-2 ${styles.backIcon}`} />
            </Link>
            <div className={`d-flex align-items-center justify-content-center flex-column ${styles.titleContainer}`}>
              <h1 className={`mb-2 `}>{menuContent && menuContent.titol}</h1>
            </div>
            <hr/>
          </header>
        </Col>
      </Row>
      {menuContent && (
        <Row className='px-5 pt-3'>
          <Col xs={9} className='pe-5'>
            {menuContent.seccions.map((seccio) => (
              <section id={seccio.id} key={seccio.id}>
                <h3>{seccio.capcalera}</h3>
                <p>{seccio.text}</p>
                {seccio.id === 'faq' && (
                  <Accordion defaultActiveKey="0" className='mb-4'>
                    {seccio.acordio.map((item, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header >{item.pregunta}</Accordion.Header>
                        <Accordion.Body>{item.resposta}</Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                )}
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
                {menuContent.seccions.map((seccio) => (
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

export default MenuPage;