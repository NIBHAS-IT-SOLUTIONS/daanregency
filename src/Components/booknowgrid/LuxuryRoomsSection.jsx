import React, { useEffect, useState } from 'react';
import './LuxuryRoomsSection.css';

const roomCards = [
  {
    id: 1,
    title: 'Deluxe Room',
    bgClass: 'bg-card-1',
    
    link: '/booking/deluxe'
  },
  {
    id: 2,
    title: 'Executive Room',
    bgClass: 'bg-card-2',link: '/booking/deluxe'
  },
  {
    id: 3,
    title: 'Suite Room',
    bgClass: 'bg-card-3',link: '/booking/deluxe'
  },
  {
    id: 4,
    title: 'Premium Room',
    bgClass: 'bg-card-4',link: '/booking/deluxe'
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
              <a href={card.link} className="btn btn-warning mt-2">
                BOOK NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryRoomsSection;
