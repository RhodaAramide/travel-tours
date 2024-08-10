import React from 'react';
import twitterIcon from '../assets/images/TwitterIcon.png';
import githubIcon from '../assets/images/GitHubIcon.png';
import instagramIcon from '../assets/images/InstagramIcon.png';
import facebookIcon from '../assets/images/FacebookIcon.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-8 p-4 text-center ">      
      <div className="w-full mt-8">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8'>
          <div>
            <h4 className='mb-8'>EaseExplore</h4>
            <p>+ 234 000 000 000</p>
            <p className='text-underline'>support@easeexplore.com</p>
          </div>
          <div className='mx-4'>
            <h4 className='font-bold mb-2'>Quick links</h4>
            <div className='flex justify-between'>
              <div>
                <p className='mb-4'>Product</p>
                <p>Information</p>
              </div>
              <div>
                <p className='mb-4'>Company</p>
                <p>Media</p>
              </div>
            </div>
          </div>
          <div className=''>
            <h4 className='font-bold mb-2'>
              Subscribe
            </h4>
            <div className=''>
              <input
                type="text"
                placeholder="Get Updates"          
                className=" text-text p-2 rounded-l-lg border-2 border-primary focus:outline-none"
              />
              <button           
                className="bg-primary text-white px-6 py-2 rounded-r-lg shadow-md hover:bg-backround transition duration-300"
              >
                Go
              </button>
            </div>            
          </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='flex justify-between gap-2 p-4 text-text font-bold'> 
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 border-rounded'>
            <img src={twitterIcon} className='' />
            <img src={instagramIcon} />
            <img src={githubIcon} />
            <img src={facebookIcon} />
          </div>          
          <div className='flex justify-between gap-2'>
            <p>RhodaAramide</p>
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <p className="font-bold">
              © 2024 EaseExplore. All rights reserved.
            </p>                  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
