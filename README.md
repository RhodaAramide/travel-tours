
# EaseExplore

EaseExplore is a travel and tours website built using React.js and Tailwind CSS. This project aims to introduce front-end web development concepts such as creating interactive web applications, integrating APIs, managing state, and simulating user authentication using LocalStorage.

## Features

- **Search and Filter:** Users can search for travel destinations and filter results based on criteria such as price and location.
- **Package Details:** Detailed views for each travel package with information like name, address, price and user reviews.
- **Booking:** A form for users to book packages and save their details using client-side storage solutions such as LocalStorage.
- **Booking Confirmation:** Display a booking confirmation page showing the details of the booked travel package.
- **Favorite Packages:** Allow users to mark travel packages as favorites and store this information in LocalStorage.
- **Testimonials:** Add a section for user testimonials or reviews to enhance credibility.

## Technologies Used

- **React.js:** For building the application.
- **Tailwind CSS:** For styling the application.
- **Axios:** For making HTTP requests to the Booking.com API via RapidAPI.
- **LocalStorage:** To simulate user authentication and save user data.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js and npm installed on your machine.
- RapidAPI account with access to the Booking.com API.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/RhodaAramide/travel-tours.git
   cd EaseExplore
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Tailwind CSS:**

   Ensure you have the following configuration in `tailwind.config.js`:

   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           primary: '#6b21a8',
           secondary: '#a855f7',
           accent: '#d8b4fe',
           background: '#faf5ff',
         },
       },
     },
     plugins: [],
   }
   ```

4. **Create `.env` file:**

   Create a `.env` file at the root of the project and add your RapidAPI key:

   ```env
   VITE_RAPIDAPI_KEY=your_rapidapi_key
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:5173`.

## Project Structure

```
EaseExplore/
├── public/
│   └── index.html
├── src/
│   ├── assets/images/
│   │   └── your-background-image.jpg
│   ├── components/
        ├── About.jsx
        ├── Contact.jsx
        ├── Destintions.jsx
        ├── FeaturedPackages.jsx
│   │   ├── PackageCard.jsx
│   │   ├── BookingForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Navbar.jsx
│   │   ├── PackageDetails.jsx
│   │   ├── PackageList.jsx
│   │   ├── Testimonials.jsx
│   │   └── FavoritePackages.js
│   ├── pages/
│   │   ├── BookingConfirmationPage.jsx
│   │   ├── PackagePage.jsx
│   │   └── HomePage.jsx
│   ├── api.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── tailwind.config.js
├── .env
├── package.json
├── README.md
└── tailwind.config.js
```

## Components

- **Navbar:** Navigation bar at the top of the page.
- **Header:** Header section with a search bar and a "Get Started" button.
- **About:** About shows detailed information about the website.
- **Contact:** Contact section with a form and a "Submit" button to contact and drop a message.
- **Destinations:** Header section with a search bar and a "Get Started" button.
- **Featured Packages:** This section displays the packages in a grid format with a slider.
- **LandingPage:** Main landing page with featured travel packages and testimonials.
- **PackageList:** Displays a list of travel packages and also filters and search through packages.
- **PackageCard:** Shows detailed information for a specific travel package and it styled like a card to be use throughout.
- **PackageDetails:** Shows detailed information for a specific travel package.
- **BookingForm:** Form for booking a travel package.
- **BookingConfirmation:** Displays booking confirmation details.
- **Testimonials:** Section for user testimonials.
- **Footer:** Footer section at the bottom of the page.

## Pages
- **BookingConfirmationPage:** This page displays booking confirmation details and a function to delete any booking. 
- **HomePage:** Displays the Main Landing Page.
- **PackagePage:** Displays a list of travel packages with the search and filter field.

## API Integration

The project integrates with the Booking.com API via RapidAPI to fetch travel packages based on search terms.

### Example API Service (`api.js`)

```js
// src/api.js
import axios from 'axios';

// Set up the API endpoint and headers
const API_URL = 'https://booking-com.p.rapidapi.com/v1/hotels/search';
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
    return response.data.result;
  } catch (error) {
    console.error('Error fetching travel packages:', error);
    throw error;
  }
};
```

## Usage

### Searching for Destinations

1. Enter a destination in the search bar located in the header.
2. Click the "Search" button to display the results.
3. Filter the search results based on criteria such as price and location.

### Viewing Package Details

1. Click on any travel package to view its detailed information.
2. The details page will show information such as the name, address, pricing, and user reviews.

### Booking a Package

1. On the package details page, click the "Book Now" button.
2. Fill out the booking form with the required user details.
3. Submit the form to save the booking details using LocalStorage.

### Viewing Booking Confirmation

1. After booking a package, you will be redirected to the booking confirmation page.
2. The booking confirmation page will display the details of the booked travel package.

### Marking Favorite Packages

1. On the package page, click the heart icon to add and remove from favorites.
2. The package will be saved to your favorites using LocalStorage.


### Viewing Testimonials

1. The landing page includes a section for user testimonials.
2. User testimonials enhance the credibility of the website and provide feedback from previous travelers.

## Deployment

The project is deployed and can be accessed at the following link:

[EaseExplore Deployed Application](https://exploreease-fwp8.onrender.com)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [RapidAPI](https://rapidapi.com/)
- [Booking.com API](https://rapidapi.com/tipsters/api/booking-com/)
- [Tourism icons created by GOWI - Flaticon](https://www.flaticon.com/free-icons/tourism)

