import React from "react";

export const Solutioncard = ({ icon, Cardheadibg, para, CustomClass }) => {
  return (
    <div
      class={`w-full md:w-[50%] lg:w-[33%] flex flex-col justify-center items-center py-4 lg:py-0 ${CustomClass}`}
    >
      <div class="flex justify-center relative group">
        <div class="border-2 border-gray-300 rounded-full p-4 relative">
          <img src={icon} alt="Web icon" class="w-12 h-12 relative z-10" />
          <div class="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300 group-hover:scale-110 group-hover:border-gray-800 z-0"></div>
        </div>
      </div>
      <div className="pt-5 text-center">
      <h3 class="text-[#000000] poppins font-[500] text-xl  text-center pb-2">{Cardheadibg}</h3>
      <span class="text-[#000000] poppins font-[400] text-sm text-center">{para}</span>
      </div>
    </div>
  );
};
