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
    <div className={`flex flex-col lg:flex-row items-center   ${CustomClass}`}>
  {/* <!-- Image Section --> */}
  <div className=" mb-8 md:mb-0 w-full lg:w-[45%] flex justify-center items-center">
    <img
      src={image}
      alt="Mission Image"
      className={`${ImageClass}`}
    />
  </div>

  {/* <!-- Text Section --> */}
  <div className="lg:w-[45%]">
    <h2 className=" text-[#2B76C1] text-[2rem] poppins font-[600] mb-4  text-center">
      {heading}
    </h2>
    <p className={`text-[#626262] poppins font-[400] text-xl  lg:leading-[40px]  ${CustomStyletext}`}>
      {para}
    </p>
  </div>
</div>

  )
}
