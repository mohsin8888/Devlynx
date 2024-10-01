import React from 'react'

export const Projectcard = ({ icon, Cardheading, para, Customstylepara }) => {
  return (
   
    <div className="  w-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center  py-12  sm:py-8 ">
  <div className="">
    <div className="flex justify-center items-center ">
      <img src={icon} alt="Web icon" class=" w-[100%] sm:w-[85%] h-auto" />
    </div>
  </div>
  
  
  <div className="w-full sm:w-72 text-center sm:text-start mt-4">
    <h3 class="text-xl text-[#242E49]  lato font-[800] mt-4 mb-2">{Cardheading}</h3>
    <p class={`text-[#908E9A] lato font-[600] text-[14px] ${Customstylepara}`}>{para}</p>
  </div>

</div>
  )
}
