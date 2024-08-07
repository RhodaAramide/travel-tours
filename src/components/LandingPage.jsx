
import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Testimonials from './Testimonials';
import Destinations from './Destinations';
import About from './About';
import Contact from './Contact';



const LandingPage = () => {   
  return (
    <div className='bg-background'>
      <Navbar />
      <Header />
      <section className="p-6">        
        <Destinations />
        <About />       
        <Testimonials />
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
