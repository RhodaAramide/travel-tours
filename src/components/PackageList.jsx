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
          const data = await Packages();     //This fetches packages     
          const packagesArray = Array.isArray(data) ? data : [data]; //This formats the data into Array
          setPackages(packagesArray);
        } catch (error) { //This catches the error in fetching packages
          setError('Error fetching travel packages.');
        } finally {
          setLoading(false);
        }
      };
      fetchPackages(); //The function is called here
    }, []);      
    //This is for the basic checks
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
            {/* This maps through the packages to get data for each package */}
            {packages.length > 0 ? packages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />           
            )) : <p>No packages available</p>}
          </div>
        </div>        
    );
  };

 

export default PackageList