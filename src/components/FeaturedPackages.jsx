import React, { useState, useEffect } from 'react';
import { Packages } from '../api';
import PackageCard from './PackageCard';


const FeaturedPackages = () => {
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

    if (packages.length === 0) {
        return <div>No packages found.</div>;
      }

  return (
    <div className="mx-4 mb-16 h-max">    
      
      <div className='mb-4'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.slice(0, 4).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
            ))}
        </div>
        {packages.length > 0 && (
        <div className="mt-8 mb-8">
          <swiper-container space-between="" slides-per-view="3" pagination="true" navigation="true" breakpoints={
            JSON.stringify({                
                640:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                },    
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },    
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                }
            })
        }>
            {packages.slice(4).map((pkg) => (
              <swiper-slide key={pkg.id}>
                <PackageCard pkg={pkg} />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      )}
    </div>

      </div>
     
        
  );
};

export default FeaturedPackages;
