import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#000" }}
      >
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Daan Regency and Hotels</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p>
                Elegant, cooling and modern cosy room,stay near to city without city hassles. 
                There are all the little extras that make a stay at daan regency so special.Are you on business? Or private trip? 
                It doesn’t matter. 
                We want you to feel completely at ease with your stay in daan regency.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Menu</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "80px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p>
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </p>
              <p>
                <Link to="/facilities" className="text-white text-decoration-none">Facilities</Link>
              </p>
              <p>
                <Link to="/about" className="text-white text-decoration-none">About</Link>
              </p>
              
              <p>
                <Link to="/gallery" className="text-white text-decoration-none">Gallery</Link>
              </p>
              <p>
                <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p>
                <Link to="#" className="text-white text-decoration-none">Urbn24 Daris</Link>
              </p>
              <p>
                <Link to="#" className="text-white text-decoration-none">Orchid Kottayam</Link>
              </p>
              <p>
                <Link to="#" className="text-white text-decoration-none">Yad Inn Kaloor</Link>
              </p>
              <p>
                <Link to="#" className="text-white text-decoration-none">Daan Residency</Link>
              </p>
              <p>
                <Link to="#" className="text-white text-decoration-none">Daan Temple</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p><i className="fas fa-home mr-3"></i> Beevas Tower 1st Street <br />Green Park Kannamkulangara Road <br />  Thrissur, Kerala 680007 </p>
              <p><i className="fas fa-envelope mr-3"></i>	info@daanregency.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 91 90 48 288 688</p>
              <p><i className="fas fa-phone mr-3"></i> + 91 62 38 251 537</p>

            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2025 Copyright: All rights reserved &nbsp;
        <a className="text-white text-decoration-none" href="https://daanregency.com/">
          Daan Regency
        </a>
        <br />
        Our IT Partner &nbsp;
        <Link to={'https://nibhasitsolutions.com/'}>Nibhas IT Solutions</Link> 
      </div>
    </footer>
  );
}

export default Footer;
