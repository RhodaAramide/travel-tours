
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { Packages } from '../api';
import PackageCard from '../components/PackageCard';


const PackagePage = () => {
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
    <>
     <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Travel Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.length > 0 ? packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
            // <div key={index} className="border p-4 rounded shadow">
            //   <h3 className="text-xl font-semibold">{pkg.hotel_name} 'No Name'</h3>
            //   <p>{pkg.address} 'No address'</p>              
            // </div>
          )) : <p>No packages available</p>}
        </div>
      </div>
      {/* {/ <Footer /> */} 
    </>
  );
};

export default PackagePage;
