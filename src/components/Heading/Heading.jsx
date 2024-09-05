import React from 'react'

const Heading = ({heading,subheading,CustomClass,CustomClasshea,CustomClasstext}) => {
  return (
    <div class={` w-[100%] mx-auto text-center ${CustomClass}`}>
    <h2 class={` text-[1.7rem] sm:text-[2rem] poppins font-[400] sm:font-[600]  text-[#2B76C1] ${CustomClasshea}`}>
      {heading}
    </h2>
    <p class={ ` mt-4 text-lg poppins font-[400] text-[#626262] ${CustomClasstext}`}>
      {subheading}
    </p>
  </div>
  )
}

export default Heading