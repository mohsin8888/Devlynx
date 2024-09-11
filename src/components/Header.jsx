import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbaritems } from "../data/navbar/navbaritems";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo/Logo";
import Button from "./Buttons/Button";

export const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Header Container */}
      <div className="flex flex-col w-[95%] sm:w-[85%] mx-auto">
        {/* First Row: Logo and Menu Button */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

        

          {/* Nav for large screens */}
          <nav className="hidden lg:flex justify-center items-center md:gap-16">
            <ul className="flex lg:gap-x-12">
              {Navbaritems.map((item, index) => (
                <li key={index} className="">
                  <Link
                    to={item.path}
                    className={`${
                      pathname === item.path ? "text-[#2B76C1]" : "text-black"
                    } hover:text-[#2B76C1]`}
                  >
                    <span className="poppins font-[600] text-sm whitespace-nowrap ">
                      {item.lable}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center items-center gap-x-4">
                {/* Menu button for small screens */}
          <button className="lg:hidden px-3 py-2 bg-[#2B76C1] text-white rounded-lg  focus:outline-none">
            <FaBars size={24} onClick={toggleMenu} />
          </button>
          {/* Estimate Projects button for large screens */}
          <Link to="https://api.whatsapp.com/send?phone=923166618694" className="hidden md:block">
            <Button
              value={"Estimate Projects"}
              customClass={
                "bg-[#2B76C1] whitespace-nowrap border border-transparent px-4 xl:px-6 py-2 lg:py-2 leading-normal hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1]"
              }
            />
          </Link>
          </div>
        </div>

        {/* Second Row: Estimate Projects button for small screens */}
        {/* <div className="mt-5 w-full sm:hidden">
          <Link
            to="https://api.whatsapp.com/send?phone=923166618694"
            className="block w-full"
          >
            <Button
            value={"Estimate Projects"}
            customClass={
              "rounded-md border border-transparent  w-full hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1] transition-all duration-300"
            }
          />
          </Link>
        </div> */}
      </div>

      {/* Mobile Menu Dropdown */}
      <nav
        className={`${
          isMenuOpen ? "block top-[140px]" : "hidden"
        } xl:hidden justify-center items-center absolute w-[100%] bg-white sm:w-[90%] sm:left-[5%] sm:right-[5%] shadow-xl z-[9999] transition-all duration-300`}
      >
        {Navbaritems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={toggleMenu}
            className={`
                flex  flex-col py-2 px-4 hover:bg-gray-100 w-full border-b-none border-b-2 ${
                  Navbaritems.length - 1 === index
                }
                ${pathname === item.path ? "text-[#2B76C1]" : " text-black"}`}
          >
            <span className="poppins font-[600] text-base whitespace-nowrap">
              {item.lable}
            </span>
          </Link>
          
        ))}
         <div className=" py-4 px-2 w-full sm:hidden">
          <Link
            to="https://api.whatsapp.com/send?phone=923166618694"
            className="block w-full"
          >
            <Button
            value={"Estimate Projects"}
            customClass={
              "rounded-md border border-transparent  w-full hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1] transition-all duration-300"
            }
          />
          </Link>
        </div>
      </nav>
    </div>
  );
};
