import React from "react";
import { ServicespageItem } from "../../data/Servicespage data/ServicespageItem";
export const Ideationservicescard = (
    {
    CustomClass,
     imageClass,
     image,
     text,
     para
        }) => {
  return (
   
      <div class=" text-center">
        <div class=" mx-auto flex items-center justify-center bg-white rounded-full shadow-lg p-4 relative w-24 h-24 mb-8">
          <div class="absolute inset-0 rounded-full bg-gray-50 shadow-2xl"></div>
          <img
            src={image}
            alt="Document Icon"
            class={`w-12 h-12 relative z-10 ${imageClass}`}
          />
        </div>

        <div className=" flex flex-col">
          <p className="font-medium text-gray-900"> {text}</p>
          <p className="font-medium text-gray-900">{para}</p>
        </div>
      
     
      
      
      
    </div>
  );
};
