import React,{ useEffect, useRef } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import 'baguettebox.js/dist/baguetteBox.min.css';
import baguetteBox from 'baguettebox.js';
import './Gallery.css';


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
  
  useEffect(() => {
    document.title = 'Daan - Gallery';
  }, []);
 
    useEffect(() => {

      baguetteBox.run('.tz-gallery', { animation: 'fadeIn' });
    }, []);
  
  return (
    <div>
      
      <Header/>
      <section className="hero-section-gallery text-center text-white d-flex align-items-center justify-content-center my-10">
        <div>
          <h2>Gallery</h2>
          <p>
          Picture Walkthrough 
            
          </p>
        </div>
      </section>

      {/* <div class="row ">
      <div className="col-4 col-sm-4 col-md-4 col-lg-4">
    <img src="https://picsum.photos/800/600?random=1" />
    <img src="https://picsum.photos/600/800?random=1"/>
    <img src="https://picsum.photos/800/600?random=2"/>
    <img src="https://picsum.photos/600/800?random=2"/>
    <img src="https://picsum.photos/800/600?random=3"/>
    <img src="https://picsum.photos/600/800?random=3"/>
  </div>
   
  <div className="col-4 col-sm-4 col-md-4 col-lg-4">
    <img src="https://picsum.photos/600/800?random=4"/>
    <img src="https://picsum.photos/800/600?random=4"/>
    <img src="https://picsum.photos/600/800?random=5"/>
    <img src="https://picsum.photos/800/600?random=5"/>
    <img src="https://picsum.photos/600/800?random=6"/>
    <img src="https://picsum.photos/800/600?random=6"/>
  </div>
  <div className="col-4 col-sm-4 col-md-4 col-lg-4">
    <img src="https://picsum.photos/800/600?random=7"/>
    <img src="https://picsum.photos/600/800?random=7"/>
    <img src="https://picsum.photos/800/600?random=8"/>
    <img src="https://picsum.photos/600/800?random=8"/>
    <img src="https://picsum.photos/800/600?random=9"/>
    <img src="https://picsum.photos/600/800?random=9"/>
  </div>
 
</div> */}
 {/* <div className="container gallery-container">
      
      <div className="tz-gallery">
        <div className="row">
          {images.map((img, index) => (
            <div className="col-sm-6 col-md-4" key={index}>
              <a className="lightbox" href={img.src } data-caption={img.alt}>
                <img src={img.src} alt={img.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div> */}
    <div className="container gallery-container">
      <div className="tz-gallery row">
        {images.map((img,index) => (
          <div className="col-sm-6 col-md-3" key={index}>
            <a className="lightbox" href={img.src} data-caption={img.alt} >
              <img src={img.src} alt={img.alt}  className="img-responsive" />
            </a>
          </div>
        ))}
      </div>
    </div>

      <Footer/>
      
      </div>
  )
}
