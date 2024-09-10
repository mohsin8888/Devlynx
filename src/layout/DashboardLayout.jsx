import React from 'react'
import { Outlet } from "react-router-dom";
 import { Header } from '../components/Header';
 import { Footer } from '../components/Footer';
export const DashboardLayout = () => {
  return (
  <>
  <div className="flex min-h-screen w-screen flex-col">
        <div className=' h-[26vh] sm:h-[14vh] flex items-center border-b border-[#2B76C1] '>
          <Header />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
        <div>
           <Footer /> 
        </div>
      </div>
  </>
  )
}
export default DashboardLayout;