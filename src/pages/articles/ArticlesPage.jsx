import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import { BsFilterLeft, BsEye, BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/footer/Footer';
import NavigationBar from '../../components/layout/nav/Nav';
import ScrollProgress from '../../components/layout/nav/ScrollProgress';
import ArticleSvg from '../../assets/art.svg';
import articlesData from '../articles/articles.json'; // Importa les dades dels articles

function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Simula la càrrega de dades des d'un fitxer JSON
    setArticles(articlesData);
  }, []);

  return (
    <>
      <NavigationBar isProfilePage={false} />
      <ScrollProgress />
      <div className='articles pt-5'>
        <Container className='img-art'>
          <Row className="mb-4">
            <Col md={6} style={{ position: 'relative' }}>
              <h1 style={{ fontSize: '2.7rem' }}>Articles</h1>
              <h5 style={{ fontSize: '1.5rem', fontWeight: '400' }} className="pb-5">Discover scientific research and insights on factors influencing the life timeline.</h5>
              <div className="d-flex">
                <DropdownButton id="dropdown-basic-button" title="Language" className="me-2 custom-dropdown">
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="Factor" className="me-2 custom-dropdown" style={{ color: 'var(--primary-color)' }}>
                  <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Video</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Podcast</Dropdown.Item>
                </DropdownButton>
                <Button className="me-2 custom-button" style={{ backgroundColor: 'var(--light-color)', color: 'var(--primary-color)', border: '2px solid var(--light-color)' }}>
                  <BsFilterLeft /> Advanced Search
                </Button>
              </div>
            </Col>
            <Col md={6} className="text-center" style={{ position: 'relative' }}>
              <img src={ArticleSvg} alt="Article Thumbnail" style={{ width: '475px', position: 'relative', right: '75px' }} className="img-fluid mx-auto d-block" />
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="d-flex justify-content-between align-items-center pt-4 pb-4">
          <div style={{ fontSize: '25px', color: 'var(--dark-color)' }}>Total results: 150</div>
        </div>
        <Row>
          {articles.map((article, index) => (
            <Col md={6} key={index}>
              <Card className="mb-4" style={{ borderTop: '4px solid var(--primary-color)' }}>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <Card.Title style={{ fontSize: '17px' }} className="mb-0">{article.title}</Card.Title>
                  <small className="text-muted">{article.date}</small>
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between align-items-center">
                    {article.author}
                  </Card.Subtitle>
                  <Card.Text>{article.summary}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/article/${article.id}`}>
                      <Button type="submit">Read More</Button>
                    </Link>
                    <span className="d-flex align-items-center">
                      <BsEye className="me-2" /> {article.readers}
                      <BsBookmark className="ms-3 me-2" /> {article.citations}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-between align-items-center pt-4 pb-4 pagination-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Pagination className="custom-pagination" style={{ display: 'flex' }}>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          <div className="pagination-info" style={{ fontSize: '16px', color: 'var(--dark-color)' }}>
            Results 1-8 out of 150
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ArticlesPage;
