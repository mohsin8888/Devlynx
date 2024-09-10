import React from "react";
import { ServicespageItem } from "../../data/Servicespage data/ServicespageItem";
export const Ideationservicescard = ({
  CustomClass,
  imageClass,
  image,
  text,
  para,
}) => {
  return (
    <div className="text-center ">
      <div className="mx-auto flex items-center justify-center  rounded-full  bg-[#FFFFFF]  relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full hover:bg-blue-200 transition duration-700  flex items-center justify-center">
          <img
            src={image}
            alt="Document Icon"
            className={`w-12 h-12 ${imageClass}`}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="font-medium text-gray-900">{text}</p>
        <p className="font-medium text-gray-900">{para}</p>
      </div>
    </div>
  );
};
