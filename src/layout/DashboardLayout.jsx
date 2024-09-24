import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex min-h-screen w-screen flex-col" onClick={handleClickOutside}>
        {/* Header with isMenuOpen and setIsMenuOpen passed as props */}
        <div className='h-[15vh] sm:h-[14vh] flex items-center border-b border-[#2B76C1]'>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>

        {/* Main content (renders child routes using Outlet) */}
        <div className="flex-1">
          {/* Ensure that Outlet renders the children and passes setIsMenuOpen properly */}
          <Outlet context={{ setIsMenuOpen }} />
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
