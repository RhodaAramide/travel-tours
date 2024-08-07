
import React from 'react';
import jane from '../assets/images/picture.png';

//Data used for the testimonials
const testimonials = [
  { name: 'John Doe', comment: 'Amazing experience! Highly recommend.' },
  { name: 'Jane Smith', comment: 'The best travel service I have ever used.' },
  { name: 'Alice Johnson', comment: 'Exceptional quality and great service.' }
];

const Testimonials = () => {
  return (
    <div className="container mx-auto h-46 p-6 rounded-lg shadow-lg mb-16">
      <h2 className="text-2xl font-bold text-primary mb-4">What Our Clients Say</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* This maps through the testimonials to extract the necessary details needed */}
        {testimonials.map((testimony, index) => (
          <li key={index} className="text-gray-700 p-4 bg-accent">
            <div className='flex justify-normal'>
              <img src={jane} className='w-12 h-12 mr-4 rounded-lg' />
              <div>
                <p className="font-semibold">{testimony.name}</p>
                <p>{testimony.comment}</p>
              </div>                            
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
