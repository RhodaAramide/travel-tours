import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-4 text-center">
      <div className="container mx-auto text-center">
        <p className="mb-4">© 2024 ExploreEase. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-gray-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
