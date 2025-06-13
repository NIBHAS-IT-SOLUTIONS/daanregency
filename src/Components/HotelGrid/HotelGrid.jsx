import React from 'react';
import Slider from 'react-slick';
import './HotelGrid.css';



const hotels = [
 [
    {
      name: 'Urban 24 ',
      description:
        'At Urbn24, we blend comfort and convenience to provide a memorable stay for our guests , we are committed to offering the best in hospitality.',
      image: 'https://i.postimg.cc/dVR3rJvh/ABI6859.jpg',
      link: 'https://urbn24.in/'
    },
    {
      name: 'Premium Quality Rooms',
      description:
        'Our 19-bedroom hotel offers a warm and welcoming atmosphere, ensuring a relaxing experience throughout your stay.',
      image: 'https://i.postimg.cc/QdPDFPKF/ABI6748-Edit.jpg',
      link: 'https://urbn24.in/'
    },
    {
      name: "Our Vision",
      description:
        'focus on quality, reliability, and excellence, we go the extra mile to make your stay truly memorable. Whether you’re here for business or leisure, you can trust Urbn24 to provide a warm, comfortable, and hassle-free stay',
      image: 'https://i.postimg.cc/mgySgcXk/ABI6877-Edit.jpg',
      link: 'https://urbn24.in/'
    }
  ],
  [
    {
      name: 'Daan Regency',
      description:
        'Daan Regency is here to red-letter your visit by providing you with the most desirable facilities that you will always cherish throughout your life and would prompt you to visit this cosy space often',
      image: 'https://i.postimg.cc/5t4pmwbs/daan1.png',
      link: 'https://daanregency.com/'
    },
    {
      name: 'Premium Quality Rooms',
      description:
        'A/C rooms, Intercom, Wi-Fi Enabled room, Sitting Table, 32-inch LED TV, 24 hrs Safety and security, Spotless linen, Tea coffee making facilities.',
      image: 'https://i.postimg.cc/VkXt7BTg/daanregencyedited2.png',
      link: 'https://daanregency.com/room'
    },
    {
      name: "Our Vision",
      description:
        'Positioned amid the bustling city life, Daan Regency offers an impeccable experience for our tenants by providing a serene stay devoid of the hustles of city life.',
      image: 'https://i.postimg.cc/pr9hKDzD/daanregencyedited3.png',
      link: 'https://daanregency.com/room'
    }
  ],
  [
    {
      name: 'Amala Arcade',
      description:
        'Looking for a cozy and affordable place to stay while supporting your loved ones at Amala Multi Specialty Hospital? Look no further!',
      image: 'https://i.postimg.cc/QtMG4m6W/amala1.png',
      link: 'https://amalaarcade.com/'
    },
    {
      name: 'Premium Quality Rooms',
      description:
        'We understand the importance of being close to your family during times of need, and that’s why we’ve created a warm, inviting atmosphere where you can truly feel at home.',
      image: 'https://i.postimg.cc/B6wWdFy7/amala2.png',
      link: 'https://amalaarcade.com/rooms/'
    },
    {
      name: "Our Vision",
      description:
        'Experience unparalleled comfort and convenience with our exceptional range of services and amenities designed to enhance your stay.',
      image: 'https://i.postimg.cc/QCR2M3jp/amala3.png',
      link: 'https://amalaarcade.com/'
    }
  ],
];

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
