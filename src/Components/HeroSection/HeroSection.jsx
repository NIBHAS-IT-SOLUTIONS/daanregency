import React from 'react';
import './HeroSection.css';
import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';

const HeroSection = () => {
  const images = [
    'https://i.postimg.cc/QxVrVMr3/Untitled-design-28.png',
    'https://i.postimg.cc/9QdVHnhR/Untitled-design-29.png',
    'https://i.postimg.cc/QxVrVMr3/Untitled-design-28.png'
  ];

  return (
    <Carousel fade controls={true} indicators={true} interval={3000} style={{ minHeight: '100vh' }}>
      {images.map((img, i) => (
        <Carousel.Item key={i}>
          <div className="carousel-bg" style={{ backgroundImage: `url(${img})` }}>
            <div className="overlay d-flex align-items-center">
              <Container className="text-center text-white">
                <h1 className="hero-title">Hotel for the elite passionate about luxury & comfort</h1>
                <p className="hero-subtitle">
                  Hotale has a series of lavish and comfortable hotels and residences in Asia, Europe, and America.
                  <span className="text-warning"> Check Availability.</span>
                </p>

                <Form className="room-search p-4 rounded bg-dark text-white mt-4">
                  <Row className="g-3">
                  <Col xs={12} md={6} lg={2}>
                    <Form.Label>Hotel</Form.Label>
                      <Form.Select>
                        <option>Urbn 24</option>
                        <option>2</option>
                      </Form.Select>
                    </Col>
                    <Col xs={6} md={6} lg={2}>
                      <Form.Label>Check In</Form.Label>
                      <Form.Control type="date" defaultValue="2025-05-12" />
                    </Col>
                    <Col xs={6} md={6} lg={2}>
                      <Form.Label>Check Out</Form.Label>
                      <Form.Control type="date" defaultValue="2025-05-13" />
                    </Col>
                    <Col xs={6} md={6} lg={2}>
                      <Form.Label>Room</Form.Label>
                      <Form.Select>
                        <option>1</option>
                        <option>2</option>
                      </Form.Select>
                    </Col>
                    
                    <Col xs={6} lg={3} className="d-grid align-items-end">
                      <Button variant="warning" className="fw-bold">SEARCH ROOM</Button>
                    </Col>
                  </Row>
                </Form>
              </Container>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;
