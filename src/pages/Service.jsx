import React from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Servicesheading from "../components/Services/Servicesheading";
import { Ideationservicescard } from "../components/Services/Ideationservicescard";
import { ServicespageItem } from "../data/Servicespage data/ServicespageItem";
const Service = () => {
  return (
    <>
      <MainWrapper>
        <div className="max-w-full mx-auto text-center mb-12">
          <h2 className="text-4xl poppins font-[600] leading-[54px] mb-4 text-[#000]">
            Digital acceleration services for
          </h2>
          <p className="mt-2 text-4xl poppins font-[600] leading-[54px] text-[#2B76C1] mb-12">
            business growth
          </p>
          <span className="max-w-4xl mb-20 text-lg poppins font-[400] text-[#000]">
            Design. Development. Consulting.
            <br />5 years and counting.
          </span>
        </div>
      </MainWrapper>
      <div className="   w-[90%] mx-auto  mb-20 flex flex-col  lg:flex-row justify-center md:justify-start  space-y-4 lg:space-y-0 lg:space-x-12">
        <div className="  w-[80%] mx-auto lg:w-[45%]">
          <h1 className="text-[2rem] md:text-[2.2rem] poppins font-[600]">
            One-stop shop for
            <span className="text-[#2B76C1]"> digital </span>
          </h1>
        </div>
        <div className=" w-[80%] mx-auto lg:w-[45%] ">
          <p className="text-[#626262] poppins font-[400]  text-base">
            We help deliver digital excellence at every stage of the product
            journey, from early ideation to research, prototyping, testing,
            launch, and ongoing support. Explore our end-to-end services
            designed to improve business metrics and deliver delightful digital
            experiences.
          </p>
        </div>
      </div>
      <div className="   w-[90%] mx-auto  mb-20 flex flex-col  lg:flex-row justify-center md:justify-start  space-y-4 lg:space-y-0 lg:space-x-12">
        <div className="  w-[80%] mx-auto lg:w-[45%]">
          <h1 className="text-[2rem] md:text-[2.2rem]  poppins font-[600]">
            Ideation and
            <span className="text-[#2B76C1]"> evaluation </span>
          </h1>
        </div>
        <div className=" w-[80%] mx-auto lg:w-[45%] ">
          <p className="text-[#626262] poppins font-[400]  text-base">
            We help deliver digital excellence at every stage of the product
            journey, from early ideation to research, prototyping, testing,
            launch, and ongoing support. Explore our end-to-end services
            designed to improve business metrics and deliver delightful digital
            experiences.
          </p>
        </div>
      </div>
      <MainWrapper CustomClass={" !py-0 !px-0"}>
        <div class="w-full  bg-gray-100 py-16">
          <Servicesheading
            heading="Ideation and evaluation Services"
            subheading="Find a way forward for your business with our services focused on idea
          evaluation. Learn how to accelerate the first steps of the innovation
          process. "
            CustomClass={"mb-16"}
          />

          <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-4">
            {ServicespageItem.ideation.map((item, index) => (
              <Ideationservicescard
                key={index}
                image={item.image}
                text={item.text}
                para={item.para}
               
              />
            ))}
          </div>
        </div>
      </MainWrapper>
      <MainWrapper CustomClass={" !py-0 !px-0"}>
        <div class="w-full  bg-gray-100 py-16">
          <Servicesheading
            heading="Product design Services"
            subheading="Deliver beautiful and usable products that solve user problems
               and move the needle."
            CustomClass={"mb-16"}
            CustomClasstext = {"!max-w-xl"}
          />

          <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 sm:gap-4">
            {ServicespageItem.product.map((item, index) => (
              <Ideationservicescard
                key={index}
                image={item.image}
                text={item.text}
                para={item.para}
               
              />
            ))}
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default Service;
