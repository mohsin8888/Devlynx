import React from "react";

import Reacticon from "../../../asset/images/home/reactjs-icon.svg";
import Nodeicon from "../../../asset/images/home/nodejs-icon.svg";
import Htmlicon from "../../../asset/images/home/html-icon.svg";
import Bootsrapicon from "../../../asset/images/home/bootstrap-icon.svg";
import Typescripticon from "../../../asset/images/home/typescript-icon.svg";
import Angularicon from "../../../asset/images/home/angular-icon.svg";
import Reactnativeicon from "../../../asset/images/home/reactjs-icon.svg";
import Fluttericon from "../../../asset/images/home/flutterio-icon .svg";
import Switicon from "../../../asset/images/home/swift-icon.svg";
import photoshopicon from "../../../asset/images/home/photoshopicon.svg";
import Figmaicon from "../../../asset/images/home/figma-icon.svg";
import AdobeXDicon from "../../../asset/images/home/adobe-xdicon.svg";
import Illustratoricon from "../../../asset/images/home/Illustratoricon.svg";
import Vueicon from "../../../asset/images/home/vuejs-icon.svg";
import SiKotlin from "../../../asset/images/home/nextjs-icon.svg";
import { OurServicesItem } from "../../../data/Ourservicessectiondata/OurServicesItem";
export const Ourservicessection = () => {
  return (
    <div class="w-full">
      <h2 class="text-[#2B76C1] text-2xl poppins font-[600] mb-12  text-center">Our Services</h2>
      <div class="w-[100%] flex flex-col lg:flex-row flex-wrap items-center  justify-center ">
        {/* <!-- Web Services --> */}
        <div class="w-[100%] sm:w-[90%] md:w-[70%] lg:w-[50%] flex flex-col space-y-4 mt-8 lg:mt-0 lg:justify-start md:mt-4">
          <h3 class=" text-[#2B76C1] poppins font-[400] text-xl text-center mb-8">Web Services</h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {OurServicesItem.web.map((item, index) => (
              <div class="flex flex-col items-center">
                <img src={item.image} alt="Adobe XD" class="w-16 h-16 mb-2" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <!-- App Services --> */}
        <div class="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[25%] flex flex-col space-y-4 mt-8 lg:mt-0 lg:justify-start md:mt-12 ">
          <h3 class="text-[#2B76C1] poppins font-[400] text-xl text-center mb-8">App Services</h3>
          <div class="grid grid-cols-2 gap-6">
            {OurServicesItem.mobile.map((item, index) => (
              <div class="flex flex-col items-center">
                <img src={item.image} alt="Adobe XD" class="w-16 h-16 mb-2" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <!-- Design Services --> */}
        <div class="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[25%] flex flex-col space-y-4 mt-8 lg:mt-0 lg:justify-start md:mt-4">
          <h3 class="text-[#2B76C1] poppins font-[400] text-xl text-center mb-8">
            Design Services
          </h3>
          <div class="grid grid-cols-2 gap-6">
            {OurServicesItem.design.map((item, index) => (
              <div class="flex flex-col items-center">
                <img src={item.image} alt="Adobe XD" class="w-16 h-16 mb-2" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
