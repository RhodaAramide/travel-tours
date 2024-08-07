import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackageList from '../components/PackageList';
import SearchList from '../components/SearchList';


const PackagePage = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState({ price: '', location: '', type: '' });
  const [packages, setPackages] = useState([]);
  
  const fetchHotelData = (query) => {
    const apiKey = '0e2fca4d67mshf6023e364efee7bp1abddajsn08fd4ddf5e32';
  
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search';
  
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      },
      params: {
        checkout_date: '2024-09-15',
        order_by: 'popularity',
        filter_by_currency: 'AED',
        room_number: '1',
        dest_id: '155',
        dest_type: 'country',
        adults_number: '2',
        checkin_date: '2024-09-14',
        locale: 'en-gb',
        units: 'metric', 
        query: query
      }
    })
      .then(response => {
        // Handle the response data
        // console.log(response.data.result);             
        const data = response.data.result;
        const packagesArray = Array.isArray(data) ? data : [data.data];
        setPackages(packagesArray);
        // Continue with filtering and displaying the data
      })
      .catch(error => {
        console.error(error);
      });      
  };
 
  
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  
  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Perform the API request using the searchQuery
    fetchHotelData(query);
  };

  return (
    <>
     <Navbar />
     <div className="flex justify-center my-8">
        <input
          type="text"
          placeholder="Search for destinations..."
          value={query}
          onChange={handleSearchChange}
          // handleFilterChange={handleFilterChange}
          className="w-1/2 text-text p-2 rounded-l-lg border-2 border-primary focus:outline-none"
        />
        <button           
          onClick={handleSearch} 
          className="bg-primary text-white px-6 py-3 rounded-r-lg shadow-md hover:bg-backround transition duration-300"
        >
          Search
        </button>
      </div>
     <SearchList packages={packages} filter={filter} />
      <PackageList />
      <Footer /> 
    </>
  );
};

export default PackagePage;
