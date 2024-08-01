
import axios from 'axios';

const API_URL = "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails";
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;


const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
});

export const Packages = async () => {
  try {
    const response = await apiClient.get('', {
      params: {
        hotel_id: '191605',
        arrival_date: '2024-08-02',
        departure_date: '2024-08-05',
        adults: '1',
        children_age: '1,17',
        room_qty: '1',
        units: 'metric',
        temperature_unit: 'c',
        languagecode: 'en-us',
        currency_code: 'EUR'
      },
    });
    console.log('API Key:', API_KEY);
    return response.data;
    
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    throw new Error('Error fetching travel packages');
  }
};
