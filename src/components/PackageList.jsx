import React, { useState, useEffect } from 'react';
import PackageCard from './PackageCard';
import { Packages } from '../api';

const PackageList = () => {     
  const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPackages = async () => {
        try {
          const data = await Packages();
          // console.log('Fetched Data:', data);        
          const packagesArray = Array.isArray(data) ? data : [data];
          setPackages(packagesArray);
        } catch (error) {
          setError('Error fetching travel packages.');
        } finally {
          setLoading(false);
        }
      };
      fetchPackages();
    }, []);
  
      
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
       

  
    return (
        <div className="container mx-auto py-8">
          <h2 className="text-3xl text-primary font-bold mb-4">All Travel Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.length > 0 ? packages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />           
            )) : <p>No packages available</p>}
          </div>
        </div>        
    );
  };

 

export default PackageList