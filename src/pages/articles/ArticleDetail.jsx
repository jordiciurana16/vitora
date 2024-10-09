import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '../../components/layout/footer/Footer';
import NavigationBar from '../../components/layout/nav/Nav';
import ScrollProgress from '../../components/layout/nav/ScrollProgress';
import articlesData from '../articles/articles.json';
import BarChart from '../../utils/charts/BarChart'; // Importar el component BarChart

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articlesData.find((article) => article.id === parseInt(id));
    setArticle(foundArticle);
  }, [id]);

  if (!article || !article.content) {
    return (
      <>
        <NavigationBar isProfilePage={false} />
        <ScrollProgress />
        <Container className='pt-5'>
          <Row>
            <Col className="text-center">
              <h2>Article not found</h2>
              <p>The article you are looking for does not exist or is missing some data.</p>
              <Link to="/articles">
                <Button variant="primary">Back to Articles</Button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }

  const renderContent = (content) => {
    return content.map((item, index) => {
      switch (item.type) {
        case 'paragraph':
          return <p key={index} style={{ textAlign: 'justify' }}>{item.text}</p>;
        case 'image':
          return (
            <div key={index} className="text-center my-4">
              <img src={item.src} alt={item.alt} className="img-fluid" style={{ maxWidth: '100%' }} />
              {item.caption && <p className="text-muted mt-2">{item.caption}</p>}
            </div>
          );
        case 'chart':
          return (
            <div key={index} className="text-center my-4">
              <div style={{ width: '70%', height: '300px' }}>
                <BarChart chartData={item.chartData} />
              </div>
              {item.caption && <p className="text-muted mt-2">{item.caption}</p>}
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>
      <NavigationBar isProfilePage={false} />
      <ScrollProgress />
      <Container className='py-4'>
        <Row>
          <Col>
            <h1>{article.title}</h1>
            <h5 className="text-muted">{article.author}</h5>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            {article.summary && <p style={{ textAlign: 'justify' }}>{article.summary}</p>}
            {renderContent(article.content)}
          </Col>
          <Col md={4}>
            <Card className="position-sticky" style={{ top: '20px' }}>
              <Card.Body>
                <Card.Title>Related Articles</Card.Title>
                <ul className="list-unstyled">
                  <li><Link to="/article/2">Air Pollution and Its Effect on Human Longevity</Link></li>
                  <li><Link to="/article/3">Advances in Cancer Treatment: Extending Life</Link></li>
                  <li><Link to="/article/4">The Role of Exercise in Longevity</Link></li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ArticleDetail;
