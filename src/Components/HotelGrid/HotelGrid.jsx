// import React from 'react';
// import './HotelGrid.css';

// const hotels = [
//   [{
//     name: 'Urban 24 Daris',
//     description:
//       'Welcome to Urbn 24 daris, your cozy retreat in the vibrant heart of Kochi. Designed for travelers seeking comfort and simplicity, our hotel offers a tranquil space to unwind after a busy day in the city.',
//     image: 'https://i.postimg.cc/dVR3rJvh/ABI6859.jpg'
//   },
//   {
//     name: 'Premium Quality Rooms',
//     description:
//       'At Urbn 24 daris, we focus exclusively on providing exceptional stay experiences. Whether you’re here for business or leisure, our well-maintained rooms, warm hospitality, and attention to detail ensure a peaceful and memorable visit.',
//     image: 'https://i.postimg.cc/QdPDFPKF/ABI6748-Edit.jpg'
//   },
//   {
//     name: "Our Vision",
//     description:
//       'our vision to provide exceptional hospitality and unforgettable experiences for every guest that walks through our doors',
//     image: 'https://i.postimg.cc/mgySgcXk/ABI6877-Edit.jpg'
//   }], [{
//     name: 'Urban 24 Daris',
//     description:
//       'Welcome to Urbn 24 daris, your cozy retreat in the vibrant heart of Kochi. Designed for travelers seeking comfort and simplicity, our hotel offers a tranquil space to unwind after a busy day in the city.',
//     image: 'https://i.postimg.cc/dVR3rJvh/ABI6859.jpg'
//   },
//   {
//     name: 'Premium Quality Rooms',
//     description:
//       'At Urbn 24 daris, we focus exclusively on providing exceptional stay experiences. Whether you’re here for business or leisure, our well-maintained rooms, warm hospitality, and attention to detail ensure a peaceful and memorable visit.',
//     image: 'https://i.postimg.cc/QdPDFPKF/ABI6748-Edit.jpg'
//   },
//   {
//     name: "Our Vision",
//     description:
//       'our vision to provide exceptional hospitality and unforgettable experiences for every guest that walks through our doors',
//     image: 'https://i.postimg.cc/mgySgcXk/ABI6877-Edit.jpg'
//   }]
// ];

// const HotelGrid = () => {
//    const handleClick = () => {
   
//       window.open('https://urbn24.in/', '_blank');
    
//   };
//   return (
//     <div className='bg-hotel'>
//     <div className="container py-5 ">
//          <h2 className='text-center display-3' style={{fontFamily:'Gitky Trial'}}>Featured Hotels</h2>
//          <br /><br />
//       {hotels.map((hotel, idx) => (
//         <div
//           className="row align-items-center mb-5"
//           key={idx}
//         >
//           {idx % 2 === 0 ? (
//             <>
//               <div className="col-md-6 mb-3 mb-md-0">
//                 <img src={hotel.image} alt={hotel.name} className="img-fluid rounded" />
//               </div>
//               <div className="col-md-6">
//                 <h5>{hotel.name}</h5>
//                 <p>{hotel.description}</p>
//                 <button className="btn btn-dark" onClick={handleClick}>Book Now</button>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="col-md-6 order-md-2 mb-3 mb-md-0">
//                 <img src={hotel.image} alt={hotel.name} className="img-fluid rounded" />
//               </div>
//               <div className="col-md-6 order-md-1">
//                 <h5>{hotel.name}</h5>
//                 <p>{hotel.description}</p>
//                 <button className="btn btn-dark" onClick={handleClick}>Book Now</button>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default HotelGrid;


import React from 'react';
import Slider from 'react-slick';
import './HotelGrid.css';

const hotels = [
 [
    {
      name: 'Urban 24 Daris',
      description:
        'Welcome to Urbn 24 daris, your cozy retreat in the vibrant heart of Kochi...',
      image: 'https://i.postimg.cc/dVR3rJvh/ABI6859.jpg',
      link: 'https://urbn24.in/daris'
    },
    {
      name: 'Premium Quality Rooms',
      description:
        'At Urbn 24 daris, we focus exclusively on providing exceptional stay experiences...',
      image: 'https://i.postimg.cc/QdPDFPKF/ABI6748-Edit.jpg',
      link: 'https://urbn24.in/rooms'
    },
    {
      name: "Our Vision",
      description:
        'Our vision is to provide exceptional hospitality and unforgettable experiences...',
      image: 'https://i.postimg.cc/mgySgcXk/ABI6877-Edit.jpg',
      link: 'https://urbn24.in/vision'
    }
  ],
  [
    {
      name: 'Urban 24 Daris',
      description:
        'Welcome to Urbn 24 daris, your cozy retreat in the vibrant heart of Kochi...',
      image: 'https://i.postimg.cc/dVR3rJvh/ABI6859.jpg',
      link: 'https://urbn24.in/daris'
    },
    {
      name: 'Premium Quality Rooms',
      description:
        'At Urbn 24 daris, we focus exclusively on providing exceptional stay experiences...',
      image: 'https://i.postimg.cc/QdPDFPKF/ABI6748-Edit.jpg',
      link: 'https://urbn24.in/rooms'
    },
    {
      name: "Our Vision",
      description:
        'Our vision is to provide exceptional hospitality and unforgettable experiences...',
      image: 'https://i.postimg.cc/mgySgcXk/ABI6877-Edit.jpg',
      link: 'https://urbn24.in/vision'
    }
  ],
  [
    {
      name: 'Urban 24 Daris',
      description:
        'Welcome to Urbn 24 daris, your cozy retreat in the vibrant heart of Kochi...',
      image: 'https://i.postimg.cc/dVR3rJvh/ABI6859.jpg',
      link: 'https://urbn24.in/daris'
    },
    {
      name: 'Premium Quality Rooms',
      description:
        'At Urbn 24 daris, we focus exclusively on providing exceptional stay experiences...',
      image: 'https://i.postimg.cc/QdPDFPKF/ABI6748-Edit.jpg',
      link: 'https://urbn24.in/rooms'
    },
    {
      name: "Our Vision",
      description:
        'Our vision is to provide exceptional hospitality and unforgettable experiences...',
      image: 'https://i.postimg.cc/mgySgcXk/ABI6877-Edit.jpg',
      link: 'https://urbn24.in/vision'
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
  Book Now
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
  Book Now
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
