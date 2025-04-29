import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import './BookingBar.css'

const BookingBar = () => {
  const [hotel, setHotel] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const hotels = ['Hotel California', 'Grand Palace', 'Sea View Resort'];

  return (
    
    <div class="booking-bar  container-fluid p-0 d-flex flex-column flex-md-row align-items-center justify-content-between">
 
  <div class="dropdown hotel-select px-5 mb-2 mb-md-0 p-3">
    <button
      class="btn dropdown-toggle text-white fw-bold border border-white w-100"
      type="button"
      id="hotelDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Select Hotel
    </button>
    <ul class="dropdown-menu" aria-labelledby="hotelDropdown">
      <li><a class="dropdown-item" href="#">Hotel A</a></li>
      <li><a class="dropdown-item" href="#">Hotel B</a></li>
      <li><a class="dropdown-item" href="#">Hotel C</a></li>
    </ul>
  </div>


  <div class="date-group text-white text-center mb-2 mb-md-0">
    <div class="label">CHECK IN</div>
    <input type="date" class="form-control date-input" />
  </div>

 
  <div class="date-group text-white text-center mb-2 mb-md-0">
    <div class="label">CHECK OUT</div>
    <input type="date" class="form-control date-input" />
  </div>

  
  <button class="btn check-btn text-white d-flex flex-column align-items-center justify-content-center">
    <span>CHECK<br />AVAILABILITY</span>
    <span class="arrow">&gt;</span>
  </button>
</div>

  );
};

export default BookingBar;
