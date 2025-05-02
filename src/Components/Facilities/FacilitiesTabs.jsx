import React, { useState,useEffect } from 'react';
import './FacilitiesTabs.css';
import { FaUtensils, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';


const services = [
  {
    icon: '🔑',
    title: 'Room Service',
    description: '24 Hours Safety and security',
  },
  {
    icon: '🚗',
    title: 'Free Parking',
    description: 'We provide 24 hours free parking facility',
  },
  {
    icon: '🎧',
    title: 'Customer Support',
    description: 'We provide 24 hours free customer service',
  },
  {
    icon: '📶',
    title: 'Free Wifi',
    description: 'All rooms enabled with free wifi',
  },
];

const FacilitiesTabs = ({facilities,from}) => {
  
  
  
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % facilities.length);
    }, 3000); // Change tab every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [facilities.length]);
  return (
    <div className="container py-5">
    {from &&
      <h2 className='text-center display-3'> Explore Hotels </h2>
      }
        <br /><br />
      <div className="d-flex justify-content-center flex-wrap mb-4 facility-tabs">
        {facilities.map((item, idx) => (
          <div
            key={idx}
            className={`text-center mx-3 facility-tab ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            <div className="icon">{item.icon}</div>
            <div className="label">{item.title}</div>
          </div>
        ))}
      </div>
<br /><br />
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="facility-img rounded bg-secondary" style={{ height: '300px' }} />
        </div>
        <div className="col-md-6">
          <h6 className="text-muted text-uppercase">World Class</h6>
          <h3 className="mb-3">{facilities[activeIndex].title}</h3>
          <p>{facilities[activeIndex].description}</p>
          <p><strong>Service Hours:</strong> {facilities[activeIndex].hours}</p>
        </div>
      </div>
      <br /><br />
      <section className="services-section py-5">
      <div className="container">
        <div className="row text-center">
          {services.map((service, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="service-box p-3">
                <div className="icon-circle mb-3">
                  <span className="icon">{service.icon}</span>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default FacilitiesTabs;
