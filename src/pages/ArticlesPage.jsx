import React from 'react';
import { Container, Row, Col, Button, Card, Dropdown, DropdownButton, Pagination } from 'react-bootstrap';
import { BsFilterLeft, BsX, BsEye, BsBookmark } from 'react-icons/bs'; // Importar les icones de react-icons
import Footer from '../components/layout/footer/Footer';
import NavigationBar from '../components/layout/nav/Nav';
import ScrollProgress from '../components/layout/nav/ScrollProgress';
import SkySvg from '../assets/sky.svg';
import ArticleSvg from '../assets/art.svg'

function ArticlesPage() {
  const articles = [
    { 
      "title": "The Impact of Obesity on Life Expectancy",
      "author": "Dr. John Smith",
      "date": "2024",
      "readers": 2300,
      "citations": 45,
      "summary": "This article explores the effects of obesity on life expectancy, highlighting the health risks and potential interventions.",
      "imageUrl": "https://via.placeholder.com/150"
    },
    { 
      "title": "Air Pollution and Its Effect on Human Longevity",
      "author": "Dr. Emily Johnson",
      "date": "2024",
      "readers": 1980,
      "citations": 38,
      "summary": "An in-depth analysis of how air pollution reduces life expectancy and what measures can be taken to mitigate its impact.",
      "imageUrl": "https://via.placeholder.com/150"
    },
    { 
      "title": "Advances in Cancer Treatment: Extending Life",
      "author": "Dr. William Lee",
      "date": "2024",
      "readers": 2500,
      "citations": 60,
      "summary": "This article discusses the latest advancements in cancer treatment and their potential to extend life expectancy.",
      "imageUrl": "https://via.placeholder.com/150"
    },
    { 
      "title": "The Role of Exercise in Longevity",
      "author": "Dr. Laura Adams",
      "date": "2024",
      "readers": 2750,
      "citations": 55,
      "summary": "Examines the correlation between regular physical activity and increased life expectancy, supported by scientific studies.",
      "imageUrl": "https://via.placeholder.com/150"
    },
    { 
      "title": "Dietary Habits and Their Impact on Lifespan",
      "author": "Dr. Michael Brown",
      "date": "2024",
      "readers": 2200,
      "citations": 50,
      "summary": "Explores how different dietary habits affect life expectancy, with a focus on nutrition and health.",
      "imageUrl": "https://via.placeholder.com/150"
    },
    { 
      "title": "Mental Health and Longevity: A Complex Relationship",
      "author": "Dr. Sarah Davis",
      "date": "2024",
      "readers": 1900,
      "citations": 40,
      "summary": "Investigates the impact of mental health on life expectancy, considering both positive and negative factors.",
      "imageUrl": "https://via.placeholder.com/150"
    },
    { 
      "title": "Genetics and Life Expectancy: What We Know So Far",
      "author": "Dr. Robert Wilson",
      "date": "2024",
      "readers": 2100,
      "citations": 48,
      "summary": "A review of current research on the genetic factors that influence life expectancy and potential future discoveries.",
      "imageUrl": "https://via.placeholder.com/150"
    },
    { 
      "title": "Public Health Policies and Their Effect on Lifespan",
      "author": "Dr. Alejandra Solar",
      "date": "2024",
      "readers": 2400,
      "citations": 52,
      "summary": "Analyzes how public health policies can impact life expectancy on a population level.",
      "imageUrl": "https://via.placeholder.com/150"
    },
  ]
  ;

  return (
    <>
      <NavigationBar isProfilePage={false} />
      <ScrollProgress />
      <div className='articles pt-5'>
      <Container className='img-art'>
  <Row className="mb-4 ">
    <Col md={6} style={{ position: 'relative' }}>
      <h1 style={{ fontSize: '2.7rem' }}>Articles</h1>
      <h5 style={{ fontSize: '1.5rem', fontWeight:'400' }} className="pb-5">Discover scientific research and insights on factors influencing the life timeline.</h5>
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
          <DropdownButton id="dropdown-sort-button" title="Sort by" className="sort-toggle">
            <Dropdown.Item href="#/sort-time">Time</Dropdown.Item>
            <Dropdown.Item href="#/sort-popularity">Popularity</Dropdown.Item>
            <Dropdown.Item href="#/sort-alphabet">Alphabet</Dropdown.Item>
          </DropdownButton>
        </div>
        <Row>
          {articles.map((article, index) => (
            <Col md={6} key={index}>
              <Card className="mb-4" style={{ borderTop: '4px solid var(--primary-color)' }}>
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <Card.Title  style={{ fontSize: '17px'}} className="mb-0">{article.title}</Card.Title>
                  <small className="text-muted">{article.date}</small>
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between align-items-center">
                    {article.author}
                  </Card.Subtitle>
                  <Card.Text>{article.summary}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button type="submit">Read More</Button>
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
