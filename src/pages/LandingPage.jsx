import React from 'react'
import Hero from '../components/Home/Hero'
import UseCase from '../components/Home/UseCase'

const LandingPage = () => {
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