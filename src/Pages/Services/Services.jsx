import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import FacilitiesTabs from '../../Components/Facilities/FacilitiesTabs'
import './Services.css'
import { FaUtensils, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';
import CounterSection from '../../Components/CountingSection/CounterSection'
import Rooms from '../../Components/Room/Rooms'
function Services() {
   const facilities = [
      {
        icon: <FaUtensils />,
        title: 'Restaurant',
        hours: '7:30 AM - 8:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia...'
      },
      {
        icon: <FaGlassCheers />,
        title: 'Bar',
        hours: '6:00 PM - 11:00 PM',
        description: 'Enjoy world-class cocktails and drinks in our luxurious lounge.'
      },
      {
        icon: <FaCar />,
        title: 'Pick-up',
        hours: '24/7',
        description: 'Complimentary airport and local transport service available anytime.'
      },
      {
        icon: <FaSwimmer />,
        title: 'Swimming Pool',
        hours: '6:00 AM - 10:00 PM',
        description: 'Olympic-sized pool with temperature control and lounge service.'
      },
      {
        icon: <FaSpa />,
        title: 'Spa',
        hours: '10:00 AM - 9:00 PM',
        description: 'Relax with professional massages and wellness treatments.'
      },
      {
        icon: <FaDumbbell />,
        title: 'Gym',
        hours: '5:00 AM - 10:00 PM',
        description: 'Fully equipped gym with personal trainers on request.'
      }
    ];
    useEffect(() => {
      document.title = 'Daan - Facilities';
    }, []);
  return (
    <div>
        <Header/>
        <section className="hero-section text-center text-white d-flex align-items-center justify-content-center my-10">
        <div>
          <h2>Facilities</h2>
          <p>
           We Would Like to Hear From You
            
          </p>
        </div>
      </section>
      <div>
        <Rooms/>
      </div>
      <div>
        <section className="banner-section w-100 d-flex align-items-center">
      <div className="container text-center text-white">
        <h1 className="banner-title">Choose from a wide range of <br /> <strong>luxury rooms</strong>.</h1>
        <button className="btn btn-light banner-button mt-4">BOOK NOW</button>
      </div>
    </section>
        </div>
         <FacilitiesTabs facilities={facilities}  /> 

        

 <div>
          <CounterSection/>
        </div>
         <Footer/>
        </div>
  )
}

export default Services