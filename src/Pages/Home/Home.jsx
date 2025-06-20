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


import LuxuryRoomsSection from '../../Components/booknowgrid/LuxuryRoomsSection'


function Home() {
  const facilities = [
{ name:"Daan Orchid residency",
      icon: <FaHotel />,
      title: 'Kottayam ',
      phone: `📞 +91 96338-33141`, 
      description: 'Unwind in style, where every detail is designed for delight.',
      button: 'Book Now',
      img:'https://i.postimg.cc/PfLLnBBC/Copy-of-Facade-5.jpg',
      link: 'https://daanorchidresidency.com/'
    },
    {
      name:"Daan Regency",
      icon: <FaHotel />,
      title: 'Thrissur',
      phone: `📞 +91 90482-88688`,
      description: 'Enjoy world-class rooms and facilities in our luxurious lounge.',
      button: 'Book Now',
      img:'https://i.postimg.cc/Fzq4JZ70/5d0fda4f-9bd7-4138-acaa-9ad4507754571.jpg',
      link: 'https://daanregency.com/'
    },
{
       name:"Daan Temple inn",
      icon: <FaHotel />,
      title: 'GURUVAYUR ',
      phone: `📞 +91 73066-55074`,
      description: 'affordable place to stay while supporting your loved ones ',
      button: 'Book Now',
      img:'https://i.postimg.cc/LsC2p22y/DAAN-TEMPLE-INN007-scaled.jpg',
      link: 'https://daantempleinn.com/'
    },{ name:"Urbn24",
      icon: <FaHotel />,
      title: 'Kalamassery ',
      phone: `📞 +91 85903-43798`,
      description: 'We ensure a memorable stay with impeccable service and modern amenities.',
      button: 'Book Now',
      img:'https://i.postimg.cc/0Qsd9Rnw/ABI6958-Edit-1-1024x766.webp',
      link: 'https://urbn24.in/'
    },
    
    
    { name:"Daan Inn",
      icon: <FaHotel />,
      title: 'Vazhakala',
      phone: `📞 +91 79072-18688`,
      description: 'Experience unparalleled comfort and convenience with our exceptional range of services and amenities',
      button: 'Book Now',
      img:'https://i.postimg.cc/NFbVD9k8/ABI1677-HDR-Edit.jpg',
      link: 'https://daaninn.in/'
    },
    { name:"Daan Residency",
      icon: <FaHotel />,
      title: 'Elamakkara',
      phone: `📞 +91 85901-08056`,
      description: ' perfect blend of elegant design and ultimate relaxation in every aspect of your stay.',
      button: 'Book Now',
      img:'https://i.postimg.cc/QxJLDhqp/ABI1197-Edit-copy-1024x683.webp',
      link: 'https://daanresidency.in/'
    },
    
    { name:"Daan South Park",
      icon: <FaHotel />,
      title: 'Ernakulam',
      phone: `📞 +91 90482-88688`,
      description: 'Your comfort is our promise, your satisfaction our priority.',
      button: 'Book Now',
      img:'https://i.postimg.cc/FzghwcRS/1639455211.jpg',
      link: 'https://www.booking.com/hotel/in/daan-south-park.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIPZGFhbi1zb3V0aC1wYXJrSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEB-AEDiAIBqAIDuALqjPXBBsACAdICJDI4NDAxYWU1LWFjNDktNDMyMi05OTc2LWZkOTdmY2YxNzNkYtgCBOACAQ&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&'
    },{
       name:"Amala Arcade thrissur",
      icon: <FaHotel />,
      title: 'Thrissur',
      phone: `📞 +91 73063-93739`,
      description: 'Your premier destination in the heart of Kottayam town!',
      button: 'Book Now',
      img:'https://i.postimg.cc/x8Bwd14R/DSC4163-HDR-copy-scaled.jpg',
      link: 'https://amalaarcade.com/'
    },
    
    { name:"Meridian By Daan",
      icon: <FaHotel />,
      title: 'Trivandrum',
      phone: `📞 +91 90482-88688`,
      description: 'Every guest is a VIP, every stay is unforgettable',
      button: 'Book Now',
      img:'https://i.postimg.cc/tJDLhzJB/478877522.jpg',
      link: 'https://www.booking.com/hotel/in/meridian-by-daan.en-gb.html?aid=357028&label=bin859jc-1DCAsobEIQbWVyaWRpYW4tYnktZGFhbkgzWANobIgBAZgBCbgBF8gBDNgBA-gBAfgBA4gCAagCA7gCzpX1wQbAAgHSAiRiY2JiYmUzMy1jOGJmLTRhMzUtODJmYy00ZjQ3Y2E1OWU2NDHYAgTgAgE&sid=e8aa6d68ffa841b312fa52746b65c647&dist=0&keep_landing=1&sb_price_type=total&type=total&'
    }
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = 'Daan Hotels - Home';

    setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);

  }, []);
  return (
    <div >

     
      {/* <TopBar/> */}
      <Header/>
     
      {/* <BookingForm/> */}

      
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
          {/* <section className="banner-section w-100 d-flex align-items-center banneroverlay">
            <div className="overlay d-flex align-items-center">
            <div className="container text-center text-white">
              <h1 className="banner-title">Choose from a wide range of <br /> <strong>luxury rooms</strong></h1>
              <a href="https://be.aiosell.com/book/6741980d7b"><button className="btn btn-warning btn-lg banner-button mt-4">BOOK NOW</button></a>
            </div>
            </div>
          </section> */}
          <LuxuryRoomsSection/>
        </div>
       <div className='facilities'>
          <FacilitiesTabs facilities={facilities} from='Home' />
        </div>

        <div>
          <CounterSection />
        </div>
        
        <div className='Hotelgrid'>
          <HotelGrid />
        </div>
       
        {/* Other page content can go here */}
      </div>)}
     <Footer />
    </div>
  )
}

export default Home