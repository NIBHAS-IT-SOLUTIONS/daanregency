import React, { useEffect, useState } from 'react';
import './HighlightBar.css';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
const HighlightBar = () => {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // you can adjust this value
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // 
    <div className="header-wrapper1">
    <div className={scrolled ? 'highlighttop-bar-scrolled' : 'highlighttop-bar'}>
      {/* <Container fluid> */}
        <div>
         <p className='highlight' > Available in Kochi , Trivandrum , Thrissur , Kottayam</p>
        </div>
      {/* </Container> */}
    </div>
    </div>
  );
};

export default HighlightBar;