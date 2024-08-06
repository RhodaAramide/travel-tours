
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingForm = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { pkgId, pkgName, pkgPrice } = location.state;

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null);

  const handleBooking = (e) => {
    e.preventDefault();
    const bookingDetails = { pkgId, name, email };

    // Get existing bookings from LocalStorage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Add new booking
    existingBookings.push(bookingDetails);

    // Save updated bookings back to LocalStorage
    localStorage.setItem('bookings', JSON.stringify(existingBookings));

    setBookingStatus('Booking successful!');
    setName('');
    setEmail('');

    // Optionally, navigate to a booking confirmation page or another page
    // navigate('/bookings');
  };

  return (
    <div className="container mx-auto py-8 max-w-screen-lg">
      <h2 className="text-3xl font-bold mb-4">Book {pkgName}</h2>
      <p className="text-purple-500 text-xl mb-4">${pkgPrice}</p>
      <form id='booking-form' onSubmit={handleBooking} className="mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded">
          Book Now
        </button>
        {bookingStatus && <div className="mt-4">{bookingStatus}</div>}
      </form>
    </div>
  );
};

export default BookingForm;
