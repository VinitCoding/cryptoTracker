import React, { useEffect } from 'react'
import SpotlightCard from '../SpotlightCard'
import feature_1 from '../../images/features/img_1.svg'
import feature_2 from '../../images/features/img_2.svg'
import feature_3 from '../../images/features/img_3.svg'
import feature_4 from '../../images/features/img_4.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


const UseCase = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true,     // whether animation should happen only once
        });
      }, []);
  return (
    <div className='w-full h-1/4 bg-gray-50 p-4 py-12 pb-16 flex flex-col gap-8'>
        <div data-aos="fade-up">
            <h4 className='bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent text-center text-2xl font-IBM font-semibold'>Why to use CryptoPedia ?</h4>
        </div>
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4' data-aos="fade-up">
        <SpotlightCard spotlightColor="rgba(60, 140, 255, 0.3)" className='bg-white border-0 shadow-md rounded-md '>
            <div className='flex flex-col gap-3 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center items-center'>
                <img src={feature_1} alt="" className='w-16'/>
                <h4 className='font-IBM font-medium text-blue-500 text-xl'>Realtime Data</h4>
                <p>Get up-to-the-minute price information</p>
            </div>
        </SpotlightCard>
        <SpotlightCard spotlightColor="rgba(60, 140, 255, 0.3)" className='bg-white border-0 shadow-md rounded-md'>
            <div className='flex flex-col gap-3 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center items-center'>
                <img src={feature_2} alt="" className='w-12'/>
                <h4 className='font-IBM font-medium text-blue-500 text-xl'>Realtime Data</h4>
                <p>Get up-to-the-minute price information</p>
            </div>
        </SpotlightCard>
        <SpotlightCard spotlightColor="rgba(60, 140, 255, 0.3)" className='bg-white border-0 shadow-md rounded-md'>
            <div className='flex flex-col gap-3 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center items-center'>
                <img src={feature_3} alt="" className='w-14'/>
                <h4 className='font-IBM font-medium text-blue-500 text-xl'>Realtime Data</h4>
                <p>Get up-to-the-minute price information</p>
            </div>
            
        </SpotlightCard>
        <SpotlightCard spotlightColor="rgba(60, 140, 255, 0.3)" className='bg-white border-0 shadow-md rounded-md'>
            <div className='flex flex-col gap-3 2xl:items-start xl:items-start lg:items-start md:items-start sm:items-center items-center'>
                <img src={feature_4} alt="" className='w-14'/>
                <h4 className='font-IBM font-medium text-blue-500 text-xl'>Realtime Data</h4>
                <p>Get up-to-the-minute price information</p>
            </div>
        </SpotlightCard>
        </div>
        
    </div>
  )
}

export default UseCase