import React from 'react';
import { LottieAnimation } from './LottieAnimation';

export const HeroSection = ({
  para,
  CustomClass,
  CustomClaspara,
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-x-8 ${CustomClass}`}>
      {/* <!-- Image Section --> */}
      <div className="w-full md:w-[40%] flex justify-center items-center">
        <LottieAnimation />
      </div>

      {/* <!-- Text Section --> */}
      <div className="md:w-[60%] w-full">
        {/* <h2 className="text-[#2B76C1] text-2xl poppins font-[600] mb-4 text-center">
          {heading}
        </h2> */}
        <p
          className={`text-[#626262] poppins font-[400] text-xl break-words  leading-[35px] ${CustomClaspara}`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};
