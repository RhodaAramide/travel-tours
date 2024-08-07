
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const PackageCard = ({ pkg }) => {
  
  return (
    <div className="bg-white h-full shadow-lg rounded-lg overflow-hidden"> 
      <img src={pkg.max_photo_url} alt={pkg.hotel_name} className="w-full h-48 object-cover" />
      <div className="h-full p-4">
        <h3 className="text-lg font-bold">{pkg.hotel_name}</h3>
        <p className="text-gray-700">{pkg.address}</p>
        <p className="text-primary font-semibold mt-2 flex gap-2">{pkg.country_trans}
          <span>#{pkg.min_total_price}</span>
          </p>
        <div className="text-teal-600 font-semibold mt-2 flex gap-2">
          <FontAwesomeIcon icon={faStar} style={{color: "#FFA534",}} /> 
          <p className='mr-4'>{pkg.review_score} </p>
          <span>{pkg.review_score_word}</span>
        </div>
        {/* /**
         * Generates a link to view details of a package with the specified hotel ID.
         * @param {{string}} pkg.hotel_id - The ID of the hotel package.
         * @returns A link element to view details of the package.
         */ }
        <Link to={`/packages/${pkg.hotel_id}`} className="text-blue-500 hover:underline mt-2 block">
          View Details
        </Link>
      </div>      
    </div>
  );
};
 

export default PackageCard;
