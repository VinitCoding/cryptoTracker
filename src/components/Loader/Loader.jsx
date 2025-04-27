import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className="loader"></div>
      <h2 className='absolute top-[55%] text-xl animate-pulse dark:text-zinc-700'>Loading...</h2>
    </div>
  )
}

export default Loader
