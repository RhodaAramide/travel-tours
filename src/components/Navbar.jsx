// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">EaseExplore</Link>
        <div>
          <Link to="/" className="text-white px-4 py-2 hover:bg-secondary rounded">Home</Link>
          <Link to="/packages" className="text-white px-4 py-2 hover:bg-secondary rounded">Packages</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
