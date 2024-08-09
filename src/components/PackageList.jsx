import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackageCard from './PackageCard';

const PackageList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetchData();    
  }, []);

 

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_RAPIDAPI_KEY; //This imports my API key from .env file
      const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search'; //This is the API endpoint
      //This gets the data from the API endpoint
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
          units: 'metric'          
        }
      })
      .then(response => {
        // Handle the response data
        response.data.result;
        const result = response.data.result;
        const packagesArray = Array.isArray(result) ? result : [result.data]; //Changes the data into an array
        setData(packagesArray);
        setFilteredData(packagesArray);       
        
      })      
    } catch (error) { //This checks for errors
      setError('Error fetching travel packages.');
    }finally {
      setLoading(false);
    }
  };


  if (loading) { //This is displayed while it is loading
    return <div>Loading...</div>;
  }

  if (error) {  //This displays the error if encountered
    return <div>{error}</div>;
  }

  
  //This handles location change when the location input is being updated
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    filterData(event.target.value, price);
  };
  //This handles location change when the location input is being updated
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    filterData(location, event.target.value);
  };

  //This handles the search and filter logic when search button is clicked
  const handleSearch = () => {
    filterData(location, price);
  };
  //This filters the data by location and price
  const filterData = (location, price) => {
    const filtered = data.filter(item => {
      const matchesLocation = location ? item.address.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesPrice = parseFloat(price) ? parseFloat(item.min_total_price).toFixed(2) <= parseFloat(price) : true;      
      return matchesLocation && matchesPrice;
    });
    setFilteredData(filtered);      
  };
  
  return (
    <>
    <div className='flex justify-center my-8'>
      <div>        
        <input 
        type="text" 
        placeholder='Location' 
        value={location} 
        onChange={handleLocationChange} 
        className="text-text p-2 rounded-l-lg border-2 border-primary focus:outline-none" />
      </div>
      <div>        
        <input 
        type="text" 
        placeholder='Minimum Price' 
        value={price} onChange={handlePriceChange} 
        className="text-text p-2 rounded-l-lg border-2 border-primary focus:outline-none"/>
      </div>
      <button onClick={handleSearch} className="bg-primary text-white px-6 py-3 rounded-r-lg shadow-md hover:bg-backround transition duration-300">
        Search
      </button>
      </div>
      <div className="mx-8 py-8">
        <h2 className="text-3xl text-primary font-bold mb-4">Travel Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.length > 0 ? 
          <div>{filteredData.map((item, index) => (
            <PackageCard key={index} pkg={item} />           
          ))}
          </div> : 
          <div>
            {/* <p>No Search found.</p>   */}
            {data.map((item, index) => (
            <PackageCard key={index} pkg={item} />           
          )) }
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default PackageList;