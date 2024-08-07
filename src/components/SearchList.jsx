
import React from 'react';
import PackageCard from './PackageCard'

const SearchList = ({ packages, filter }) => {  
 

  // Filter packages based on price and location
  const filteredPackages = packages.filter(pkg => {
    const matchesPrice = filter.price ? pkg.min_total_price <= filter.price : true;
    const matchesLocation = filter.location ? pkg.city.toLowerCase().includes(filter.location.toLowerCase()) : true;
    return matchesPrice && matchesLocation;
  });
  
  
  return (
    <div>     
      <h3 className='text-primary font-bold m-8'>My Search List</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">     
      {filteredPackages.length > 0 ? (        
          filteredPackages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />            
          ))
        ) : (
          <p>No search found.</p>
        )}
      </div>
    </div>
  );
};
export default SearchList;
