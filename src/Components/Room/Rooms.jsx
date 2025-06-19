import React from 'react'

import './Rooms.css'
function Rooms() {
    const rooms = [
        {
          title: 'Business Suite ',
          price: 5000,
         
          rating: 5,
          image: 'https://i.postimg.cc/Wbp924sr/Suite-5.jpg',
        },
        {
          title: 'Premium Room',
          price: 2800,
          
          rating: 5,
          image: 'https://i.postimg.cc/7Zfm2QGZ/Premium-12.jpg',
        },
        {
          title: 'Super deluxe Room',
          price: 1950,
          
          rating: 5,
          image: 'https://i.postimg.cc/Gt8tzJcX/Super-Deluxe-20.jpg',
        },
        {
          title: 'Standard Room',
          price: 1000,
         
          rating: 5,
          image: 'https://amalaarcade.com/wp-content/uploads/2024/08/DSC3965-HDR-copy-1-2048x1366.jpg',
        },
        {
          title: 'Deluxe Room',
          price: 1400,
         
          rating: 5,
          image: 'https://iili.io/FoWWbUl.jpg',
        },
        {
          title: 'Family Room',
          price: 1800,
          
          rating: 5,
          image: 'https://amalaarcade.com/wp-content/uploads/2024/08/DSC3920-copy-scaled.jpg',
        },
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