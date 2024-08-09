
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import backgroundImage from '../assets/images/background-image.svg';

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => { // A function to navigate to packages
    navigate('/packages'); 
  };
  
  const handleSearch = () => { // A function to navigate to packag
    navigate('/packages');
    ;
  };
    
  
  return (
    <header className="bg-cover bg-center text-white text-center pt-16" style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div>
      <h1 className="text-4xl font-bold mb-4">
        Welcome to EaseExplore
      </h1>
      <p className="text-lg mb-8">
        Your gateway to amazing travel adventures. 
      </p>
      <p className="text-lg mb-8">
        Explore the world's most iconic landmarks, with us as your guide.
      </p>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="It's great to have you..."          
          className="w-1/2 text-text p-2 rounded-l-lg border-2 border-primary focus:outline-none"
        />
        <button          
          className="bg-primary text-white px-6 py-3 rounded-r-lg shadow-md hover:bg-backround transition duration-300"
          onClick={handleSearch} //Calls the onClick function
        >
          Welcome
        </button>
      </div>
      <div className="flex justify-center">
        <button 
          onClick={handleGetStartedClick} //Calls the onClick function
          className="bg-primary text-white px-6 mb-8 py-3 rounded-lg shadow-md hover:bg-primary transition duration-300"
        >
          Get Started
        </button>
        </div>
        <div className="h-3 bg-white w-3/4 mt-16 mx-auto"></div>
      </div>
    </header>
  );
};

export default Header;
