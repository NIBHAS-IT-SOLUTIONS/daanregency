import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import logo from '../../Images/logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const toggleNavbar = () => {
    setShowMenu(!showMenu);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#navbarNav') && !event.target.closest('.navbar-toggler')) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav
      className={`navbar navbar-dark w-100 z-3 position-fixed top-0 px-3 px-md-5 ${scrolled ? 'scrolled-navbar' : 'transparent-navbar'
        }`}
    >
      <div className="container-fluid px-0">

        <a className="navbar-brand d-flex align-items-center gap-2" href="/">
          <img src={logo} alt="logo"  />
          <h2 className="fw-bold text-light sm-fs-5 md-fs-1 lg-fs-1">Daan Hotels & Resorts</h2>
        </a>

        {/* Contact Info + CTA shown next to toggler */}
        <div className="d-flex align-items-center gap-3 ms-auto">
        <button className="btn btn-warning btn-lg btn-block text-white d-none d-sm-inline">Book Now</button>
          <a href="tel:8086094884" className="text-white text-decoration-none small d-none d-sm-inline">
            📞 8086094884
          </a>
          <a href="mailto:mail.dan@gmail.com" className="text-white text-decoration-none small d-none d-sm-inline">
            ✉️ mail.dan@gmail.com
          </a>
          

          {/* Hamburger Toggle – always visible */}
          {/* <button
            className="navbar-toggler border-0 ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <button
  className="navbar-toggler border-0 ms-2"
  type="button"
  onClick={() => setShowMenu(!showMenu)}
>
  <span className="navbar-toggler-icon"></span>
</button>
        </div>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-end">
          <li className="nav-item d-sm-none text-center mt-3">
              <button className="btn btn-warning btn-sm text-white w-100">Book Now</button>
              <div className="mt-2 small text-white">
                📞 8086094884 <br />
                ✉️ mail.dan@gmail.com
              </div>
            </li>
            {['About', 'Facilities', 'Gallery' ,'Contact'].map((item) => (//, 'Gallery'
              <li key={item} className="nav-item mx-2">
                <a className="nav-link text-white fw-medium" href={`/${item.toLowerCase()}`}>
                  {item}
                </a>
               
              </li>
            ))}

            
          </ul>
        </div>
      </div>
    </nav>
  );
};




