import React from "react";

const Servicescard = ({ icon, Cardheadibg, para, Customstylepara }) => {
  return (
    <>
      <div class="w-full md:w-[45%]  lg:w-[22%] flex flex-col items-center text-center space-y-4 py-4 lg:py-0  px-8 sm:px-0 ">
        
      <div class="rounded-full border border-[#CBC9C9] h-24 w-24 text-center flex items-center justify-center relative group transition-all duration-700">
  <img src={icon} alt="Web icon" class="w-12 h-12 z-40" />
  <div class="absolute rounded-full group-hover:p-[2.6rem] border-2  group-hover:scale-110 group-hover:border-gray-300 group-hover:rounded-full group-hover:shadow-lg transition-all duration-300"></div>
</div>

        <h3 class="text-xl font-semibold">{Cardheadibg}</h3>
        <p class={`text-gray-600 text-[14px] ${Customstylepara}`}>{para}</p>
      </div>
    
    </>
  );
};

export default Servicescard;
