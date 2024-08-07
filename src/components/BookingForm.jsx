
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from './Navbar';
import Footer from './Footer';


const BookingForm = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { pkgId, pkgName, pkgPrice } = location.state;

  const [date, setDate] = useState(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [bookingStatus, setBookingStatus] = useState(null);

  const handleBooking = (e) => {
    e.preventDefault();
    const bookingDetails = { pkgId, name, email, pkgName, checkInDate, checkOutDate};

    // Get existing bookings from LocalStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Add new booking
    existingBookings.push(bookingDetails);

    // Save updated bookings back to LocalStorage
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    setBookingStatus('Booking successful!');
    setName('');
    setEmail('');
    setCheckInDate('');
    setCheckOutDate('');

    
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto bg-primary shadow-lg rounded-lg overflow-hidden m-8 text-white p-8 max-w-screen-lg">
      <h2 className="text-3xl font-bold mb-4">Book {pkgName}</h2>
      <p className="text-text text-xl mb-4">#{pkgPrice}</p>
      <form id='booking-form' onSubmit={handleBooking} className="mt-8">
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            className="w-full text-text p-2 border border-text rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            className="w-full text-text p-2 border border-text rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
      
      <div className="mb-4">
        <label className="block mb-2">Checkin Date:</label>
        <DatePicker
          showTimeSelect
          minTime={new Date(0, 0, 0, 0, 0)}
          maxTime={new Date(0, 0, 0, 23, 30)}
          selectsStart
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          checkInDate={checkInDate}
          dateFormat="MMMM d, yyyy h:mm"       
          className='text-text w-full' 
        />
        <label className="block mb-2">Checkout Date:</label>
        <DatePicker
          showTimeSelect
          minTime={new Date(0, 0, 0, 0, 0)}
          maxTime={new Date(0, 0, 0, 23, 30)}
          selectsEnd
          selected={checkOutDate}        
          onChange={(date) => setCheckOutDate(date)}
          checkOutDate={checkOutDate}
          checkInDate={checkInDate}
          minDate={checkInDate}        
          dateFormat="MMMM d, yyyy h:mm"   
          className='text-text w-full'      
        />
      </div>
    </div>       
    <button type="submit" className="bg-white text-primary py-2 px-4 rounded hover:bg-background">
      Book Now
    </button>
    {bookingStatus && <div className="mt-4">{bookingStatus}</div>}     
  </form>
    
    <div className="font-bold flex justify-center bg-white text-primary my-8 px-4 py-2 mx-2 hover:bg-teal-500 rounded">
      <button><Link to="/confirmation"> My Bookings </Link> </button>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default BookingForm;
