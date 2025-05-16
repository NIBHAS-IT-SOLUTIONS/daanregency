import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import FacilitiesTabs from '../../Components/Facilities/FacilitiesTabs'
import './Services.css'
import { FaUtensils, FaGlassCheers, FaCar, FaSwimmer, FaSpa, FaDumbbell } from 'react-icons/fa';
import { FaKey, FaHeadset, FaWifi } from 'react-icons/fa';
import CounterSection from '../../Components/CountingSection/CounterSection'
import Rooms from '../../Components/Room/Rooms'
import { useState } from 'react'
import Loading from '../../utils/Loading/Loading'
function Services() {
   const facilities = [
      {
        icon: <FaUtensils />,
        title: 'Restaurant',
        hours: ' 7:30 AM - 8:00 PM',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing .',
        button: 'Book Now',
      link:'https://be.aiosell.com/book/6741980d7b'
      },
      {
        icon: <FaGlassCheers />,
        title: 'Bar',
        hours: 'Service Hours : 6:00 PM - 11:00 PM',
        description: 'Enjoy world-class cocktails and drinks in our luxurious lounge.',
        button: 'Book Now',
      link:'https://be.aiosell.com/book/6741980d7b'
      },
      {
        icon: <FaCar />,
        title: 'Pick-up',
        hours: 'Service Hours : 24/7',
        description: 'Complimentary airport and local transport service available anytime.',
        button: 'Book Now',
      link:'https://be.aiosell.com/book/6741980d7b'
      },
      {
        icon: <FaSwimmer />,
        title: 'Swimming Pool',
        hours: 'Service Hours : 6:00 AM - 10:00 PM',
        description: 'Olympic-sized pool with temperature control and lounge service.',
        button: 'Book Now',
      link:'https://be.aiosell.com/book/6741980d7b'
      },
      {
        icon: <FaSpa />,
        title: 'Spa',
        hours: 'Service Hours : 10:00 AM - 9:00 PM',
        description: 'Relax with professional massages and wellness treatments.',
        button: 'Book Now',
      link:'https://be.aiosell.com/book/6741980d7b'
      },
      {
        icon: <FaDumbbell />,
        title: 'Gym',
        hours: 'Service Hours : 5:00 AM - 10:00 PM',
        description: 'Fully equipped gym with personal trainers on request.',
        button: 'Book Now',
      link:'https://be.aiosell.com/book/6741980d7b'
      }
    ];
  const [loading, setLoading] = useState(true);
       useEffect(() => {
          document.title = 'Daan - Facilities';
     
         setTimeout(() => {
           setLoading(false); // Hide loader after 2 seconds
         }, 2000);
       }, []);
  return (
    <div>
        <Header/>
         {loading ? (
        <Loading />
      ) : (
  <div>
       <section className="d-flex flex-column justify-content-center bg-dark align-items-center text-white text-center"
       style={{
                      height: '450px',
                      backgroundImage: `url('https://i.postimg.cc/rw2PGwr5/gallery.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'scroll',
                      
                    }}>
        <div>
          <h2 style={{
            fontFamily: 'Expletus Sans',                                   
            fontSize:'3rem',
            fontWeight:'bold'
          }}>Facilities</h2>
          <p style={{ fontFamily: 'Tree Ghost',fontSize:'1.5rem'}}>
          Let's See What we Provide 
            
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
         <FacilitiesTabs facilities={facilities} from='false'  /> 

        

 <div>
          <CounterSection/>
        </div>
        </div>)}
         <Footer/>
        </div>
  )
}

export default Services