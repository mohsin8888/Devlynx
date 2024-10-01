import React from "react";

const Servicescard = ({ icon, Cardheading, para, Customstylepara }) => {
  return (
    <>
  <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center py-8">
  
  <div class="w-full sm:w-72 h-72 bg-[#B4D4F3] p-8 rounded-lg">
    <div class="flex justify-center items-center h-full">
      <img src={icon} alt="Web icon" class="w-full h-full object-contain" />
    </div>
  </div>

 
  <div class="w-full sm:w-72 text-center sm:text-start mt-4">
    <h3 class="text-xl text-[#242E49] font-extrabold mt-4 mb-2">{Cardheading}</h3>
    <p class={`text-[#908E9A] font-semibold text-sm ${Customstylepara}`}>{para}</p>
  </div>
</div>




    </>
  );
};

export default Servicescard;
