import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';


const RootLayout = () => {

   

  return (
   
    <div className="App">
      <Header />
      <div className='content'>
      <Outlet/>
      </div>
      <Footer />
    </div>
    
  )
}

export default RootLayout;
