import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
function Contact() {
  useEffect(() => {
    document.title = 'Daan - Contact';
  }, []);
  return (
    
    <div>
        <Header/>
        <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-white d-flex align-items-center justify-content-center my-10">
        <div>
          <h2>Contact Us</h2>
          <p>
           We Would Like to Hear From You
            
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row">
            {/* Google Map */}
            <div className="col-md-6 mb-4">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.9832694069946!2d76.21244627586563!3d10.343222567033129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1091f25fbad3855%3A0x404bb0de71499fe7!2sNibhas%20HRD%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1745909996424!5m2!1sen!2sin"
                style={{ width: '100%', height: '450px', border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info and Form */}
            <div className="col-md-6">
              <h5>Our Address</h5>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts.
              </p>
              <ul className="list-unstyled mb-4">
                <li><strong>📍</strong> 198 West 21th Street, Suite 721 New York NY 10016</li>
                <li><strong>📞</strong> +1235 2355 98</li>
                <li><strong>📧</strong> info@yoursite.com</li>
                <li><strong>🌐</strong> www.yoursite.com</li>
              </ul>

              <form>
                <div className="row g-2">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="mt-3">
                  <textarea rows="4" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-dark w-100">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
        </div>
  )
}

export default Contact