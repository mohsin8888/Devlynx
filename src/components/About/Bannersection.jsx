import React from 'react'
import Aboutimg2 from "../../asset/images/about/aboutimage2.svg";
import Button from '../Buttons/Button';
export const Bannersection = ({ heading,text,headingstyle,imagetextstyle,Customclass}) => {
  return (
    <div className="w-[90%] sm:w-full relative h-screen flex items-center justify-center mx-auto">
    {/* <!-- Image --> */}
    <img
      src={Aboutimg2}
      alt="Background Image"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* <!-- Overlay --> */}
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

    {/* <!-- Content --> */}
    <div className="relative z-20 text-center text-white">
      <h1 className={` text-[1rem] md:text-[2rem] poppins font-[600] mb-12 ${headingstyle}`}>
       {heading}
      </h1>
      <p className={`text-base md:text-[1rem] poppins font-[600] mb-8 ${imagetextstyle}`}>
        {text}
      </p>
      <Button
        value={"Work with us"}
        customClass={
          " mt-8 poppins font-[600] text-sm bg-[#2B76C1] whitespace-nowrap  !w-52 rounded-md border border-transparent leading-normal hover:bg-white hover:text-[#2B76C1] hover:font-[400]  transition-all duration-300"
        }
      />
    </div>
  </div>
  )
}
