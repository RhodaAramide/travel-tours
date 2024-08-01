// src/components/PackageList.js
import React from 'react';

const PackageList = ({ packages, filter }) => {

  const filteredPackages = packages.filter(pkg => {
    const matchesPrice = filter.price ? pkg.price <= filter.price : true;
    const matchesLocation = filter.location ? pkg.location.includes(filter.location) : true;
    const matchesType = filter.type ? pkg.type === filter.type : true;
    return matchesPrice && matchesLocation && matchesType;
  });
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Available Packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <div key={pkg.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={pkg.image_url} alt={pkg.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">{pkg.name}</h3>
            <p className="text-gray-700 mb-2">{pkg.accessibilityLabel}</p>
            <p className="text-lg font-bold text-secondary">{pkg.price}</p>
            <button className="bg-accent text-white px-4 py-2 rounded-lg mt-4 hover:bg-primary transition duration-300">Book Now</button>
            <button 
              onClick={() => handleFavorite(pkg.id)} 
              className="bg-secondary text-white px-4 py-2 rounded-lg mt-2 hover:bg-primary transition duration-300"
            >
              {isFavorite(pkg.id) ? 'Unfavorite' : 'Favorite'}
            </button>
        </div>
      ))}
    </div>
    </div>
  );
};

// Function to handle favoriting a package
const handleFavorite = (id) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

// Function to check if a package is a favorite
const isFavorite = (id) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites.includes(id);
};

export default PackageList;
