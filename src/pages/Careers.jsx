import React from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import { Jobcard } from "../components/Careers/Jobcard";
const Careers = () => {
  return (
    <>
      <MainWrapper>
        <div class="max-w-full mx-auto text-center">
          <h2 class="text-4xl poppins font-[600] leading-[54px]  mb-4 text-[#000]">
            Your Success Story Start Here
          </h2>
          <p class="mt-4 text-lg poppins font-[400] text-[#2B76C1]  mb-4">
            Your potential knows no bounds, and this is where it all begins!{" "}
            <br />
            We provide a launchpad for your ambitions.
          </p>
          <p className="max-w-4xl  mb-20 text-lg poppins font-[400] text-[#000]  ">
            Join DevLynx team of developers, consultants, and marketers building
            exceptional apps and software, powered by expert consultancy. Our
            global offices in the US, Canada, Malaysia, and Pakistan redefine
            possibilities through a hybrid approach. Dream, grow & succeed with
            us.
          </p>
        </div>
        <div className=" bg-[#2B76C1] rounded-lg text-[#FFFFFF] text-4xl poppins font-[800] leading-[54px] p-4 w-[90%] max-auto text-center">
          <span>Current Job Openings</span>
        </div>
      </MainWrapper>

      <div className="w-full flex flex-col ">
  <div className="text-blue-700 mb-3 font-bold w-[90%] mx-auto pl-8">
    <h2 className="text-[2rem]">Development</h2>
    <div className="bg-blue-700 h-[1vh] w-[5%] rounded-xl"></div>
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
   <div className="text-blue-700 font-bold  pl-8 pb-2 shadow-2xl">
    <h2 className="text-[2rem]">Designing</h2>
    <div className="bg-blue-700 h-[1vh] w-[5%] rounded-xl"></div>
  </div>
<div className="w-full flex flex-col mt-7 ">
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
