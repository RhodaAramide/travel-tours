
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => { //This handles the toggle menu for the hamburger icon
    setIsOpen(!isOpen);
  };
  //function to scroll to the about section of the page using id
  const aboutSection = useRef(null);
  const scrollTo = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    })
  }
  //function to scroll to the contact section of the page using id
  const contactSection = useRef(null);
  const scrollFor = () => {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <nav className="bg-primary text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold"><FontAwesomeIcon icon={faPlane} rotation={270} size="sm" style={{color: "#ffffff",}} /> EaseExplore</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu}>  {/* This adds the hamburger icon when screen size is small */}
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
        {/* Links to different page and different parts of the page */}
        <div className={`mr-8 md:flex items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>           
          <Link to="/" className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-2 hover:bg-background rounded">
            Home
          </Link>          
          <Link to="#about" onClick={scrollTo} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-2 hover:bg-background rounded">
            About
          </Link>
          <Link to="/#contact" onClick={scrollFor} className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-2 hover:bg-background rounded">Contact</Link>
          <Link to="/confirmation" className="block mt-4 px-4 py-2 md:inline-block md:mt-0 mx-2 hover:bg-background rounded">
            My Bookings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
