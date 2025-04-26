import React from 'react'
import logo_img from '../../images/logo.svg'
import { useTheme } from '../Theme'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const {darkMode, toggleTheme} = useTheme()
  return (
    <nav className='fixed w-full p-3 border-b border-gray-300 dark:border-gray-600 flex justify-between items-center px-5 bg-white/30 dark:bg-[#374861c0] backdrop-blur-md z-10 transition-colors duration-300'>
      <img src={logo_img} alt="logo" />
      
      <div onClick={toggleTheme} className='bg-zinc-300 p-0 px-3 pt-1 rounded-lg'>
        <button>
          {
            darkMode ? <MdLightMode className='text-lg dark:text-zinc-600 text-zinc-200'/> : <MdDarkMode className='text-lg '/>
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar