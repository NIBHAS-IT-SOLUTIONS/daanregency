import React, { useState,useEffect } from 'react';
import './FacilitiesTabs.css';
import { FaUtensils, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';
import { Hinge,Bounce,Zoom   } from 'react-awesome-reveal';

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
    }, 4000); // Change tab every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [facilities.length]);
  return (
    <div className="bg-fac">
    <div className="container py-5">
    {from  === 'Home' ?
      <h2 className='text-center display-3' style={{fontFamily:'Gitky Trial'}}> Explore Hotels </h2>
      :
      <h2 className='text-center display-3' style={{fontFamily:'Gitky Trial'}}> </h2>
      }
        <br /><br />
      <div className="d-flex justify-content-center flex-wrap mb-4 facility-tabs">
        {facilities.map((item, idx) => (
          <div
            key={idx}
            className={`text-center mx-3 facility-tab ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            <div className="icon" >{item.icon}</div>
            <div className="label"style={{fontFamily:'Truculenta'}}>{item.title}</div>
          </div>
        ))}
      </div>
<br /><br />
      <div className="row align-items-center">
        
        <div className="col-md-6 mb-4 mb-md-0">

          <img src={facilities[activeIndex].img} className="facility-img rounded bg-secondary"   />
          
        </div>
        <div className="col-md-6">
          <h6 className="text-muted text-uppercase" style={{fontFamily:'BARTKEY',fontSize:'2rem'}}>{facilities[activeIndex].name}</h6>
          <h3 className="mb-3" style={{fontFamily:'Truculenta'}}>{facilities[activeIndex].title}</h3>
          <p style={{fontFamily:'Fathers'}}>{facilities[activeIndex].description}</p>
          
         
          <p>{facilities[activeIndex].phone}</p>
          
          <p> {facilities[activeIndex].hours}</p>
          
          {from === 'Home' ? 
 <a href={facilities[activeIndex].link}><button className="btn btn-lg btn-block text-white px-4" style={{backgroundColor:'#d39f44'}}>{facilities[activeIndex].button}</button></a>
          :
            <h3></h3>
           }
         
        </div>
      </div>
      <br /><br />
      <section className="services-section py-5">
      <div className="container">
        <div className="row text-center">
          {services.map((service, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3 mb-4">
              <Zoom delay={500} duration={1000} >
              <div className="service-box p-3">
                <div className="icon-circle mb-3">
                  <span className="icon">{service.icon}</span>
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
                
              </div>
              </Zoom  >
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
  );
};

export default FacilitiesTabs;
