
import React from 'react';

const PackageCard = ({ pkg }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* <img src={pkg.imageUrl} alt={pkg.name} className="w-full h-48 object-cover" /> */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{pkg.hotel_name}</h3>
        <p className="text-gray-700">{pkg.address}</p>
        <p className="text-purple-500 mt-2">${pkg.city}</p>
      </div>
    </div>
  );
};

export default PackageCard;
