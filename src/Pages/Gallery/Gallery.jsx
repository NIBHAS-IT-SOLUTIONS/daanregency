import React,{ useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Gallery.css';
import { Fade  } from 'react-awesome-reveal';
import { motion } from "framer-motion";
import GalleryComponent from '../../Components/GalleryComponent/GalleryComponent';
import Loading from '../../utils/Loading/Loading';
import Urbnimages from '../../utils/Jsonfiles/galleryimages'
import Yaadimages from '../../utils/Jsonfiles/Yaadimages'
import Temple from '../../utils/Jsonfiles/Temple';
import Daanresidency from '../../utils/Jsonfiles/Daanresidency'
import galleryimg from '../../Images/galleries.jpg'
import DaanVazhakkala from '../../utils/Jsonfiles/vazhakala';
import OrchidKottayam from '../../utils/Jsonfiles/OrchidKottayam';
import daanregency from '../../utils/Jsonfiles/Daanregency';
import amalaarcade from '../../utils/Jsonfiles/Amalaarcade';
import meridian from '../../utils/Jsonfiles/Meridian';
import daansouth from '../../utils/Jsonfiles/Daansouth';

export default function Gallery() {
  
  const [loading, setLoading] = useState(true);
    useEffect(() => {
       document.title = 'Daan Hotels - Gallery';
  
      setTimeout(() => {
        setLoading(false); // Hide loader after 2 seconds
      }, 2000);
    }, []);

  
  return (
    <div>
      
      <Header/>
      {loading ? (
        <Loading/>
      ) : (
        <div>
          {/* backgroundImage: `url('https://i.postimg.cc/rw2PGwr5/gallery.png')` */}
      <section className="d-flex flex-column justify-content-center align-items-center text-white text-center"
       style={{
                      height: '650px',
                      backgroundImage: `url(https://i.postimg.cc/hPNpt2fR/galleries.jpg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'scroll'
                    }}>
        <div>
          <h2 style={{
             fontFamily: 'Expletus Sans',                                   
            fontSize:'3rem',
            fontWeight:'bold'
          }}>Gallery</h2>
          <p style={{ fontFamily: 'Tree Ghost',fontSize:'1.5rem'}}>
          Picture Walkthrough 
            
          </p>
        </div>
      </section>
      <br />
      <h2 className='display-5 text-center'>Daan Orchid Kottayam</h2>
<Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={OrchidKottayam}/></Fade>

<h2 className='display-5 text-center'>Daan Regency</h2>
          <Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={daanregency}/></Fade>

<h2 className='display-5 text-center'>Daan Temple Inn</h2>
          <Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={Temple}/></Fade>

          <h2 className='display-5 text-center'>Urban 24</h2>
          <Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={Urbnimages}/>
      </Fade >
      
<h2 className='display-5 text-center'>Daan Inn Vazhakkala</h2>
<Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={DaanVazhakkala}/></Fade>
      
      
<h2 className='display-5 text-center'>Daan Residency</h2>
<Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={Daanresidency}/></Fade>

          <h2 className='display-5 text-center'>Amala Arcade</h2>
          <Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={amalaarcade}/></Fade>

           <h2 className='display-5 text-center'>Daan SouthPark</h2>
          <Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={daansouth}/></Fade>

 <h2 className='display-5 text-center'>Meridian By Daan</h2>
          <Fade  direction="down" cascade delay={200} duration={1000}>
      <GalleryComponent images={meridian}/></Fade>



      </div>
    
    )}
      
      <Footer/>
      
      </div>
  )
}
