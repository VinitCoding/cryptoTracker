import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Footer = () => {
    useEffect(() => {
            AOS.init({
              duration: 1000, // animation duration in ms
              once: true,     // whether animation should happen only once
            });
          }, []);
  return (
    <div className='bg-blue-400 py-5' data-aos="fade-up">
        <h4 className='text-white font-IBM font-semibold text-lg text-center'>Copyright © By Vinit Gite. All rights reserved.</h4>
    </div>
  )
}

export default Footer