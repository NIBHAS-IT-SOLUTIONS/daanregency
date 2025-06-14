import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import newlogo from '../../Images/logodaan.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="header-wrapper" ref={navRef}>
      <div className="topile-bar">
    <span>📞 +1-634-567-34</span>
    <span>We're in Trivandrum , Kottayam , Kochi , Thrissur , Guruvayoor</span>
    <span>✉️ info@hotale.co</span>
  </div>
      <Navbar
        expand="lg"
        expanded={menuOpen}
        variant={scrolled || menuOpen ? 'light' : 'dark'}
        className={`main-nav ${
          menuOpen ? 'navbar-open' : scrolled ? 'navbar-scrolled' : 'navbar-top'
        }`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3 py-4 px-3">
            <img src={newlogo} width={150} alt="" srcSet="" />
          </Navbar.Brand>
          <Navbar.Toggle onClick={handleToggle} />
          <Navbar.Collapse>
            <Nav className="mx-auto text-center">
              <Nav.Link as={Link} to="/" className="fw-bold px-2 nav-link-custom">
                Home
              </Nav.Link>
              {['About', 'Gallery', 'Facilities', 'Contact'].map((link, idx) => (
                <Nav.Link
                  as={Link}
                  key={idx}
                  to={`/${link.toLowerCase()}`}
                  className="text-gold fw-bold px-2 nav-link-custom"
                >
                  {link}
                </Nav.Link>
              ))}
            </Nav>
            {/* <div className="d-flex flex-column flex-md-row align-items-center gap-2 mt-3 mt-md-0">
              <Link to={'https://be.aiosell.com/book/6741980d7b'}><Button variant="outline-warning" className="fw-bold">
                BOOK NOW
              </Button></Link>
            </div> */}
          </Navbar.Collapse>
        </Container>      
      </Navbar>

    </div>
  );
};

export default Header;
