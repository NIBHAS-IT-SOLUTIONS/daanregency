import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import './About.css'
import aboutimage from '../../Images/slide2.jpg'
import Footer from '../../Components/Footer/Footer';
export default function About() {
  const features = [
    {
      icon: '📍',
      title: 'Accessible Location',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    },
    {
      icon: '⏰',
      title: 'Open 24/7',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    },
    {
      icon: '📅',
      title: 'Reservation',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    },
    {
      icon: '🧑',
      title: 'Friendly Staff',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    },
    {
      icon: '📡',
      title: 'Free Wifi',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    },
    {
      icon: '📍',
      title: 'Accessible Location',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...',
    },
  ];


  useEffect(() => {
    document.title = 'Daan - About';
  }, []);
  return (
    <div className='bg-dark'>
        <Header/>
        
     
       <section className="d-flex img-fluid flex-column justify-content-center align-items-center text-white text-center"
       style={{
                      height: '450px',
                      backgroundImage: `url('https://i.postimg.cc/rw2PGwr5/gallery.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'scroll',
                      width: '100%',
                    }}>
        <div>
          <h2 style={{
            fontSize:'3rem',
            fontWeight:'bold'
          }}>About Us</h2>
          <p>
          who we are, what we value, and how we make your stay unforgettable.
            
          </p>
        </div>
      </section>
    <section className="our-story-section d-flex align-items-center">
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <img
              src="https://i.postimg.cc/RVRWNxWF/Facade-Night-1.jpg"
              alt="Our Story"
              className="img-fluid h-100 w-100 object-fit-cover"
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center bg-dark text-white p-4 text-container">
            <div>
              <h5 className="text-warning">Daan Regency</h5>
              <h2 className="fw-bold mb-4">OUR STORY</h2>
              <p className="story-text">
              Welcome to Daan Regency, where the charm of a peaceful retreat meets the convenience of city living. 
              Perfectly positioned in the heart of the bustling city, our residence offers a serene escape from the 
              fast-paced urban life. Whether you’re here for a business trip, a family vacation, or a gathering with friends,
               Daan Regency promises a stay that is both comforting and memorable. Surrounded by a picturesque environment and 
               stunning views of the expansive city skyline, our guests enjoy the best of both worlds – a tranquil atmosphere within 
               reach of the city's vibrant energy. The moment you arrive, you’re greeted by a sense of calm, thanks to our thoughtfully 
               designed interiors, where elegance, warmth, and comfort blend seamlessly. Every element, from the cozy lighting to the 
              graceful furnishings, has been crafted to offer a space where you can unwind, reflect, and recharge.
<br /><br />
              Our commitment to excellence is reflected in every detail – a spacious king-size bed, a walk-in closet, a 
              tiled bathroom with a separate shower area, and a modern work corner equipped with complimentary internet. 
              For your convenience, we also offer 24-hour reception, fresh fruit, mineral water, tea and coffee facilities, 
              and even daily newspapers delivered to your door. On request, additional comforts such as dental kits and slippers 
              are readily available. Daan Regency is more than just a place to sleep; it's a place to feel at home, to find peace, 
              and to be treated with genuine care. Designed by passionate architects and interior designers, every aspect of your stay 
              has been thoughtfully considered to ensure an experience that you will not only enjoy but want to relive. We invite you to step 
              into a space of quiet luxury and heartfelt hospitality. At Daan Regency, we are truly 
              delighted to have you as our guest.
                {/* Add your full story text here */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="why-choose-section position-relative py-5">
      {/* Decorative Circles */}
      <div className="circle circle-left"></div>
      <div className="circle circle-right"></div>

      <div className="container d-flex justify-content-center">
        <div className="why-box text-center p-5">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <div className="green-underline mx-auto my-3"></div>
          <p className="text-muted">
            Search millions of apartments, houses, and private office<br />
            suites for rent with our exclusive hotels & apartments app.
          </p>
        </div>
      </div>
    </section>
    <section className="py-5 features-section">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-4 text-center" key={index}>
              <div className="feature-icon mb-3">{feature.icon}</div>
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="banner-section d-flex align-items-center">
      <div className="container text-center text-white">
        <h1 className="banner-title">Choose from a wide range of <br /> <strong>luxury rooms</strong>.</h1>
        <button className="btn btn-light banner-button mt-4">BOOK NOW</button>
      </div>
    </section>
    <section className="progress-info-section w-100 px-5 py-5">
      <div className="container-fluid px-5 py-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3>Offering a series of comfortable and lavish hotels & residences</h3>
            <hr className="my-3" />
            <p>
              All our hotels are fabulous, they are destinations unto themselves.
              We have crossed the globe to bring you only the best.
            </p>
            <button className="btn btn-dark mt-3">Learn More</button>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Slim & Wellness</span>
                <span>90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Deluxe Services</span>
                <span>80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>Celebrations & Events</span>
                <span>90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between">
                <span>Gastronomy</span>
                <span>80%</span>
              </div>
              <div className="progress">
                <div className="progress-bar bg-dark" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
        </div>
  )
}
