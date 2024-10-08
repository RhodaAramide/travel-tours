
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingConfirmationPage = () => {
  /**
   * useState hook to manage the state of bookings.  
   */
  const [bookings, setBookings] = useState([]); 
  const [data, setData] = useState([]);

  /**
   * useEffect hook that retrieves stored bookings from local storage and sets the state with the retrieved data.
   * If there are no stored bookings, an empty array is used as the default value.
   * @returns None
   */
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  
  const handleClick = (index) => {
    // Create a copy of the bookings array
    const updatedBookings = [...bookings];
  
    // Remove the booking at the specified index
    updatedBookings.splice(index, 1);
  
    // Update the state with the updated bookings array
    setBookings(updatedBookings);
  
    // Save the updated bookings array in localStorage
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  }

  return (
    <>
     <Navbar />
    <div className="container mx-auto py-8 max-w-screen-lg">
     
      <h1 className="text-3xl font-bold text-primary mb-8">My Bookings</h1>
       {/* /**
       * Conditional rendering based on the length of the bookings array.
       * If the bookings array is empty, it displays a message indicating no bookings.
       * @returns JSX element displaying a message based on the bookings array length.
       */  }
      {bookings.length === 0 ? (
        <p>You have no bookings.</p>
      ) : (
        <div className="grid gap-8">
          {/* /**
           * Renders a list of bookings with their details.
           * bookings - An array of booking objects containing package ID, name, and email.
           * @returns JSX elements representing each booking with its details.
           */ }
          {bookings.map((booking, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4 text-primary">
                <h2 className="text-2xl font-bold mb-4">Booking {index + 1}</h2>
                <div className='flex justify-between font-semibold mr-32'>
                  <p className="mb-2">Package ID: {booking.pkgId}</p>
                  <p className="mb-2">Package Name: {booking.pkgName}</p>
                </div>
                <p className="font-semibold mb-2">Name: {booking.name}</p>
                <p className="font-semibold mb-4">Email: {booking.email}</p>
                <p className='font-semibold'>Checkin Date: {booking.checkInDate}</p>
                <p className='font-semibold'>Checkout Date: {booking.checkOutDate}</p>
                <div className='flex justify-end mr-32 mb-8'>
                <button onClick={() => handleClick(index)} className='bg-red-500 text-white hover:bg-red-300 px-6 py-3 rounded-lg shadow-md transition duration-300'>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};


export default BookingConfirmationPage;


