import React from 'react';
import './HeroSection.css';
import BookingForm from './BookingForm';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <h1>Apartments for rent in <span className="miami">Miami.</span></h1>
        <p className="price">From $59 per night.</p>
        <p className="subtext">
          Search millions of apartments, houses, and private office suites for rent with our exclusive hotels & apartments app.
        </p>
      </div>
      <div className="hero-right">
        <div className="fade-overlay"></div>
        <img className='img-fluid' src='https://i.postimg.cc/QxVrVMr3/Untitled-design-28.png' alt="hero" />
      </div>

      <BookingForm />
    </div>
  );
};

export default HeroSection;
