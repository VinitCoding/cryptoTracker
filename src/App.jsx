import React from 'react'
import { PrimeReactProvider} from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Navbar from './components/Home/Navbar';
import Hero from './components/Home/Hero';
import UseCase from './components/Home/UseCase';
import Footer from './components/Home/Footer';
import { ThemeProvider } from './components/Theme';

        

const App = () => {
  return (
    <>
      <ThemeProvider>
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
    </ThemeProvider>
    </>
    
  )

  
}

export default App