import React from 'react';
import { LottieAnimation } from './LottieAnimation';

export const HeroSection = ({
  para,
  CustomClass,
  CustomClaspara,
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-x-8 ${CustomClass}`}>
      {/* <!-- Image Section --> */}
      <div className="w-[100%] lg:w-[40%] flex justify-center items-center ">
        <LottieAnimation  />
      </div>

      {/* <!-- Text Section --> */}
      <div className="lg:w-[60%] w-[100%]">
        <p
          className={`text-[#626262] poppins font-[400] text-xl  lg:leading-[35px] ${CustomClaspara}`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};
