import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import headerlogo from "../asset/images/header/logo.png";
import { Navbaritems } from "../data/navbar/navbaritems";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo/Logo";
import Button from "./Buttons/Button";

export const Header = () => {
  const location = useLocation();
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classLink =
    "flex items-center gap-3 px-4 py-4  hover:no-underline  rounded-md";
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-[85%] mx-auto ">
        <Logo />

        <nav className="hidden xl:flex justify-center items-center md:gap-16">
  <ul className="flex lg:gap-x-12">
    {Navbaritems.map((item, index) => (
      <li key={index} className="">
        <Link
          to={item.path}
          className={`${
            pathname === item.path ? "text-[#2B76C1]" : "text-black"
          } hover:text-[#2B76C1]`}
        >
          <span className="text-base font-medium whitespace-nowrap ">
            {item.lable}
          </span>
        </Link>
      </li>
    ))}
  </ul>
</nav>
        <div className="flex items-center gap-3">
          <button className="  xl:hidden px-3 py-2 bg-[#2B76C1] text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            <FaBars size={24} onClick={toggleMenu} />
          </button>

          <Link to="https://api.whatsapp.com/send?phone=923166618694">
  <Button
    value={"Estimate Projects"}
    customClass={
      "hidden sm:inline-block bg-[#2B76C1] whitespace-nowrap rounded-md border border-transparent text-white px-4 xl:px-6 py-2 lg:py-2 leading-normal hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1] transition-all duration-300"
    }
  />
</Link>
        </div>
      </div>

      <nav
        className={`${
          isMenuOpen ? "block top-[65px]" : "hidden"
        } xl:hidden justify-center items-center absolute w-[100%] bg-white sm:w-[90%] sm:left-[5%] sm:right-[5%] shadow-xl z-40 transition-all duration-300`}
      >
        {Navbaritems.map((item, index) => (
          <div
            key={index}
            className={` py-3 hover:bg-gray-100 w-full ${
              Navbaritems.length - 1 === index ? "border-b-none" : "border-b-2"
            }`}
          >
            <Link
              to={item.path}
              className={`${
                pathname === item.path ? "text-[#2B76C1]" : " text-black"
              }`}
            >
              <span className="br-firma-700 text-md pl-3 font-semibold">
                {item.lable}
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
