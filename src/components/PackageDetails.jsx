
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Packages } from '../api';
import Navbar from './Navbar';
import Footer from './Footer';

const PackageDetails = () => {
  const { hotel_id } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      try {        
        const data = await Packages(hotel_id); //This fetches packages by hotel_id
        const selected = Array.isArray(data) ? data : [data.data]; //This formats the data into Array
        //This for loop handles the hotel_id extraction for packages
        for (let i = 0; i < selected.length; i++) {      
          if(hotel_id == selected[i].hotel_id)   
            var selectedPackage = selected.find(p => p.hotel_id === selected[i].hotel_id);
            setPkg(selectedPackage);
          }                
      } catch (error) { //This catches the error in fetching packages
        setError('Error fetching package details.');
      } finally {
        setLoading(false);
      }
    };
    fetchPackage();
  }, [hotel_id]);

  //This function navigates to the booking form page
  const handleBookNow = () => {
    navigate('/booking', {
      state: {
        pkgId: pkg.hotel_id,
        pkgName: pkg.hotel_name,
        pkgPrice: pkg.min_total_price
      }
    });
  };
  //This is for the basic checks
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!pkg) {
    return <div>Package not found.</div>;
  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto py-8 max-w-screen-lg">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={pkg.max_photo_url} alt={pkg.hotel_name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-primary text-3xl font-bold mb-4">{pkg.hotel_name}</h2>
          <p className="text-text mb-4">{pkg.address}</p>
          <p className="text-primary font-semibold mt-2 flex gap-2">{pkg.country_trans}</p>
          <p className="text-primary text-xl mb-4">#{pkg.min_total_price}</p>          
          <p className="text-primary text-xl mb-4">{`${pkg.unit_configuration_label}`}</p>
        </div>
      <div className="flex justify-center">
        <button 
          onClick={handleBookNow} //This calls the handleBookNow function for the onClick event
          className="bg-primary text-white mb-4 px-6 py-3 rounded-lg shadow-md hover:bg-primary transition duration-300"
        >
          Book Now
        </button>
        </div>
    </div>
    </div>
    <Footer />
    </>
    
  );
};

export default PackageDetails;
