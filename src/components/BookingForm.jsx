// src/components/BookingForm.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookingForm = () => {
  const location = useLocation();
  const packageId = new URLSearchParams(location.search).get('packageId');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save booking details to LocalStorage
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({ packageId, ...formData });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    window.location.href = '/confirmation';
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-primary mb-4">Book Your Package</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded-lg border-2 border-secondary focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded-lg border-2 border-secondary focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 rounded-lg border-2 border-secondary focus:outline-none"
        />
        <button type="submit" className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary transition duration-300">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
