import React from 'react';
import { LottieAnimation } from './LottieAnimation';

export const HeroSection = ({
  para,
  CustomClass,
  CustomClaspara,
}) => {
  return (
    <div className={` flex flex-col lg:flex-row items-center gap-x-8 ${CustomClass}`}>
      {/* <!-- Image Section --> */}
      <div className="w-full lg:w-[40%] flex justify-center items-center ">
        <LottieAnimation  />
      </div>

      {/* <!-- Text Section --> */}
      <div className="lg:w-[60%] w-[100%]">
        {/* <h2 className="text-[#2B76C1] text-2xl poppins font-[600] mb-4 text-center">
          {heading}
        </h2> */}
        <p
          className={`text-[#626262] poppins font-[400] text-xl  lg:leading-[35px] ${CustomClaspara}`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};
