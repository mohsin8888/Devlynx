import React from "react";
import { Link } from "react-router-dom";
export const Solutioncard = ({ icon, Cardheading, para, CustomClass,Customstylepara,link }) => {
  return (
    <div className="w-full md:w-[45%] lg:w-[22%] flex flex-col items-center text-center space-y-4 py-4 lg:py-0 px-8 sm:px-0 ">
    {/* Wrap the circle in a Link component for internal navigation */}
    <Link to={link} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#CBC9C9] h-28 w-28 flex items-center justify-center relative group transition-all duration-700">
      <div className="absolute rounded-full group-hover:p-[2.1rem] border-2 group-hover:scale-125 group-hover:border-gray-300 group-hover:rounded-full group-hover:shadow-lg transition-all duration-300"></div>
      <img src={icon} alt="Web icon" className="w-12 h-12 z-40" />
    </Link>

    <h3 className="text-xl font-semibold">{Cardheading}</h3>
    <p className={`text-gray-600 text-[14px] ${Customstylepara}`}>{para}</p>
  </div>
  );
};
