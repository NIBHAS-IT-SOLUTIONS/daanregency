import React,{ useEffect, useRef, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Gallery.css';
import GalleryComponent from '../../Components/GalleryComponent/GalleryComponent';
import Loading from '../../utils/Loading/Loading';


export default function Gallery() {
  const images = [
    {
      src: 'https://i.postimg.cc/RVRWNxWF/Facade-Night-1.jpg',
      alt: 'Facade',
    },
    {
      src: 'https://i.postimg.cc/PfLLnBBC/Copy-of-Facade-5.jpg',
      alt: 'Orchid Regency',
    },
    {
      src: 'https://i.postimg.cc/pdhSWmXg/Suite-10.jpg',
      alt: 'Urbn24',
    },
    {
      src: 'https://i.postimg.cc/Kv1BsBqS/Premium-4.jpg',
      alt: 'Premium',
    },
    {
      src: 'https://i.postimg.cc/Gt8tzJcX/Super-Deluxe-20.jpg',
      alt: 'Super DElux',
    },
    {
      src: 'https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg',
      alt: 'Coast',
    },
  ];  
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
          <h2 className='display-5 text-center'>Urban 24 Dariss</h2>
      <GalleryComponent images={images}/>
      <br />
          <h2 className='display-5 text-center'>Urban 24 Dariss</h2>
      <GalleryComponent images={images}/>
      </div>)}
      <Footer/>
      
      </div>
  )
}
