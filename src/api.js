import axios from 'axios';

const API_URL = 'https://booking-com.p.rapidapi.com/v1/hotels/search';
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;


const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com' // Ensure the host matches the API endpoint
  }
});

export const Packages = async () => {
  try {
    const response = await apiClient.get('', {
      params: {
        checkout_date: '2024-09-15',
        order_by: 'popularity',
        filter_by_currency: 'AED',
        include_adjacency: 'true',
        children_number: '2',
        categories_filter_ids: 'class::2,class::4,free_cancellation::1',
        room_number: '1',
        dest_id: '-553173',
        dest_type: 'city',
        adults_number: '2',
        page_number: '0',
        checkin_date: '2024-09-14',
        locale: 'en-gb',
        units: 'metric',
        children_ages: '5,0',
        // query: searchTerm
      },
    });
    
    return response.data.result;
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    if (error.response && error.response.status === 403) {
      throw new Error('Subscription error: Please check your API subscription and try again.');
    }
    throw new Error('Error fetching travel packages');
  }
};