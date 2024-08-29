import React from 'react'

export const Jobcard = ({
    type,
    value,
     onClick ,
     CustomClass,
     Cardheading,
     Cardpara,

}) => {
  return (
    <div class={`flex justify-center items-center pb-8 ${CustomClass}`}>
        <div class="bg-white shadow-xl rounded-lg p-6 w-[80%]">
            <h3 class="text-xl font-semibold mb-4">{Cardheading}</h3>
            <p class="text-gray-600 mb-4">
               {Cardpara}
            </p>
            <button type={type} value={value} className="bg-blue-600 text-white px-6 py-2  rounded hover:bg-blue-700">Apply Now</button>
        </div>

</div>
  )
}
