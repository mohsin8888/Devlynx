import React from 'react'

export const Projectcard = ({ icon, Cardheading, para, Customstylepara }) => {
  return (
   
    <div className="  md:w-[45%] lg:w-[30%] flex flex-col mx-auto  ">
  <div className="">
    <div className="flex justify-center items-center ">
      <img src={icon} alt="Web icon" class="w-full h-full" />
    </div>
  </div>
  
  
  <div className="w-72">
    <h3 class="text-xl text-[#242E49]  lato font-[800] mt-4 mb-2">{Cardheading}</h3>
    <p class={`text-[#908E9A] lato font-[600] text-[14px] ${Customstylepara}`}>{para}</p>
  </div>

</div>
  )
}
