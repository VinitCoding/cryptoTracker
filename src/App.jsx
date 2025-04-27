import React from 'react'
import { PrimeReactProvider} from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import { ThemeProvider } from './components/Theme';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import CoinDetailsPage from './pages/CoinDetailsPage';
import { Toaster } from 'react-stacked-toast';

        

const App = () => {
  return (
    <>
      <ThemeProvider>
        <PrimeReactProvider>
          {/* Navbar */}
          <Toaster />
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/coin/:coinId' element={<CoinDetailsPage />} />
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
          {/* Footer */}
          <Footer />   
        </PrimeReactProvider>
    </ThemeProvider>
    </>
    
  )

  
}

export default App