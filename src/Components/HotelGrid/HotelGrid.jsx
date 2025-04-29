import React from 'react';
import './HotelGrid.css';

const hotels = [
  {
    name: 'Deluxe Hotel',
    description:
      'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue.',
    image: 'https://via.placeholder.com/600x400?text=Hotel+1'
  },
  {
    name: 'Hotel Bora',
    description:
      'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed.',
    image: 'https://via.placeholder.com/600x400?text=Hotel+2'
  },
  {
    name: "D'Morvie",
    description:
      'Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed.',
    image: 'https://via.placeholder.com/600x400?text=Hotel+3'
  }
];

const HotelGrid = () => {
  return (
    <div className="container py-5">
         <h2 className='text-center display-3'>Featured Hotels</h2>
         <br />
      {hotels.map((hotel, idx) => (
        <div
          className="row align-items-center mb-5"
          key={idx}
        >
          {idx % 2 === 0 ? (
            <>
              <div className="col-md-6 mb-3 mb-md-0">
                <img src={hotel.image} alt={hotel.name} className="img-fluid rounded" />
              </div>
              <div className="col-md-6">
                <h5>{hotel.name}</h5>
                <p>{hotel.description}</p>
                <button className="btn btn-dark">Book Now</button>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 order-md-2 mb-3 mb-md-0">
                <img src={hotel.image} alt={hotel.name} className="img-fluid rounded" />
              </div>
              <div className="col-md-6 order-md-1">
                <h5>{hotel.name}</h5>
                <p>{hotel.description}</p>
                <button className="btn btn-dark">Book Now</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default HotelGrid;
