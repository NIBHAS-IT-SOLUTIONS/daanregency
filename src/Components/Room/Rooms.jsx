import React from 'react'

import './Rooms.css'
function Rooms() {
    const rooms = [
        {
          title: 'Suite Room',
          price: 1500,
          guests: 4,
          bed: '1 King Bed',
          rating: 5,
          image: 'https://i.postimg.cc/Wbp924sr/Suite-5.jpg',
        },
        {
          title: 'Premium Room',
          price: 1750,
          guests: 6,
          bed: '2 Single Beds',
          rating: 4,
          image: 'https://i.postimg.cc/7Zfm2QGZ/Premium-12.jpg',
        },
        {
          title: 'Super delux Room',
          price: 1950,
          oldPrice: 2150,
          discount: '20%',
          guests: 6,
          bed: '2 King Beds',
          rating: 5,
          image: 'https://i.postimg.cc/Gt8tzJcX/Super-Deluxe-20.jpg',
        },
        // {
        //   title: 'Grand Suite Room',
        //   price: 80,
        //   guests: 4,
        //   bed: '1 King Bed',
        //   rating: 5,
        //   image: 'grand-suite.jpg',
        // },
        // {
        //   title: 'Junior Suite Room',
        //   price: 69,
        //   oldPrice: 81.18,
        //   discount: '15%',
        //   guests: 3,
        //   bed: '1 Double Bed',
        //   rating: 5,
        //   image: 'junior-suite.jpg',
        // },
        // {
        //   title: 'Standard Room',
        //   price: 80,
        //   guests: 4,
        //   bed: '1 Double Bed',
        //   rating: 4,
        //   image: 'standard-room.jpg',
        // },
      ];
  return (
    <div className="container py-4">
      <div className="row">
        {rooms.map((room, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="position-relative">
                <img
                  src={`${room.image}`}
                  className="card-img-top"
                  alt={room.title}
                />
                {room.discount && (
                  <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                    {room.discount} OFF
                  </span>
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">{room.title}</h5>
                <p className="card-text mb-1">
                  <i className="bi bi-bed"></i> {room.bed}
                </p>
                <p className="card-text mb-1">
                  <i className="bi bi-people-fill"></i> {room.guests} Guests
                </p>
                <p className="card-text">
                  {'★'.repeat(room.rating)}{'☆'.repeat(5 - room.rating)} 1 Review
                </p>
                <p className="card-text">
                  From{' '}
                  {room.oldPrice && (
                    <span className="text-muted text-decoration-line-through me-1">
                      ₹{room.oldPrice}
                    </span>
                  )}
                  <strong>₹{room.price}</strong>
                </p>
                <a href="https://be.aiosell.com/book/6741980d7b"><button className="btn btn-warning text-white">Book Now</button></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rooms