import React from 'react';
import './HeroSection.css';
import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';

const HeroSection = () => {
  const Carouseldata = [
    
    {
      url:'https://i.postimg.cc/9QdVHnhR/Untitled-design-29.png',
      HotelName:"Orchid Residency",
      description:"Stay in Comfort. Leave with Memories."
    }, {
      url:'https://i.postimg.cc/QxVrVMr3/Untitled-design-28.png',
      HotelName:"Orchid Residency",
      description:"A Place for Every Family Moment."
    },{
      url:'https://i.postimg.cc/NFbVD9k8/ABI1677-HDR-Edit.jpg',
      HotelName:"Daan Inn",
      description:"for the elite passionate about luxury & comfort"
    },{
      HotelName:"Urbn 24",
      description:"In the Heart of the City, With You in Mind",
      url:'https://i.postimg.cc/WpFc6SBt/Untitled-design-34.png'
    }

  ];

  return (
    <Carousel fade controls={true} indicators={false} interval={3000} style={{ minHeight: '100vh' }}>
      {Carouseldata.map((data, i) => (
        <Carousel.Item key={i}>
          <div className="carousel-bg" style={{ backgroundImage: `url(${data.url})` }}>
            <div className="overlay d-flex align-items-center">
              <Container className="text-center text-white mt-5 py-5" >
              <br />
                <h1 className="hero-title">{data.HotelName}</h1>
                <p className="hero-subtitle">
                  {data.description}
                  <span className="text-warning"> Check Availability.</span>
                </p>
<br /><br /><br />
                <Form className="room-search p-4 rounded bg-dark text-white">
                  <Row className="g-2">
                  <Col xs={12} md={6} lg={3}>
                    <Form.Label>Hotel</Form.Label>
                      <Form.Select>
                        <option>Urbn 24</option>
                        <option>Yaad Inn</option>
                        <option>Temple Inn</option>
                        <option>Daan Residency</option>
                        <option>Daan Inn</option>
                        <option>Orchid Residency</option>
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
                      <Form.Control type="number" defaultValue={1} min={1} />
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
