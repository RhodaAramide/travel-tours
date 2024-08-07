
import React from 'react';

const SearchList = ({ packages, filter }) => {
  
  const filteredPackages = packages.filter(pkg => {
    const matchesPrice = filter.price ? pkg.min_total_price <= filter.price : true;
    const matchesLocation = filter.location ? pkg.address.includes(filter.location) : true;
    const matchesType = filter.type ? pkg.dest_type === filter.type : true;
    return matchesPrice && matchesLocation && matchesType;
  });
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Available Packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <div key={pkg.hotel_id} className="bg-background p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={pkg.max_photo_url} alt={pkg.hotel_name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">{pkg.hotel_name}</h3>
            <p className="text-gray-700 mb-2">{pkg.address}</p>
            <p className="text-lg font-bold text-secondary">{pkg.min_total_price}</p>
            <button className="bg-accent text-white px-4 py-2 rounded-lg mt-4 hover:bg-primary transition duration-300">Book Now</button>
            
        </div>
      ))}
    </div>
    </div>
  );
};



export default SearchList;
