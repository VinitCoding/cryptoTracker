import React from 'react'
// import logo_img from '../../public/images/logo.svg'
import logo_img from '../../images/logo.svg'

const Navbar = () => {
  return (
    <nav className='p-3 border-b-[0.5px] border-gray-300'>
        <img src={logo_img} alt="logo"/>
    </nav>
  )
}

export default Navbar