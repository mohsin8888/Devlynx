import React from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { Jobcard } from "../components/Careers/Jobcard";
const Careers = () => {
  return (
    <>
      <MainWrapper CustomClass={" !px-4 sm:!px-3"}>
        <div class="max-w-full ">
          <h2 class="text-[2.5rem] poppins  text-center font-[600]  mb-4 text-[#000]">
            Your Success Story Start Here
          </h2>
          <p class="mt-4 w-[100%] md:w-[80%] lg:w-[50%] text-center  mx-auto text-[1.2rem] poppins font-[600] text-[#2B76C1]  mb-4">
            Your potential knows no bounds, and this is where it all begins!
            We provide a launchpad for your ambitions.
          </p>
          <p className=" w-[100%] md:w-[80%]  lg::w-[10%]  text-center mx-auto mb-20 text-[1rem] sm:text-[1rem] poppins font-[600] text-[#000]  ">
            Join DevLynx team of developers, consultants, and marketers building
            exceptional apps and software, powered by expert consultancy. Our
            global offices in the US, Canada, Malaysia, and Pakistan redefine
            possibilities through a hybrid approach. Dream, grow & succeed with
            us.
          </p>
        </div>
        <div className=" bg-[#2B76C1] sm:rounded-lg text-[#FFFFFF] text-[1.5rem] sm:text-[2.3rem] poppins font-[800]  p-3 sm:p-4  w-[100%] sm:w-[85%] max-auto text-center">
          <span>Current Job Openings</span>
        </div>
      </MainWrapper>

      <div className="w-full flex flex-col ">
  <div className="text-blue-700 mb-3 font-bold w-[90%] mx-auto pl-8">
    <h2 className="text-[2rem] text-[#2B76C1]">Development</h2>
    <div className="bg-[#2B76C1] h-[1vh] w-[5%] rounded-xl"></div>
  </div>
  <Jobcard
    Cardheading={"WordPress Developer"}
    Cardpara={
      "As a WordPress Developer at Elegant Themes, you will be working with a small and agile team made up of talented devs from all around the world."
    }
    value={"Apply Now"}
  />
  <Jobcard
    Cardheading={"Flutter Developer"}
    Cardpara={
      "We are looking for proactive Flutter Developer to join our development team. An Flutter Developer is responsible for designing, developing, and maintaining applications for the Flutter platform."
    }
    value={"Apply Now"}
   
  />
</div>
   <div className="text-blue-700 font-bold  w-[90%] mx-auto pl-7 ">
    <h2 className="text-[2rem] text-[#2B76C1]">Designing</h2>
    <div className="bg-[#2B76C1] h-[1vh] w-[5%] rounded-xl"></div>
  </div>
<div className="w-full flex flex-col mt-7 py-8  shadow-2xl">
  <Jobcard
    Cardheading={"Graphic Designer"}
    Cardpara={
      "We are looking for proactive Graphic Designer to join our development team. The ideal candidate should develop visually compelling graphics for digital and print media."
    }
    value={"Apply Now"}
    CustomClass={""}
   
  />
   <Jobcard
    Cardheading={"UI/UX Designer"}
    Cardpara={
      "We are looking for proactive Graphic Designer to join our development team. The ideal candidate should develop visually compelling graphics for digital and print media."
    }
    value={"Apply Now"}
    CustomClass={""}
   
  />
 
</div> 

    </>
  );
};

export default Careers;
