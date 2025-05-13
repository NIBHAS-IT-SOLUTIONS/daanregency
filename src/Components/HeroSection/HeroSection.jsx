import React from 'react';
import './HeroSection.css';
import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';

const HeroSection = () => {
  const Carouseldata = [
    {
      url:'https://i.postimg.cc/QxVrVMr3/Untitled-design-28.png',
      HotelName:"Urbn 24 Daris",
      description:"for the elite passionate about luxury & comfort"
    },
    {
      url:'https://i.postimg.cc/9QdVHnhR/Untitled-design-29.png',
      HotelName:"Orchid residency",
      description:"for the elite passionate about luxury & comfort"
    }, {
      url:'https://i.postimg.cc/QxVrVMr3/Untitled-design-28.png',
      HotelName:"Urbn 24 Daris",
      description:"for the elite passionate about luxury & comfort"
    },

  ];

  return (
    <Carousel fade controls={true} indicators={true} interval={3000} style={{ minHeight: '100vh' }}>
      {Carouseldata.map((data, i) => (
        <Carousel.Item key={i}>
          <div className="carousel-bg" style={{ backgroundImage: `url(${data.url})` }}>
            <div className="overlay d-flex align-items-center">
              <Container className="text-center text-white">
                <h1 className="hero-title">{data.HotelName}</h1>
                <p className="hero-subtitle">
                  Hotale has a series of lavish and comfortable hotels and residences in Asia, Europe, and America.
                  <span className="text-warning"> Check Availability.</span>
                </p>
<br /><br /><br />
                <Form className="room-search p-4 rounded bg-dark text-white mt-5">
                  <Row className="g-2">
                  <Col xs={12} md={6} lg={3}>
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
                      <Button variant="warning lg" className="fw-bold">SEARCH ROOM</Button>
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
