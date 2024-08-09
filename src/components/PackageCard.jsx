
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { UsersIcon } from '@heroicons/react/solid';


const PackageCard = ({ pkg }) => {
  //UseState hook to manage the state of whether an item is marked as favorite.  
  const [isFavorite, setIsFavorite] = useState(false);

  /**
   * useEffect hook that checks if the current package is in the favorites list stored in local storage.
   * If it is, sets the isFavorite state to true.   
   */
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(storedFavorites.includes(pkg.hotel_id));
  }, []);

  /**
   * Toggles the favorite status of a hotel package.
   * Retrieves the list of stored favorites from local storage, then either adds or removes
   * the current package's hotel ID from the favorites list based on its current favorite status.
   * Updates the local storage with the updated favorites list and toggles the favorite status.   
   */
  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = storedFavorites.filter(id => id !== pkg.hotel_id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem('favorites', JSON.stringify([...storedFavorites, pkg.hotel_id]));
    }
    setIsFavorite(!isFavorite);
  };

  
  return (
    <div className="bg-white mx-auto my-4 h-full shadow-lg rounded-lg overflow-hidden"> 
      <img src={pkg.max_photo_url} alt={pkg.hotel_name} className="w-full h-64 object-cover" />
      <div className="h-full p-4">
        <h3 className="text-lg font-bold">{pkg.hotel_name}</h3>
        <p className="text-gray-700">{pkg.address}</p>
        <p className="text-primary font-semibold mt-2 flex gap-2">{pkg.country_trans}
          <span>#{parseFloat(pkg.min_total_price).toFixed(2)}</span>
          </p>
        <div className="text-teal-600 font-semibold mt-2 flex gap-2">
          <FontAwesomeIcon icon={faStar} style={{color: "#FFA534",}} /> 
          <p className='mr-4'>{pkg.review_score} </p>
          <UsersIcon className="w-5 h-5" />
          <span>{pkg.review_score_word}</span>
          <button className='text-xl ml-8' onClick={toggleFavorite}>
            <FontAwesomeIcon
              icon={faHeart}
              color={isFavorite ? 'red' : 'gray'}
            />
          </button>
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
