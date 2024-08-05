
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Testimonials from './Testimonials';
import Destinations from './Destinations';
import About from './About';
import Contact from './Contact';



const LandingPage = () => {   
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({ price: '', location: '', type: '' });
  const [packages, setPackages] = useState([]);

  const API_URL = `https://booking-com.p.rapidapi.com/v1/hotels/search?${searchTerm}`;
  const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;


  const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com' // Ensure the host matches the API endpoint
    }
  });

  useEffect(() => {
    const getPackages = async () => {
      try {   
        const response = await apiClient.get('', {
          params: {
            checkout_date: '2024-09-15',
            order_by: 'popularity',
            filter_by_currency: 'AED',
            include_adjacency: 'true',
            children_number: '2',
            categories_filter_ids: 'class::2,class::4,free_cancellation::1',
            room_number: '1',
            dest_id: '-553173',
            dest_type: 'city',
            adults_number: '2',
            page_number: '0',
            checkin_date: '2024-09-14',
            locale: 'en-gb',
            units: 'metric',
            children_ages: '5,0',
            // query: searchTerm
          },
        });
        // console.log(response.data.result);             
        const data = response.data.result;
        const packagesArray = Array.isArray(data) ? data : [data];
        setPackages(packagesArray);
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

  
  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className='bg-background'>
      <Navbar />
      <Header 
        searchTerm={searchTerm} 
        handleSearchChange={handleSearchChange} 
        
      />
      <section className="p-6">
        
        <Destinations />
        <About />
        {/* <SearchList packages={packages} filter={filter} /> */}
        <Testimonials />
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
