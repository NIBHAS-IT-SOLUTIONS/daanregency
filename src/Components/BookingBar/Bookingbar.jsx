import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingBar.css'
import { Dropdown, Button, Form, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingBar = () => {
  const [hotel, setHotel] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const hotels = ['Hotel California', 'Grand Palace', 'Sea View Resort'];

  return (
    
//     <div class="booking-bar  container-fluid p-0 d-flex flex-column flex-md-row align-items-center justify-content-between">
 
//   <div class="dropdown hotel-select px-5 mb-2 mb-md-0 p-3">
//     <button
//       class="btn dropdown-toggle text-white fw-bold border border-white w-100"
//       type="button"
//       id="hotelDropdown"
//       data-bs-toggle="dropdown"
//       aria-expanded="false"
//     >
//       Select Hotel
//     </button>
//     <ul class="dropdown-menu" aria-labelledby="hotelDropdown">
//       <li><a class="dropdown-item" href="#">Hotel A</a></li>
//       <li><a class="dropdown-item" href="#">Hotel B</a></li>
//       <li><a class="dropdown-item" href="#">Hotel C</a></li>
//     </ul>
//   </div>


//   <div class="date-group text-white text-center mb-2 mb-md-0">
//     <div class="label">CHECK IN</div>
//     <input type="date" class="form-control date-input" />
//   </div>

 
//   <div class="date-group text-white text-center mb-2 mb-md-0">
//     <div class="label">CHECK OUT</div>
//     <input type="date" class="form-control date-input" />
//   </div>

  
//   <button class="btn check-btn text-white d-flex flex-column align-items-center justify-content-center">
//     <span>CHECK<br />AVAILABILITY</span>
//     <span class="arrow">&gt;</span>
//   </button>
// </div>
<Container fluid className="booking-bar p-0 d-flex flex-column flex-md-row align-items-center justify-content-between  text-white">
      
      <div className="px-5 mb-2 mb-md-0 p-3">
        <Dropdown>
          <Dropdown.Toggle variant="outline-light" className="fw-bold w-100">
            Select Hotel
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Kochi</Dropdown.Item>
            <Dropdown.Item href="#">Trivandrum </Dropdown.Item>
            <Dropdown.Item href="#">Thrissur</Dropdown.Item>
            <Dropdown.Item href="#">Kottayam</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="date-group text-center mb-2 mb-md-0">
        <div className="label">CHECK IN</div>
        <Form.Control type="date" className="date-input" />
      </div>

      <div className="date-group text-center mb-2 mb-md-0">
        <div className="label">CHECK OUT</div>
        <Form.Control type="date" className="date-input" />
      </div>

      <Button variant="outline-light" className="check-btn d-flex flex-column align-items-center justify-content-center">
        <span>CHECK<br />AVAILABILITY</span>
        {/* <span className="arrow">&gt;</span> */}
      </Button>
    </Container>
  );
};

export default BookingBar;
