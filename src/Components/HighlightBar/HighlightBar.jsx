import React from 'react';
import './HighlightBar.css';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
const HighlightBar = () => {
  return (
    // 
    <div className="header-wrapper bg-transparent">
    <div className="top-bar px-3 py-2">
      <Container fluid className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <a href="mailto:info@hotale.co" className="me-3 small text-decoration-none">info@daanregency.com</a>
        </div>

        <div className="d-flex align-items-center small gap-1 mt-2 mt-md-0">
        <span className="text-dark small">+91-925-330-6100</span>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default HighlightBar;
