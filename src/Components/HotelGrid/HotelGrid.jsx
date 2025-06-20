import React from 'react';
import Slider from 'react-slick';
import './HotelGrid.css';
import hotels from '../../utils/Jsonfiles/Hotelgriddata';





const HotelGrid = () => {
  // const handleClick = () => {
  //   window.open('https://urbn24.in/', '_blank');
  // };

  const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768, // for tablets and below
      settings: {
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 576, // for mobile
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
};


  return (
    <div className="bg-hotel py-5">
      <div className="container">
        <h2 className="text-center display-3" style={{ fontFamily: 'Gitky Trial' }}>
          Featured Hotels
        </h2>
        <br />

        <Slider {...settings}>
          {hotels.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.map((hotel, idx) => (
                <div className="row align-items-center mb-5" key={idx}>
                  {idx % 2 === 0 ? (
                    <>
                      <div className="col-md-6 mb-3 mb-md-0">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="col-md-6">
                        <h5>{hotel.name}</h5>
                        <p>{hotel.description}</p>
                        <button className="btn btn-dark" onClick={() => window.open(hotel.link, '_blank')}>
  Visit Us
</button>

                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-6 order-md-2 mb-3 mb-md-0">
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="col-md-6 order-md-1">
                        <h5>{hotel.name}</h5>
                        <p>{hotel.description}</p>
                        <button className="btn btn-dark" onClick={() => window.open(hotel.link, '_blank')}>
  Learn More
</button>

                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HotelGrid;
