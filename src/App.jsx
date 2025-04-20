import React, { useState } from 'react'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Chips } from "primereact/chips";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Particles from './components/Particles';
import Navbar from './components/Home/Navbar';
import { Button } from 'primereact/button';
import Hero from './components/Home/Hero';
import UseCase from './components/Home/UseCase';
import Footer from './components/Home/Footer';

        

const App = () => {
  return (
    <>
    <PrimeReactProvider>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* UseCases */}
      <UseCase />

      {/* Footer */}
      <Footer />
    </PrimeReactProvider>
    </>
    
  )
}

export default App