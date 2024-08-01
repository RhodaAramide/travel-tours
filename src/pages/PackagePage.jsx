// src/pages/Packages.js
import React, { useState, useEffect } from 'react';
import { Packages } from '../api';
import PackageCard from '../components/PackageCard';

const PackagePage = ( { Packages } ) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try{
        const data = await Packages();
        setPackages(data);
        // setPackages(await Packages()); 
        } catch (error) {
          setError('Error fetching travel packages.');
        } finally {
          setLoading(false);
        }    
    })();
    }, [Packages]);
    

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Travel Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <p>{pkg.hotel_name}</p>
        ))}
        {/* <PackageCard key={Package.id} pkg={Package.pkg} /> */}
      </div>
    </div>
  );
};

export default PackagePage;
