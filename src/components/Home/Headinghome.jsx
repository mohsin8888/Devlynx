import React from "react";

const Headinghome = ({
    CustomClass,
    Heading,
    subheading,
    text,
  
}) => {
  return (
    <>
      <section class={` flex flex-col lg:flex-row items-start lg:items-center  text-center sm:text-start  ${CustomClass}`}>
        <div class="  w-full md:w-[90%] lg:w-[50%]  mb-4">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span class="text-base text-[#242E49] lato font-[600]">
              {Heading}
            </span>
          </div>

          <h1 class="mt-2 text-[2.5rem]  latofont-[800] text-[#242E49]">
            {subheading}
          </h1>
        </div>

        <div class="w-full sm:w-[80%] md:w-[100%] lg:w-[50%] ">
          <p class="text-lg text-[#908E9A]   poppins font-[400] ">
           {text}
          </p>
        </div>
      </section>
    </>
  );
};

export default Headinghome;
