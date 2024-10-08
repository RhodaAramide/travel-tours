
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
        const data = await Packages(hotel_id); //Thi fetches packages by hotel_id
        const selected = Array.isArray(data) ? data : [data.data]; //This formats the data into Array
        //This for loop handles the hotel_id extraction for packages
        for (let i = 0; i < selected.length; i++) {      
          if(hotel_id == selected[i].hotel_id)   
            var selectedPackage = selected.find(p => p.hotel_id === selected[i].hotel_id);
            setPkg(selectedPackage);
          }                
      } catch (error) { //This catches the error in fetching data
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!pkg) {
    return <div>Package not found.</div>;
  }
  const parser = new DOMParser();
  const parsedHTML = parser.parseFromString(pkg.unit_configuration_label, 'text/html');
  const formattedPkg = parsedHTML.body.textContent;

  return (
    <>
    <Navbar />
    <div className="container mx-auto  py-8 max-w-screen-lg">
      <div className="bg-white mx-4 shadow-lg rounded-lg overflow-hidden">
        <img src={pkg.max_photo_url} alt={pkg.hotel_name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-primary text-3xl font-bold mb-4">{pkg.hotel_name}</h2>
          <p className="text-text text-xl font-semibold">{pkg.address}</p>
          <p className="text-primary text-xl font-semibold mt-2 mb-4 flex gap-2">{pkg.country_trans}</p>
          <p className="text-primary text-xl font-medium mb-4">#{parseFloat(pkg.min_total_price).toFixed(2)}</p>          
          <p className="text-primary text-xl font-medium mb-4">{formattedPkg}</p>
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
