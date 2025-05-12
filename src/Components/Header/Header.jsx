import React, { useState, useEffect } from 'react';
import './Header.css';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="header-wrapper">
  <Navbar
    expand="lg"
    className={`main-nav ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}
  >
        <Container>
          <Navbar.Brand href="/" className="fw-bold text-gold fs-3">Hotale.</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto text-center">
              <Nav.Link href='/' className="text-gold fw-bold px-2 nav-link-custom">
                 Home
              </Nav.Link>
              {['About', 'Gallery', 'Facilities', 'Contact'].map((link, idx) => (
                <Nav.Link key={idx} href={`/${link.toLowerCase()}`} className="text-gold fw-bold px-2 nav-link-custom">
                  {link}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex flex-column flex-md-row align-items-center gap-2 mt-3 mt-md-0">
              
              <Button variant="outline-warning" className="fw-bold">BOOK NOW</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
