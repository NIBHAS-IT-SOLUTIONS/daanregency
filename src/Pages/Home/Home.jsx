import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'
import BookingBar from '../../Components/BookingBar/Bookingbar'
import './Home.css'
import FacilitiesTabs from '../../Components/Facilities/FacilitiesTabs'
import HotelGrid from '../../Components/HotelGrid/HotelGrid'
import Footer from '../../Components/Footer/Footer'
import Specialoffers from '../../Components/SpecialOffers/Specialoffers'
import CounterSection from '../../Components/CountingSection/CounterSection'
import { FaUtensils, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';
function Home() {
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
    document.title = 'Daan - Home';
  }, []);
  return (
    <div >
         <div className="home-container">
          <Header/>
      <div className='hero'>
        <HeroSection />
        </div>
        <div className='bookingbar '>
           <BookingBar />
        </div>
        <div className='Specialoffers'>
          <Specialoffers/>
        </div>
        <div>
          <CounterSection/>
        </div>
        <div className='Hotelgrid'>
          <HotelGrid/>
        </div>
        <div>
        <section className="banner-section w-100 d-flex align-items-center">
      <div className="container text-center text-white">
        <h1 className="banner-title">Choose from a wide range of <br /> <strong>luxury rooms</strong>.</h1>
        <button className="btn btn-light banner-button mt-4">BOOK NOW</button>
      </div>
    </section>
        </div>
      <div className='facilities'>
        <FacilitiesTabs facilities={facilities} from='true'/>
        </div>    
    <Footer/>
      {/* Other page content can go here */}
    </div>
    </div>
  )
}

export default Home