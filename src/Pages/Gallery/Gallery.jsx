import React,{ useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Gallery.css';
import GalleryComponent from '../../Components/GalleryComponent/GalleryComponent';
import Loading from '../../utils/Loading/Loading';
import Urbnimages from '../../utils/Jsonfiles/galleryimages'
import Yaadimages from '../../utils/Jsonfiles/Yaadimages'
import Temple from '../../utils/Jsonfiles/Temple';
import Daanresidency from '../../utils/Jsonfiles/Daanresidency'

export default function Gallery() {
  
  const [loading, setLoading] = useState(true);
    useEffect(() => {
       document.title = 'Daan - Gallery';
  
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
      <section className="d-flex flex-column justify-content-center align-items-center text-white text-center"
       style={{
                      height: '450px',
                      backgroundImage: `url('https://i.postimg.cc/rw2PGwr5/gallery.png')`,
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
          <h2 className='display-5 text-center'>Urban 24</h2>
      <GalleryComponent images={Urbnimages}/>
      <br />
          <h2 className='display-5 text-center'>Yaad Inn</h2>
      <GalleryComponent images={Yaadimages}/>

          <h2 className='display-5 text-center'>Temple Inn</h2>
      <GalleryComponent images={Temple}/>

<h2 className='display-5 text-center'>Daan Residency</h2>
      <GalleryComponent images={Daanresidency}/>
      </div>
    
    )}
      
      <Footer/>
      
      </div>
  )
}
