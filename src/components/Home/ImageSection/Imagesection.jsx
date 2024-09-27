import React from 'react'

export const Imagesection = ({
    image,
    heading,
    para,
    CustomClass,
    ImageClass,
    CustomStyletext
}) => {
  return (
    <div className='bg-[#274874] flex items-center justify-center p-4 '>
    <div className={`flex flex-col lg:flex-row items-center  gap-12   ${CustomClass}`}>
  {/* <!-- Image Section --> */}
  <div className=" mb-8 md:mb-0 w-full lg:w-[45%] flex justify-center items-center">
    <img
      src={image}
      alt="Mission Image"
      className={`${ImageClass}`}
    />
  </div>

  {/* <!-- Text Section --> */}
  <div className="lg:w-[45%] text-center sm:text-start">
    <h2 className=" text-white text-[2rem] poppins font-[600] mb-4   sm:w-[80%] ">
      {heading}
    </h2>
    <p className={` poppins font-[400] text-xl  lg:leading-[30px]  text-white ${CustomStyletext}`}>
      {para}
    </p>
  </div>
</div>
</div>

  )
}
