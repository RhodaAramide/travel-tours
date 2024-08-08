import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PackageList from '../components/PackageList';
import SearchList from '../components/PackageList';


const PackagePage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
     <Navbar />     
      <PackageList />     
      <Footer /> 
    </div>
  );
};

export default PackagePage;
