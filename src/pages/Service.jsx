import React, { useEffect } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Servicesheading from "../components/Services/Servicesheading";
import { Ideationservicescard } from "../components/Services/Ideationservicescard";
import { ServicespageItem } from "../data/Servicespage data/ServicespageItem";
import { Bannersection } from "../components/About/Bannersection";
import { useLocation } from "react-router-dom";
const Service = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Add a short delay to ensure the page has loadeda
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300); // You can adjust the timeout if needed
      }
    }
  }, [location]);

  return (
    <>
      <MainWrapper CustomClass={"!px-0 sm:!px-16"}>
        <div className="max-w-full mx-auto text-center sm:mb-12">
          <h2 className="text-[2.3rem] poppins font-[600]   text-[#000]">
            Digital acceleration services for
          </h2>
          <p className=" text-[2rem] sm:text-[2.3rem] poppins font-[600]  text-[#2B76C1] mb-6 sm:mb-12">
            business growth
          </p>

          <span className=" px-2 sm:px-0 text-base sm:text-lg poppins font-[400] text-[#000] ">
            Design. Development. Consulting.
            <br />5 years and counting.
          </span>
        </div>
      </MainWrapper>
      <div className="w-[90%] px-4 mx-auto mb-8 sm:mb-20 flex flex-col lg:flex-row justify-center md:justify-start space-y-4 lg:space-y-0 lg:space-x-12">
  <div className="w-[90%] sm:w-[80%] lg:w-[45%] mx-auto">
    <h1 className="text-[2rem] md:text-[2.2rem] poppins font-[600]">
      One-stop shop for
      <span className="text-[#2B76C1]"> digital </span>
    </h1>
  </div>
  <div className="w-[90%] sm:w-[80%] lg:w-[45%] mx-auto">
    <p className="text-[#626262] poppins font-[400] text-base">
      We help deliver digital excellence at every stage of the product
      journey, from early ideation to research, prototyping, testing,
      launch, and ongoing support. Explore our end-to-end services
      designed to improve business metrics and deliver delightful digital
      experiences.
    </p>
  </div>
</div>
<div className="w-[90%] px-4 mx-auto mb-8 sm:mb-20 flex flex-col lg:flex-row justify-center md:justify-start space-y-4 lg:space-y-0 lg:space-x-12">
  <div className="w-[80%] lg:w-[45%] mx-auto">
    <h1 className="text-[2rem] md:text-[2.2rem] poppins font-[600]">
      Ideation and
      <span className="text-[#2B76C1]"> evaluation </span>
    </h1>
  </div>
  <div className="w-[80%] lg:w-[45%] mx-auto">
    <p className="text-[#626262] poppins font-[400] text-base">
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
            CustomClasstext={"!max-w-xl"}
          />

          <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-4">
            {ServicespageItem.ideation.map((item, index) => (
              <Ideationservicescard
                key={index}
                image={item.image}
                text={item.text}
                para={item.para}
                CustomClasstext={"!max-w-2xl"}
              />
            ))}
          </div>
        </div>
      </MainWrapper>
      <MainWrapper CustomClass={" !py-0 !px-0"}
      id={'graphicssolution'}>
        <div class="w-full  bg-gray-100 py-16">
          <Servicesheading
            heading="Product design Services"
            subheading="Deliver beautiful and usable products that solve user problems
               and move the needle."
            CustomClass={"mb-16"}
            CustomClasstext={"!max-w-[450px]"}
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
      <MainWrapper 
      id={'webdeveloment'}
      CustomClass={" !py-0 !px-0"}>
        <div class="w-full  bg-gray-100 py-16">
          <Servicesheading
            heading="Web Development Services"
            subheading="Leverage reliable processes and speed up delivery across technology stacks.
              How can we help you?"
            CustomClass={"mb-16"}
            CustomClasstext={"!max-w-xl"}
          />

          <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 sm:gap-4">
            {ServicespageItem.web.map((item, index) => (
              <Ideationservicescard
                key={index}
                image={item.image}
                text={item.text}
                para={item.para}
              />
            ))}
          </div>
        </div>
      </MainWrapper >
      <MainWrapper CustomClass={" !py-0 !px-0"}
      id={'appdeveloment'}>
        <div class="w-full  bg-gray-100 py-16">
          <Servicesheading
            heading="Mobile Development Services"
            subheading="Get professional support from the mobile team at every stage of development"
            CustomClass={"mb-16"}
            CustomClasstext={"!max-w-[400px]"}
          />

          <div className="w-[90%] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-4">
            {ServicespageItem.mobile.map((item, index) => (
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
        <div class="w-full  bg-white py-16">
          <Servicesheading
            heading="Low-code Development Services"
            subheading="Create reliable and scalable solutions faster than ever. Discover why we like minimalism"
            CustomClass={"mb-16"}
            CustomClasstext={"!max-w-[400px]"}
          />

          <div className=" w-[80%] sm:w-[50%] mx-auto grid grid-cols-2  md:grid-cols-3  gap-12 sm:gap-8">
            {ServicespageItem.lowcode.map((item, index) => (
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
      <MainWrapper CustomClass={" !py-0 !px-0"}
      id={'supportmangement'}>
        <div class="w-full  bg-gray-100 py-16 ">
          <Servicesheading
            heading="Support and management Services"
            subheading="Future-proof your products and services and keep your finger on the pulse. Learn what we can do for business. "
            CustomClass={"mb-16"}
            CustomClasstext={"!max-w-xl"}
          />

          <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-4">
            {ServicespageItem.support.map((item, index) => (
              <Ideationservicescard
                key={index}
                image={item.image}
                text={item.text}
                para={item.para}
                CustomClasstext={"!max-w-2xl"}
              />
            ))}
          </div>
        </div>
      </MainWrapper>
      <Bannersection
        heading={"Launch your product with us"}
        text={
          " Own the change in the market with AI-assisted productivity, rapid prototyping, low-code development, and next-gen design."
        }
        imagetextstyle={"max-w-xl"}
        headingstyle={"max-w-[59%]  !mx-auto !text-center"}
      />
    </>
  );
};

export default Service;
