import React, { useEffect } from 'react'
import Hero from '../components/Home/Hero'
import UseCase from '../components/Home/UseCase'

const LandingPage = () => {
  useEffect(() => {
    sessionStorage.removeItem('currency')
  }, [])
  return (
      <div className='w-full'>
          {/* Hero */}
          <Hero />

          {/* UseCases */}
          <UseCase />
    </div>
  )
}

export default LandingPage