import React, { useState } from 'react';
import './HeroSection.css';
import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const Carouseldata = [
    
    {
      url:'https://i.postimg.cc/9QdVHnhR/Untitled-design-29.png',
      HotelName:"Daan Orchid Residency",
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
  const [link,setLink]=useState('')
  const[selct,setSelct]=useState('')
const facilities = [
    {
      name:"Daan Regency Thrissur",
      link: 'https://daanregency.com/'
    },
    {
      name:"Amala Arcade Thrissur",
      link: 'https://be.aiosell.com/book/amala-arcade'
    },
    {
      name:"Daan Temple Inn GURUVAYUR",
      link: 'https://be.aiosell.com/book/6891adaf23'
    },
    { name:"Daan Inn Vazhakala",
      link: 'https://be.aiosell.com/book/6741980d7b'
    },
    { name:"Daan Residency Elamakkara",
      link: 'https://daanresidency.in/'
    },
    { name:"Urbn24 Kalamassery",
      link: 'https://urbn24.in/'
    },
    { name:"Daan South Park Ernakulam South",
      link: 'https://www.booking.com/hotel/in/daan-south-park.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIPZGFhbi1zb3V0aC1wYXJrSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuALqjPXBBsACAdICJDI4NDAxYWU1LWFjNDktNDMyMi05OTc2LWZkOTdmY2YxNzNkYtgCBOACAQ&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&'
    },
    { name:"Daan Orchid residency Kottayam",

      link: 'https://be.aiosell.com/book/daan-orchid-residency'
    },
    { name:"Meridian By Daan Trivandrum",
      link: 'https://www.booking.com/hotel/in/meridian-by-daan.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIQbWVyaWRpYW4tYnktZGFhbkgzWANobIgBAZgBCbgBF8gBDNgBA-gBAfgBA4gCAagCA7gCzpX1wQbAAgHSAiRiY2JiYmUzMy1jOGJmLTRhMzUtODJmYy00ZjQ3Y2E1OWU2NDHYAgTgAgE&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&'
    }
  ];
   const [selectedLink, setSelectedLink] = useState('');

  const handleChange = (e) => {
    const index = e.target.value;
    if (index !== '') {
      setSelectedLink(facilities[index].link);
    } else {
      setSelectedLink('');
    }
  };
const today = new Date().toISOString().split('T')[0];
  const handleClick = () => {
    if (selectedLink) {
      window.open(selectedLink, '_blank');
    }
  };
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
                      <Form.Select onChange={handleChange} defaultValue="">
                        <option value="">-- Select Hotel--</option>
                      {facilities.map((facility, index) => (
                        <option key={index} value={index}>
                          {facility.name}
                        </option>
                      ))}
                      </Form.Select>
                    </Col>
                    <Col xs={6} md={6} lg={2}>
                      <Form.Label>Check In</Form.Label>
                      <Form.Control type="date" defaultValue={today} />
                    </Col>
                    <Col xs={6} md={6} lg={2}>
                      <Form.Label>Check Out</Form.Label>
                      <Form.Control type="date" defaultValue={today} />
                    </Col>
                    <Col xs={6} md={6} lg={2}>
                      <Form.Label>Room</Form.Label>
                      <Form.Control type="number" defaultValue={1} min={1} />
                    </Col>
                    
                    <Col xs={6} lg={3} className="d-grid align-items-end">
                      <Button variant="warning lg" className="fw-bold" onClick={handleClick} ><Link className='text-black text-decoration-none'>Check Availability</Link></Button>
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
