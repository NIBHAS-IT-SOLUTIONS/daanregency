import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // makes data-bs-* work
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 
export default function HeroSection() {
    const slides = [
        {
          image: 'Images/slide1.jpg',
          subtitle: 'Daan Regency',
          title: 'Reserve Room for Family Vacation',
          button: 'Book Now'
        },
        {
          image: 'Images/slide2.jpg',
          subtitle: 'Daan Regency',
          title: 'Luxury Stay at Affordable Price',
          button: 'Book Now'
        },
        {
          image: 'Images/slide3.jpg',
          subtitle: 'Daan Regency',
          title: 'Experience the Best Holidays',
          button: 'Book Now'
        }
      ];
      const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        fade: true,
        pauseOnHover: false,
        cssEase: "ease-in-out",
      };
    
  return (
    <div className="vh-100">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="d-flex flex-column justify-content-center align-items-center text-white text-center"
              style={{
                height: '100vh',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll'
              }}
            >
              <div className="bg-dark bg-opacity-50 p-4 rounded">
                <h6 className="text-uppercase mb-2" style={{ letterSpacing: '2px' }}>{slide.subtitle}</h6>
                <h1 className="display-5 fw-bold mb-3">{slide.title}</h1>
                <button className="btn btn-lg text-white px-4" style={{backgroundColor:'#d39f44'}}>{slide.button}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
