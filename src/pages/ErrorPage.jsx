import React from 'react'
import error_img from '../images/error_img.svg'

const ErrorPage = () => {
  return (
      <div className='w-full flex justify-center items-center h-[91.8vh] bg-transparent dark:bg-[#192d49de]'>
          <img src={error_img} alt="404_page_not_found" className=''/>
    </div>
  )
}

export default ErrorPage