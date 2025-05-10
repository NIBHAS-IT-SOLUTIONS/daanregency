import React from 'react'

function Footer() {


  return (
    

  <footer
          class="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >

    <section
             class="d-flex justify-content-between p-4"
             style={{backgroundColor: "#000"}}
             >

      <div class="me-5">
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </div>

    </section>

    <section class="">
      <div class="container text-center text-md-start mt-5">

        <div class="row mt-3">

          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">Daan Regency and Hotels</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">Menu</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
               style={{width: "80px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="/" class="text-white">Home</a>
            </p>
            <p>
              <a href="/facilities" class="text-white">Facilities</a>
            </p>
            <p>
              <a href="/about" class="text-white">About</a>
            </p>
            {/* <p>
              <a href="/gallery" class="text-white">Gallery</a>
            </p> */}
            <p>
              <a href="/contact" class="text-white">Contact</a>
            </p>
          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 class="text-uppercase fw-bold">Useful links</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
               style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" class="text-white">Urbn24 Daris</a>
            </p>
            <p>
              <a href="#!" class="text-white">Orchid Kottayam</a>
            </p>
            <p>
              <a href="#!" class="text-white">Yad Inn Kaloor</a>
            </p>
            <p>
              <a href="#!" class="text-white">Daan Residency</a>
            </p>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h6 class="text-uppercase fw-bold">Contact</h6>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i class="fas fa-home mr-3"></i> Kerala, India </p>
            <p><i class="fas fa-envelope mr-3"></i> info@daan.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 91 123 465 7890</p>
            <p><i class="fas fa-print mr-3"></i> + 01 98 567 89</p>
          </div>

        </div>

      </div>
    </section>

    <div
         class="text-center p-3"
        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2025 Copyright:
      <a class="text-white" href="https://daanregency.com/"
         >Daan Regency</a
        >
    </div>

  </footer>

  )
}

export default Footer;