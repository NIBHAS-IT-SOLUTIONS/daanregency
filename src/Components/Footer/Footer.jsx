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
                our vision to provide exceptional hospitality and unforgettable 
                experiences for every guest that walks through our doors
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
                <Link to="#" className="text-white text-decoration-none">Daan Residency</Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
              />
              <p><i className="fas fa-home mr-3"></i> Kerala, India </p>
              <p><i className="fas fa-envelope mr-3"></i> info@daan.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 91 123 465 7890</p>
              <p><i className="fas fa-print mr-3"></i> + 01 98 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2025 Copyright:
        <a className="text-white text-decoration-none" href="https://daanregency.com/">
          Daan Regency
        </a>
      </div>
    </footer>
  );
}

export default Footer;
