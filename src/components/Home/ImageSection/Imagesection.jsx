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
    <div className={`flex flex-col lg:flex-row items-center  ${CustomClass}`}>
  {/* <!-- Image Section --> */}
  <div className=" mb-16 md:mb-0 w-full md:w-[50%] flex justify-center items-center">
    <img
      src={image}
      alt="Mission Image"
      className={`${ImageClass}`}
    />
  </div>

  {/* <!-- Text Section --> */}
  <div className="md:w-[50%] w-full">
    <h2 className=" text-[#2B76C1] text-2xl poppins font-[600] mb-4  text-center">
      {heading}
    </h2>
    <p className={`text-[#626262] poppins font-[400] text-2xl  break-words sm:leading-[45px] ${CustomStyletext}`}>
      {para}
    </p>
  </div>
</div>

  )
}
