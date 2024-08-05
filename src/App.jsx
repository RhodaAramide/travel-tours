
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PackageDetails from './components/PackageDetails';
import BookingForm from './components/BookingForm';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import PackagePage from './pages/PackagePage'; // Import PackagePage
import SearchList from './components/SearchList';

import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/package/:packageId" element={<PackageDetails />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/confirmation" element={<BookingConfirmationPage />} />
        <Route path="/packages" element={<PackagePage />} /> 
        <Route path="/search" element={<SearchList />} />
      </Routes>
    </Router>
  );
};

export default App;
