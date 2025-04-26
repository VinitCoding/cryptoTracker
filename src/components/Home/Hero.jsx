import React, { useEffect } from 'react'
import Particles from '../Particles'
import img_1 from '../../images/coins/img_1.svg'
import img_2 from '../../images/coins/img_2.svg'
import img_3 from '../../images/coins/img_3.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
  useEffect(() => {
              AOS.init({
                duration: 1000, // animation duration in ms
                once: true,     // whether animation should happen only once
              });
  }, []);
  return (
    <div style={{ width: '100%', height: '700px', position: 'relative' }} className='2xl:h-[800px], xl:h-[600px] lg:h-[600px] bg-white dark:bg-[#32384b] transition-colors duration-500'>
        <Particles
        particleColors={['#1479F8', '#81BCFF'] }
          particleCount={800}
          particleSpread={13}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
          sizeRandomness={0}
        />

      {/* <div className='absolute 2xl:top-[23%] xl:top-[20%] md:top-[25%] sm:top-[20%] top-[20%] 2xl:left-[18%] xl:left-[23%] lg:left-[20%] md:left-[15%] sm:left-[5%] left-[5%]'> */}
      <div className='absolute w-full flex flex-col justify-center items-center top-40' data-aos="fade-up">
          <div className='w-full'>
            <h1 className='font-IBM bg-gradient-to-b from-blue-300 to-blue-500 bg-clip-text text-transparent 2xl:text-[7rem] xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl text-6xl 2xl:leading-32 xl:leading-[8rem] md:leading-24 sm:leading-24 leading-20 font-extrabold text-center'>Track Crypto Price in <br /> Real time</h1>
          </div>

          <div className='my-10'>
            <h4 className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base text-base text-center tracking-widest font-medium text-gray-600 dark:text-gray-100 font-Inter'>Stand up-to-date with the latest cryptocurrencies
            and trends </h4>
          </div>

          <div className='flex justify-center items-center mt-3'>
            <button
              className="relative py-3 px-8 text-blue-400 text-base hover:cursor-pointer font-bold overflow-hidden bg-blue-100 rounded transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded hover:before:left-0"
            >
              Get Started
            </button>
          </div>
      </div>

      <div>
        <img data-aos="fade-up" src={img_1} alt="" className='absolute top-[50%] left-[8%] 2xl:block xl:block md:block sm:hidden hidden '/>
        <img data-aos="fade-up" src={img_2} alt="" className='absolute top-[5%] left-[60%] 2xl:block xl:block md:block sm:hidden hidden '/>
        <img data-aos="fade-up" src={img_3} alt="" className='absolute top-[60%] left-[90%] 2xl:block xl:block md:block sm:hidden hidden '/>
      </div>
      </div>
  )
}

export default Hero