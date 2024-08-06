
import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Packages } from '../api';

const PackageDetails = () => {
  const { hotel_id } = useParams();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const data = await Packages('');
        const Arraydata = Array.isArray(data) ? data : [data];        
        const selectedPackage = Arraydata.find(p => p.hotel_id === parseInt(hotel_id));
        setPkg(selectedPackage);
      } catch (error) {
        setError('Error fetching package details.');
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [hotel_id]);

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

  return (
    <div className="container mx-auto py-8 max-w-screen-lg">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={pkg.max_photo_url} alt={pkg.hotel_name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-4">{pkg.hotel_name}</h2>
          <p className="text-gray-700 mb-4">{pkg.address}</p>
          <p className="text-purple-500 text-xl mb-4">${pkg.min_total_price}</p>          
          
        </div>
      <div className="flex justify-center">
        <button 
          onClick={handleBookNow} 
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary transition duration-300"
        >
          Book Now
        </button>
        </div>
    </div>
    </div>
  );
};

export default PackageDetails;
