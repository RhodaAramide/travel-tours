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
    //These are the basic checks  
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
    <div className="mx-4 mb-16">      
        {packages.length > 0 && (
        <div className="mt-2 mb-8">
          {/* /**
           * Renders a Swiper container with specified settings and breakpoints.
           */ }
          <swiper-container style={
                {
                "--swiper-navigation-color": "#0C5E70",
                "--swiper-pagination-color": "#0C5E70",
                "--swiper-pagination-bullet-size": "10px",
                }
            } 
            autoplay-delay="2000"
            autoplay-disable-on-interaction="false"
            autoplay="true" 
            slides-per-view="3" 
            pagination="true" 
            pagination-clickable="true"
            pagination-dynamic-bullets="true"
            navigation="true" 
            breakpoints={
            JSON.stringify({                
                50:{
                    slidesPerView: 1,
                    spaceBetween: 10,
                }, 
                600:{
                  slidesPerView: 2,
                    spaceBetween: 10,
                },   
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },    
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                }
            })
        }>
            {/* /**
             * Renders a list of packages using Swiper slider.
             * @param {Array} packages - An array of package objects to be displayed.
             * @returns JSX element containing Swiper slider with PackageCard components for each package.
             */ }
            {packages.map((pkg) => (
              <swiper-slide key={pkg.id}>
                <PackageCard pkg={pkg} />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      )}
    </div>        
  );
};

export default FeaturedPackages;
