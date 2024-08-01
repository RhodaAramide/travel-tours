
import axios from 'axios';

const API_URL = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails';
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
});

export const Packages = async () => {
  try {
    const response = await apiClient.get('', {
      params: {
        hotel_id: '191605',
        adults: '1',
        children_age: '1,17',
        room_qty: '1',
        units: 'metric',
        temperature_unit: 'c',
        languagecode: 'en-us',
        currency_code: 'EUR'
      },
    });
    
  } catch (error) {
    console.error('Error fetching travel packages:', error);
    
  }
};
