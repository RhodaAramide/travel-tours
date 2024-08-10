import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FeaturedPackages from './FeaturedPackages';
;

const Destinations = ({ packages }) => {
    const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = () => {
    navigate('/packages'); // Navigate to PackagePage
  };
  return (
    <div className="container mx-auto my-8">
        <div className="flex justify-between mb-8 mx-4">
            <h2 className="text-3xl text-primary font-bold ">Explore Top Destinations</h2>
            <button 
                onClick={handleClick} 
                className="bg-primary mr-8 text-white px-6 py-3 rounded-lg shadow-md hover:bg-background transition duration-300"
                >
                View All
            </button>
        </div>
        <div className=''>
          <FeaturedPackages packages={packages}/>
       </div>
  </div>
  )
}

export default Destinations