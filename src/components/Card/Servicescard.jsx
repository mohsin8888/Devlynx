import React from "react";

const Servicescard = ({ icon, Cardheading, para, Customstylepara }) => {
  return (
    <>
   <div class=" md:w-[50%] lg:w-[33%] flex flex-col sm:text-start text-center   py-8 sm:py-0  ">
  <div className="sm:w-72 h-72 bg-[#B4D4F3] p-8 rounded-lg">
    <div className="flex justify-center items-center h-full">
      <img src={icon} alt="Web icon" class="w-full h-full" />
    </div>
  </div>
  
  
  <div className="sm:w-72 ">
    <h3 class="text-xl text-[#242E49]  lato font-[800] mt-4 mb-2">{Cardheading}</h3>
    <p class={`text-[#908E9A] lato font-[600] text-[14px] ${Customstylepara}`}>{para}</p>
  </div>
</div>



    </>
  );
};

export default Servicescard;
