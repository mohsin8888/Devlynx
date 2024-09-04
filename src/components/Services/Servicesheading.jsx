import React from 'react'

const Servicesheading = ({heading,subheading,CustomClass,CustomClasstext}) => {
  return (
    <div className= {`w-[80%] mx-auto text-center ${ CustomClass}`}>
        <h2 class=" text-[1.5rem] md:text-[2.1rem] max-w-xl mx-auto poppins font-[600] leading-[54px]  mb-10 text-[#000]">
          {heading}
        </h2>
        <p class={`mt-4 max-w-3xl  leading-[30px] mx-auto text-sm poppins font-[400] text-[#626262] mb-4 ${CustomClasstext}`}>
          {subheading}
        </p>
        </div>
  )
}

export default Servicesheading