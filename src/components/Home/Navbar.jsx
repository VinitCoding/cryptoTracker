import React from 'react'
import logo_img from '../../images/logo.svg'
import { useTheme } from '../Theme'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Tooltip } from 'primereact/tooltip';

const Navbar = () => {
  const {darkMode, toggleTheme} = useTheme()
  return (
    <nav className='fixed w-full p-3 border-b border-gray-300 dark:border-gray-600 flex justify-between items-center px-5 bg-white/30 dark:bg-[#374861c0] backdrop-blur-md z-10 transition-colors duration-300'>
      <img src={logo_img} alt="logo" />

      <Tooltip target=".custom-target-icon" className='text-sm p-0 m-0' pt={{
        text: { style: { fontSize: '12px', maxWidth: '150px', padding: '4px 8px' } }
      }} />
      
      <div onClick={toggleTheme} className='bg-zinc-300 p-0 px-3 custom-target-icon  pt-1 rounded-lg cursor-pointer' data-pr-tooltip={darkMode ? 'Light Mode' : 'Dark Mode'} data-pr-position="left">
        <button className='cursor-pointer'>
          {
            darkMode ? <MdLightMode className='text-lg dark:text-zinc-600 text-zinc-200'/> : <MdDarkMode className='text-lg '/>
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar