import React from 'react';
import { Navbar, Container, Nav, Card, Button, Row, Col, Badge } from 'react-bootstrap';

function App() {
  const cardsData = [
    {
      id: 1,
      title: 'Frontend Development',
      badge: 'React JS',
      variant: 'primary',
      description:
        'Master the art of building responsive, component-driven user interfaces using modern React features and hooks.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Backend Engineering',
      badge: 'Node & APIs',
      variant: 'success',
      description:
        'Design scalable RESTful APIs, manage databases securely, and handle robust server architectures.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      badge: 'Deployment',
      variant: 'info',
      description:
        'Automate deployments, orchestrate cloud containers, and ensure maximum reliability for your web applications.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <React.Fragment>
      <div className="App" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm py-3">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold fs-4 text-uppercase tracking-wide">
              ⚡ MyFirstReactJS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="active px-3">Home</Nav.Link>
                <Nav.Link href="#courses" className="px-3">Courses</Nav.Link>
                <Nav.Link href="#about" className="px-3">About</Nav.Link>
                <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <Container className="py-5">
          {/* Heading */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">
              Explore Modern Web Development
            </h1>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '650px' }}>
              Welcome to my first React.js application with React-Bootstrap. Browse the featured tracks below to kickstart your coding journey.
            </p>
          </div>

          {/* 3 Cards */}
          <Row className="g-4 justify-content-center">
            {cardsData.map((card) => (
              <Col key={card.id} xs={12} md={6} lg={4}>
                <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={card.image}
                    alt={card.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column p-4">
                    <div className="mb-2">
                      <Badge bg={card.variant} className="px-2 py-1">
                        {card.badge}
                      </Badge>
                    </div>
                    <Card.Title className="fw-bold fs-5 mb-2">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {card.description}
                    </Card.Text>
                    <Button variant="outline-dark" className="mt-3 w-100 rounded-pill fw-semibold">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Footer */}
        <footer className="text-center py-4 text-muted border-top mt-5 bg-white">
          <Container>
            <small>© {new Date().getFullYear()} MyFirstReactJS. Built with React & React-Bootstrap.</small>
          </Container>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
