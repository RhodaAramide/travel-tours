// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import backgroundImage from '../assets/your-background-image.jpg';

const Header = ({ searchTerm, handleSearchChange, handleSearch }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/packages'); // Navigate to PackagePage
  };
  return (
    <header className="bg-accent bg-center text-white text-center py-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to ExploreEase</h1>
      <p className="text-lg mb-8">Your gateway to amazing travel adventures.</p>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for destinations..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-1/2 p-2 rounded-l-lg border-2 border-secondary focus:outline-none"
        />
        <button 
          onClick={handleSearch} 
          className="bg-secondary text-white px-6 py-3 rounded-r-lg shadow-md hover:bg-primary transition duration-300"
        >
          Search
        </button>
      </div>
      <div className="flex justify-center">
        <button 
          onClick={handleGetStartedClick} 
          className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary transition duration-300"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
