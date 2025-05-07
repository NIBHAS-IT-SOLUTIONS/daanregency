import React, { useEffect, useRef } from 'react';
import './HotelGrid.css';

const hotels = [
  {
    name: 'Deluxe Hotel',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    image: 'https://i.postimg.cc/RVRWNxWF/Facade-Night-1.jpg'
  },
  {
    name: 'Hotel Bora',
    description:
      'Etiam euismod tempor leo, in suscipit urna condimentum sed.',
    image: 'https://i.postimg.cc/RVRWNxWF/Facade-Night-1.jpg'
  },
  {
    name: "D'Morvie",
    description:
      'Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa.',
    image: 'https://i.postimg.cc/RVRWNxWF/Facade-Night-1.jpg'
  },
  {
    name: 'Palm Stay',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    image: 'https://i.postimg.cc/RVRWNxWF/Facade-Night-1.jpg'
  }
];

const HotelGrid = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const isMobile = window.innerWidth <= 768;
    if (!isMobile || !container) return;

    let scrollInterval = setInterval(() => {
      container.scrollBy({ left: 1, behavior: 'smooth' });
    }, 3000); // adjust speed here

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="hotel-grid-wrapper py-5">
      <br />
      <h2 className="text-center display-4 mb-5">Featured Hotels</h2>
      <br />
      <div className="hotel-scroll-container mx-5 p-5" ref={scrollRef}>
        {hotels.map((hotel, idx) => (
          <div className="hotel-card card mx-5 " key={idx}>
            <img src={hotel.image} alt={hotel.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{hotel.name}</h5>
              <p className="card-text">{hotel.description}</p>
              <button className="btn btn-dark">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelGrid;
