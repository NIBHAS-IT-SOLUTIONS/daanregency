import React, { useEffect,useRef } from 'react'
import Header from '../../Components/Header/Header'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();
  useEffect(() => {
    document.title = 'Daan - Contact';
  }, []);
  const sendEmail = async (event) => {
    event.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm('service_1j4caxt', 'template_akja3k8', form.current, {
        publicKey: '7R-FaYe_wGKzdQWYv',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          window.alert("Message Sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
  

  };
  return (
    
    <div>
        <Header/>
        <div className="contact-page">
      {/* Hero Section */}
      {/* <section className="hero-section text-center text-white d-flex align-items-center justify-content-center my-10">
        <div>
          <h2>Contact Us</h2>
          <p>
           We Would Like to Hear From You
            
          </p>
        </div>
      </section> */}
            <section className="d-flex flex-column justify-content-center align-items-center text-white text-center"
       style={{
                      height: '450px',
                      backgroundImage: `url('https://i.postimg.cc/PfLLnBBC/Copy-of-Facade-5.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'scroll'
                    }}>
        <div >
          <h2 style={{
            fontSize:'3rem',
            fontWeight:'bold'
          }}>Contact Us</h2>
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
                Always welcome to our Premises
              </p>
              <ul className="list-unstyled mb-4">
                <li><strong>📍</strong> Daan Regency and Resorts, Kochi Trivandrum,Thrissur</li>
                <li><strong>📞</strong> +91 98765 43210</li>
                {/* <li><strong>📧</strong> info@yoursite.com</li> */}
                
              </ul>

              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-2">
                  <div className="col-md-6">
                    <input type="text" id="from_name"
                   name="from_name" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" 
                     id="email"
                     name="frommail"className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-md-12">
                    <input type="phone"  name="phone" className="form-control" placeholder="Phone" />
                  </div>
                </div>
                <div className="mt-3">
                  <textarea rows="4" name="message" className="form-control" placeholder="Message"></textarea>
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