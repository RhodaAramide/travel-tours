
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { Packages } from '../api';
import PackageCard from '../components/PackageCard';


const PackagePage = ( { Packages } ) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      console.log('Fetching packages...'); // Basic log to ensure useEffect is running
      try {
        const data = await Packages();
        console.log('Fetched Packages:', data); // Log the fetched data
        setPackages(data);
      } catch (error) {
        console.error('Fetch error:', error.message); // Log the error details
        setError('Error fetching travel packages.');
      } finally {
        setLoading(false);
      }
    }; 
    });
    // }, [Packages]);
    

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Travel Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((pkg) => (          
          <PackageCard key={pkg.id} pkg={pkg.pkg} /> 
        ))}
        {/* <PackageCard key={Package.id} pkg={Package.pkg} /> */}
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default PackagePage;
