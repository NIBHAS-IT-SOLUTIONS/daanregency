import React from 'react'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'
import BookingBar from '../../Components/BookingBar/Bookingbar'
import './Home.css'
import FacilitiesTabs from '../../Components/Facilities/FacilitiesTabs'
import HotelGrid from '../../Components/HotelGrid/HotelGrid'
import Footer from '../../Components/Footer/Footer'

function Home() {
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

        <div className='Hotelgrid'>
          <HotelGrid/>
        </div>
      <div className='facilities'>
        <FacilitiesTabs/>
        </div>    
    <Footer/>
      {/* Other page content can go here */}
    </div>
    </div>
  )
}

export default Home