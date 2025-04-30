import React from 'react'
import Header from '../../Components/Header/Header'
import HeroSection from '../../Components/HeroSection/HeroSection'
import BookingBar from '../../Components/BookingBar/Bookingbar'
import './Home.css'
import FacilitiesTabs from '../../Components/Facilities/FacilitiesTabs'
import HotelGrid from '../../Components/HotelGrid/HotelGrid'
import Footer from '../../Components/Footer/Footer'
import Specialoffers from '../../Components/SpecialOffers/Specialoffers'

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
        <div className='Specialoffers'>
          <Specialoffers/>
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
        <FacilitiesTabs/>
        </div>    
    <Footer/>
      {/* Other page content can go here */}
    </div>
    </div>
  )
}

export default Home