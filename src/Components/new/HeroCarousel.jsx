import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() =>
      setIndex((prev) => (prev + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel" style={{ backgroundImage: `url(${images[index]})` }}>
      <div className="overlay">
        <h1>Book Your Vacation</h1>
        <p>Explore new experiences with Hotale</p>
      </div>
    </div>
  );
};

export default HeroCarousel;
