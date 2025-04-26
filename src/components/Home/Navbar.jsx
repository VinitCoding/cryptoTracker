import React from 'react'
// import logo_img from '../../public/images/logo.svg'
import logo_img from '../../images/logo.svg'
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from '../ThemeContext';


const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  
  return (
    <nav className={`fixed w-full p-3 border-b border-gray-300 dark:border-gray-500 flex justify-between items-center px-6 bg-white/30 dark:bg-[#313b5a79] backdrop-blur-md z-10 transition-colors duration-500`}>
      <img src={logo_img} alt="logo" />
      
      {/* Theme toggler */}
      <div onClick={toggleTheme} className='bg-zinc-300 cursor-pointer dark:bg-zinc-600 p-2 rounded-xl py-1' title={darkMode ? 'Light Mode' : 'Dark Mode'}>
        <button >
          {
            darkMode ? <MdLightMode className={`text-xl text-zinc-800 dark:text-zinc-200 pt-0.5`} /> : <MdDarkMode className={`text-xl text-zinc-800 pt-0.5`} />
          }
        </button>
      </div>


    </nav>
  )
}

export default Navbar