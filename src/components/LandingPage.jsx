
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import PackageList from './PackageList';
import Testimonials from './Testimonials';
// import { fetchTravelPackages } from '../api';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ price: '', location: '', type: '' });
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const getPackages = async () => {
      try {
        const data = await fetchTravelPackages(searchTerm);
        setPackages(data.result);
      } catch (error) {
        console.error('Error fetching packages:', error);
      }
    };

    if (searchTerm) {
      getPackages();
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <Header 
        searchTerm={searchTerm} 
        handleSearchChange={handleSearchChange} 
        handleSearch={handleSearch} 
      />
      <section className="p-6">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">Featured Travel Packages</h2>
        <PackageList packages={packages} filter={filter} />
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
