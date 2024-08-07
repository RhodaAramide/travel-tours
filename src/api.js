import axios from 'axios';

const API_URL = 'https://booking-com.p.rapidapi.com/v1/hotels/search'; //The API endpoint
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY; //This import the API key from .env
const apiClient = axios.create({ //This accepts the headers
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json', 
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com' // Ensure the host matches the API endpoint
  }
});
export const Packages = async () => { //This function retreives data from API using axios
  try {
    const response = await apiClient.get('', { //The parameters
      params: {
        checkout_date: '2024-09-15',
        order_by: 'popularity',
        filter_by_currency: 'AED',
        room_number: '1',
        dest_id: '155',
        dest_type: 'country',
        adults_number: '2',
        checkin_date: '2024-09-14',
        locale: 'en-gb',
        units: 'metric'        
      },
    });    
    return response.data.result; //This returns the data format
  } catch (error) { //This catches the necessary errors
    console.error('Error details:', error.response ? error.response.data : error.message);
    if (error.response && error.response.status === 403) {
      throw new Error('Subscription error: Please check your API subscription and try again.');
    }
    throw new Error('Error fetching travel packages');
  }
};