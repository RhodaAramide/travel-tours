
import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({ pkg }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={pkg.max_photo_url} alt={pkg.hotel_name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{pkg.hotel_name}</h3>
        <p className="text-gray-700">{pkg.address}</p>
        <p className="text-purple-500 mt-2 flex gap-2">{pkg.country_trans}
          <span>${pkg.min_total_price}</span>
          </p>
        <p className="text-blue-500 mt-2 flex gap-2">{pkg.review_score} 
          <span>{pkg.review_score_word}</span>
        </p>
        <Link to={`/packages/${pkg.hotel_id}`} className="text-blue-500 hover:underline mt-2 block">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
