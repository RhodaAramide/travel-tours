
import React from 'react';

const testimonials = [
  { name: 'John Doe', comment: 'Amazing experience! Highly recommend.' },
  { name: 'Jane Smith', comment: 'The best travel service I have ever used.' },
  { name: 'Alice Johnson', comment: 'Exceptional quality and great service.' }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-primary mb-4">What Our Clients Say</h2>
      <ul className="space-y-4">
        {testimonials.map((testimony, index) => (
          <li key={index} className="text-gray-700">
            <p className="font-semibold">{testimony.name}</p>
            <p>{testimony.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
