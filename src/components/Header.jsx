import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbaritems } from "../data/navbar/navbaritems";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo/Logo";
import Button from "./Buttons/Button";

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const { pathname } = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent the click event from closing the menu immediately
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = () => {
    setIsMenuOpen(false); // Close the menu when clicking outside of it
  };

  return (
    <div className="w-full" onClick={handleOutsideClick}>
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
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`${
                      pathname === item.path ? "text-[#2B76C1]" : "text-black"
                    } hover:text-[#2B76C1]`}
                  >
                    <span className="poppins font-[600] text-sm whitespace-nowrap">
                      {item.lable}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-center items-center gap-x-4">
            {/* Menu button for small screens */}
            <button
              className="lg:hidden px-3 py-2 bg-[#2B76C1] text-white rounded-lg focus:outline-none"
              onClick={toggleMenu} // Toggle menu on mobile
            >
              <FaBars size={24} />
            </button>

            {/* Estimate Projects button for large screens */}
            <Link
              to="https://api.whatsapp.com/send?phone=923166618694"
              className="hidden md:block"
            >
              <Button
                value={"Estimate Projects"}
                customClass={
                  "bg-[#2B76C1] whitespace-nowrap border border-transparent px-4 xl:px-6 py-2 lg:py-2 leading-normal hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1]"
                }
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <nav
        onClick={(e) => e.stopPropagation()} // Prevent click event from closing the menu when clicking inside
        className={`${
          isMenuOpen ? "block top-[100px]" : "top-[-500px]"
        } xl:hidden justify-center items-center absolute w-[100%] bg-white sm:w-[90%] sm:left-[5%] sm:right-[5%] shadow-xl z-[9999] transition-all duration-400`}
      >
        {Navbaritems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={toggleMenu} // Close menu after navigating to a link
            className={`flex flex-col py-2 px-4 hover:bg-gray-100 w-full border-b-none border-b-2 ${
              Navbaritems.length - 1 === index
            } ${pathname === item.path ? "text-[#2B76C1]" : "text-black"}`}
          >
            <span className="poppins font-[600] text-base whitespace-nowrap">
              {item.lable}
            </span>
          </Link>
        ))}

        {/* Estimate Projects button for small screens */}
        <div className="py-4 px-2 w-full sm:hidden">
          <Link
            to="https://api.whatsapp.com/send?phone=923166618694"
            className="block w-full"
          >
            <Button
              value={"Estimate Projects"}
              customClass={
                "rounded-md border border-transparent w-full hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1] transition-all duration-300"
              }
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
