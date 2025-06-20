import React, { useEffect,useRef, useState } from 'react'
import Header from '../../Components/Header/Header'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import emailjs from '@emailjs/browser';
import Loading from '../../utils/Loading/Loading';


function Contact() {

  const form = useRef();
   const [loading, setLoading] = useState(true);
      useEffect(() => {
         document.title = 'Daan Hotels - Contact';
    
        setTimeout(() => {
          setLoading(false); // Hide loader after 2 seconds
        }, 2000);
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
        {loading ? (
        <Loading />
      ) : (
        <div className="contact-page">
    
            <section className="d-flex flex-column justify-content-center align-items-center text-white text-center"
       style={{
                      height: '650px',
                      backgroundImage: `url('https://i.postimg.cc/QxVrVMr3/Untitled-design-28.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundAttachment: 'scroll'
                    }}>
        <div >
          <h2 style={{
           fontFamily: 'Expletus Sans',                                   
            fontSize:'3rem',
            fontWeight:'bold'
          }}>Contact Us</h2>
          <p style={{ fontFamily: 'Tree Ghost',fontSize:'1.5rem'}}>
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
              {/* <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31383.651540624396!2d76.216731!3d10.504097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7efdcc752f73b%3A0x732e8a94fcde4976!2sDaan%20Regency!5e0!3m2!1sen!2sus!4v1748248633575!5m2!1sen!2sus"
                style={{ width: '100%', height: '450px', border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe> */}
              <iframe 
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d503561.17790876474!2d76.521084!3d9.589088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba0c213d92d%3A0x604a1e1cabeca535!2sDaan%20Orchid%20Residency!5e0!3m2!1sen!2sus!4v1750316098317!5m2!1sen!2sus&z=18"  
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              style={{ width: '100%', height: '450px', border: 0 }}
              ></iframe>
            </div>

            {/* Contact Info and Form */}
            <div className="col-md-6">
             
             
              <ul className="list-unstyled mb-4">
                <li><strong>📍</strong> DAAN HOSPITALITY SOLUTIONS PVT LTD <br />
                Orchid Residency <br />Pulimoodu Rd, Pulimoodu Jn, <br />  Kottayam 686001</li>
                <li><strong>📞</strong> + 91 96 33 833 141</li>
                {/* <li><strong>📞</strong> + 91 62 38 251 537</li> */}
                <li><strong>📧</strong> info@daanorchidresidency.com</li>
              
              </ul>

              <form ref={form} onSubmit={sendEmail}>
                <div className="row g-2">
                  <div className="col-md-6">
                    <input type="text" id="from_name" required
                   name="from_name" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" 
                     id="email" required
                     name="frommail"className="form-control" placeholder="Email" />
                  </div>
                  <div className="col-md-12">
                    <input type="phone" required  name="phone" className="form-control" placeholder="Phone" />
                  </div>
                </div>
                <div className="mt-3">
                  <textarea rows="4" required name="message" className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="mt-3">
                  <button type="submit" className="btn btn-dark w-100">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>)}
    <Footer/>
        </div>
  )
}

export default Contact