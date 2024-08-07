import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackageList from '../components/PackageList';
import SearchList from '../components/SearchList';


const PackagePage = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState({ price: '', location: '',  });
  const [packages, setPackages] = useState([]);
  
  
  const fetchHotelData = (query) => {
    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
    const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search';
  
    axios.get(url, {
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'booking-com.p.rapidapi.com'
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
      const data = response.data.result;
      const packagesArray = Array.isArray(data) ? data : [data];
      setPackages(packagesArray);
      
    })
    .catch(error => {
      console.error('Error fetching hotel data:', error);
    });
  };
 
  
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    // setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,    
    
    }));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchHotelData(filter.location); // Use the location from the filter state
  };

  return (
    <>
     <Navbar />
     <div className="flex justify-center my-8">
        {/* <input
          type="text"
          placeholder="Search for destinations..."
          name="price"
          value={filter.price || ''}
          onChange={handleFilterChange}
          // onFilterChange={handleFilterChange}
          className="w-1/2 text-text p-2 rounded-l-lg border-2 border-primary focus:outline-none"
        /> */}
        <input
          type="text"
          placeholder="Search for destinations..."
          name="location"
          value={filter.location || ''}
          // onChange={handleSearchChange}
          onChange={handleFilterChange}
          // onFilterChange={handleFilterChange}
          className="w-1/2 text-text p-2 rounded-l-lg border-2 border-primary focus:outline-none"
        />
        <button           
          onClick={handleSearch} 
          className="bg-primary text-white px-6 py-3 rounded-r-lg shadow-md hover:bg-backround transition duration-300"
        >
          Search
        </button>
      </div>
      <div>
      {query.length === 0 ?
        <PackageList />
      :
     <SearchList packages={packages} filter={filter} />
      }
      </div>
      <Footer /> 
    </>
  );
};

export default PackagePage;
