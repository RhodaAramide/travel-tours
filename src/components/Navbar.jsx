
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const aboutSection = useRef(null);
  const scrollTo = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">EaseExplore</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        <div className={`mr-8 md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/" className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-2 hover:bg-background rounded">
            Home
          </Link>
          <Link to="/packages" className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-2 hover:bg-background rounded">
            Packages
          </Link>
          <Link to="#about" onClick={scrollTo} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-2 hover:bg-background rounded">
            About
          </Link>
          <Link to="/#contact" onClick={scrollTo} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-2 hover:bg-background rounded">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
