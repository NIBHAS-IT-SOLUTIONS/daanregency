import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'

import './Home.css'
import FacilitiesTabs from '../../Components/Facilities/FacilitiesTabs'
import HotelGrid from '../../Components/HotelGrid/HotelGrid'
import Footer from '../../Components/Footer/Footer'

import CounterSection from '../../Components/CountingSection/CounterSection'
import { FaUtensils, FaHotel, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';

import Offers from '../../Components/Offers/Offers'
import Loading from '../../utils/Loading/Loading'
import { Link } from 'react-router-dom'

function Home() {
  const facilities = [
    {
      name:"Urbn24",
      icon: <FaHotel />,
      title: 'Kaloor',
      phone: `📞 +91 86895-4623`,
      description: 'Enjoy world-class rooms and facilities in our luxurious lounge.',
      button: 'Book Now',
      img:'https://i.postimg.cc/xTbWrC5R/ABI6958-Edit.jpg',
      link: 'https://be.aiosell.com/book/6741980d7b'
    },
    {
       name:"Orchid Regency",
      icon: <FaHotel />,
      title: 'Kottayam',
      phone: `📞 +91 86895-4623`,
      description: 'Your premier destination in the heart of Kottayam town!',
      button: 'Book Now',
      img:'https://i.postimg.cc/PfLLnBBC/Copy-of-Facade-5.jpg',
      link: 'https://be.aiosell.com/book/6741980d7b'
    },
    {
       name:"Yaad Inn",
      icon: <FaHotel />,
      title: 'Kaloor',
      phone: `📞 +91 86895-4623`,
      description: 'affordable place to stay while supporting your loved ones ',
      button: 'Book Now',
      img:'https://i.postimg.cc/FHw6TQ36/Untitled-design-32.png',
      link: 'https://be.aiosell.com/book/6741980d7b'
    },
    { name:"Daan Temple Inn",
      icon: <FaHotel />,
      title: 'Vazhakala',
      phone: `📞 +91 86895-4623`,
      description: 'Experience unparalleled comfort and convenience with our exceptional range of services and amenities',
      button: 'Book Now',
      img:'https://i.postimg.cc/tJmZFkwh/DAAN-TEMPLE-INN005.jpg',
      link: 'https://be.aiosell.com/book/6741980d7b'
    },
    { name:"Daan Residency",
      icon: <FaHotel />,
      title: 'Karukappilly',
      phone: `📞 +91 86895-4623`,
      description: ' perfect blend of elegant design and ultimate relaxation in every aspect of your stay.',
      button: 'Book Now',
      img:'https://i.postimg.cc/SNJzm0YV/ABI0912-Edit.jpg',
      link: 'https://be.aiosell.com/book/6741980d7b'
    },
    { name:"Urbn24",
      icon: <FaHotel />,
      title: 'Trivandrum',
      phone: `📞 +91 86895-4623`,
      description: 'We ensure a memorable stay with impeccable service and modern amenities.',
      button: 'Book Now',
      img:'https://i.postimg.cc/NFbVD9k8/ABI1677-HDR-Edit.jpg',
      link: 'https://be.aiosell.com/book/6741980d7b'
    }
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = 'Daan - Home';

    setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);

  }, []);
  return (
    <div >

     
      <Header />
 {loading ? (
        <Loading />
      ) : (
      <div className="home-container">
        <div className='hero'>
          <HeroSection />
        </div>

        {/* <div className='bookingbar '>
           <BookingBar />
        </div> */}

        <div className='Specialoffers'>

          <Offers />
        </div>
        <div>
          <section className="banner-section w-100 d-flex align-items-center banneroverlay">
            <div className="overlay d-flex align-items-center">
            <div className="container text-center text-white">
              <h1 className="banner-title">Choose from a wide range of <br /> <strong>luxury rooms</strong></h1>
              <a href="https://be.aiosell.com/book/6741980d7b"><button className="btn btn-warning btn-lg banner-button mt-4">BOOK NOW</button></a>
            </div>
            </div>
          </section>
        </div>
        <div className='Hotelgrid'>
          <HotelGrid />
        </div>

        <div>
          <CounterSection />
        </div>
        <div className='facilities'>
          <FacilitiesTabs facilities={facilities} from='Home' />
        </div>
       
        {/* Other page content can go here */}
      </div>)}
     <Footer />
    </div>
  )
}

export default Home