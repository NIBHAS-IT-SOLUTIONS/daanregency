import React, { useEffect, useState } from 'react';
import './LuxuryRoomsSection.css';

const roomCards = [
  {
    id: 1,
    title: 'Daan Orchid Regency',
    subtitle:"Super Delux Rooms",
    bgClass: 'bg-card-1',
    link: 'https://be.aiosell.com/book/daan-orchid-residency'
  },
  {
    id: 2,
    title: 'Daan Temple Inn',
    subtitle:"Studio AC Rooms",
    bgClass: 'bg-card-2',
    link: 'https://be.aiosell.com/book/6891adaf23'
  },
  {
    id: 3,
    title: 'Daan Inn',
    subtitle:"Premium Family Rooms",
    bgClass: 'bg-card-3',
    link: 'https://be.aiosell.com/book/6741980d7b'
  },
  {
    id: 4,
    title: 'Amala Arcade',
    subtitle:"Double Deluxe Rooms",
    bgClass: 'bg-card-4',
    link: 'https://be.aiosell.com/book/amala-arcade'
  },
];

const LuxuryRoomsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roomCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rooms-carousel-wrapper">
      <div
        className="rooms-carousel"
        style={{
          transform: isMobile
            ? `translateX(-${currentIndex * 100}vw)`
            : 'translateX(0)',
        }}
      >
        {roomCards.map((card) => (
          <div
            key={card.id}
            className={`room-card ${card.bgClass}`}
            style={{ width: isMobile ? '100vw' : '25vw' }}
          >
            <div className="overlay">
              <h4>{card.title}</h4>
              <h6>{card.subtitle}</h6>
              <a href={card.link} className="btn btn-warning mt-2">
                Visit Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryRoomsSection;
