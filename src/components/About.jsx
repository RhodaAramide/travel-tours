import React from 'react';
import aboutImage from '../assets/images/1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellConcierge, faAward, faCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className='container mx-auto bg-cover mb-8 text-white pl-8' style={{ backgroundImage: `url(${aboutImage})` }} >
    {/* // <div className='container mx-auto bg-green-100 mb-8' > */}
        <div className="p-8 text-center  font-bold ">        
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className='text-3xl font-bold mb-4'>
            Welcome to our travel agency, your gateway to extraordinary adventures.      
            </p> 
            <div className='text-xl'>      
              <p className=' px-16 font-bold'>Whether you seek relaxation on pristine beaches, 
              cultural immersion in vibrant cities, </p> 
              <p className=' px-16 font-bold'>or thrilling adventures in breathtaking landscapes, 
              we are here to make your travel dreams a reality.  </p> 
            </div>                           
        </div>       
        <div className='max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-24 p-4 text-center'>
          {/* <div className=''> */}
            <div className='w-64 bg-primary rounded-lg shadow-lg p-8 m-2'>
              <FontAwesomeIcon icon={faBellConcierge}  style={{color: "#ffffff",}} className='mb-4 text-4xl' />
              <h4 className='mb-4 font-bold'>SERVICE</h4>
              <p>
                We specialize in crafting personalized itineraries tailored to your preferences.
              </p>
            </div>
            <div className='w-64 bg-primary rounded-lg shadow-lg p-8 m-2'>
              <FontAwesomeIcon icon={faAward} style={{color: "#ffffff",}} className='mb-4 text-4xl'/>
              <h4 className='mb-4 font-bold'>GUARANTEE</h4>
              <p>
              With a passion for creating unforgettable experiences.
              </p>
            </div>
            <div className='w-64 bg-primary rounded-lg shadow-lg p-8 m-2'>
              <FontAwesomeIcon icon={faCheck} style={{color: "#ffffff",}} className='mb-4 text-4xl' />
              <h4 className='mb-4 font-bold'>EXPERIENCE</h4>
              <p>
              Let us be your trusted guide on a journey of exploration and discovery.
              </p>
            </div>
          {/* </div> */}
        </div>
        {/* <div>
        <img src={aboutImage} className=' mr-4 rounded-lg' />
        </div> */}
    </div>
  )
}

export default About