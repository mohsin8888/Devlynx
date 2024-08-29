import React from 'react'

const Heading = ({heading,subheading,CustomClass,CustomClasshea}) => {
  return (
    <div class={`max-w-4xl mx-auto text-center ${CustomClass}`}>
    <h2 class={`text-2xl poppins font-[600]  text-[#2B76C1] ${CustomClasshea}`}>
      {heading}
    </h2>
    <p class="mt-4 text-lg poppins font-[400] text-[#626262]">
      {subheading}
    </p>
  </div>
  )
}

export default Heading