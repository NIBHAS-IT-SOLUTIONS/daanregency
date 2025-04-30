import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Gallery() {
  return (
    <div>
      
      <Header/>
      <section className="hero-section text-center text-white d-flex align-items-center justify-content-center my-10">
        <div>
          <h2>Gallery</h2>
          <p>
           We Would Like to Hear From You
            
          </p>
        </div>
      </section>

      <div class="row ">
  <div class="col-3 col-sm-4 col-md-4 col-lg-6">
    <img src="https://picsum.photos/800/600?random=1" />
    <img src="https://picsum.photos/600/800?random=1"/>
    <img src="https://picsum.photos/800/600?random=2"/>
    <img src="https://picsum.photos/600/800?random=2"/>
    <img src="https://picsum.photos/800/600?random=3"/>
    <img src="https://picsum.photos/600/800?random=3"/>
  </div>
  <div class="col-3 col-sm-4 col-md-4 col-lg-4">
    <img src="https://picsum.photos/600/800?random=4"/>
    <img src="https://picsum.photos/800/600?random=4"/>
    <img src="https://picsum.photos/600/800?random=5"/>
    <img src="https://picsum.photos/800/600?random=5"/>
    <img src="https://picsum.photos/600/800?random=6"/>
    <img src="https://picsum.photos/800/600?random=6"/>
  </div>
  <div class="col-3 col-sm-4 col-md-4 col-lg-4">
    <img src="https://picsum.photos/800/600?random=7"/>
    <img src="https://picsum.photos/600/800?random=7"/>
    <img src="https://picsum.photos/800/600?random=8"/>
    <img src="https://picsum.photos/600/800?random=8"/>
    <img src="https://picsum.photos/800/600?random=9"/>
    <img src="https://picsum.photos/600/800?random=9"/>
  </div>
  <div class="col-3 col-sm-4 col-md-4 col-lg-4">
    <img src="https://picsum.photos/600/800?random=10"/>
    <img src="https://picsum.photos/800/600?random=10"/>
    <img src="https://picsum.photos/600/800?random=11"/>
    <img src="https://picsum.photos/800/600?random=11"/>
    <img src="https://picsum.photos/600/800?random=12"/>
    <img src="https://picsum.photos/800/600?random=12"/>
  </div>
</div>


      <Footer/>
      
      </div>
  )
}

export default Gallery