import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';

const Main = () => {
   return (
      <div
      className="bg-cover  min-h-screen bg-fixed"
      style={{
        backgroundImage: "url('https://images2.alphacoders.com/509/509479.jpg')",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />

      </div>
   );
};

export default Main;