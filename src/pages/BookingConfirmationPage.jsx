
import React from 'react';

const BookingConfirmationPage = () => {
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  const latestBooking = bookings[bookings.length - 1] || {};

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-primary mb-4">Booking Confirmation</h2>
      <p className="text-gray-700 mb-4">Thank you for booking with us!</p>
      <h3 className="text-2xl font-bold text-primary mb-2">Booking Details</h3>
      <p className="text-gray-700">Package ID: {latestBooking.packageId}</p>
      <p className="text-gray-700">Name: {latestBooking.name}</p>
      <p className="text-gray-700">Email: {latestBooking.email}</p>
      <p className="text-gray-700">Phone: {latestBooking.phone}</p>
    </div>
  );
};

export default BookingConfirmationPage;
