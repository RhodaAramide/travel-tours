
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
  const { packageId } = useParams();
  // Mock data
  const [packageData, setPackageData] = React.useState({
    title: 'Sample Package',
    description: 'This is a detailed description of the sample package.',
    price: '$500',
    images: ['https://via.placeholder.com/300'],
    itinerary: 'Day 1: Arrival, Day 2: Tour, Day 3: Departure',
    inclusions: 'Accommodation, Meals, Tour Guide',
    reviews: ['Excellent!', 'Very good experience.']
  });

  // In a real-world scenario, you would fetch package data from an API here
  

  return (
    <div className="p-6">      
      <h2 className="text-3xl font-bold text-primary mb-4">{packageData.title}</h2>
      <img src={packageData.images[0]} alt={packageData.title} className="w-full h-60 object-cover mb-4" />
      <p className="text-gray-700 mb-4">{packageData.description}</p>
      <p className="text-lg font-bold text-secondary mb-4">{packageData.price}</p>
      <h3 className="text-2xl font-bold text-primary mb-2">Itinerary</h3>
      <p className="text-gray-700 mb-4">{packageData.itinerary}</p>
      <h3 className="text-2xl font-bold text-primary mb-2">Inclusions</h3>
      <p className="text-gray-700 mb-4">{packageData.inclusions}</p>
      <h3 className="text-2xl font-bold text-primary mb-2">Reviews</h3>
      <ul className="list-disc list-inside mb-4">
        {packageData.reviews.map((review, index) => (
          <li key={index} className="text-gray-700">{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default PackageDetails;
