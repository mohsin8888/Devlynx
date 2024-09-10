import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Servicescard from "../components/Card/Servicescard";
import { Carditems } from "../components/Card/Carditems";
import { Imagesection } from "../components/Home/ImageSection/Imagesection";
import frameimage from "../asset/images/home/frame-img.svg";
import { BestCarditem } from "../data/BEST SOLUTION Section/BestCarditem";
import { Solutioncard } from "../components/Card/Solutioncard";
import { Ourservicessection } from "../components/Home/OurservicesSection/Ourservicessection";
import { HeroSection } from "../components/Home/HeroSection/HeroSection";
const Home = () => {
  return (
    <>
      <MainWrapper CustomClass={"!px-6 sm:!px-16 md:!px-28"}>
        <HeroSection
          CustomClass=""
          para="Our primary goal is to develop smart, intelligent solutions that transform your business. We specialise in creating innovative technologies that address complex business challenges, and significantly enhance productivity. Partner with us to unlock the full potential of your business through expert development"
          CustomClaspara=" !mt-12 !text-center sm:!text-start"
        />
      </MainWrapper>
      <MainWrapper CustomClass={" !px-0 sm:!px-4 md:!px-28 "}>
        <Heading
          heading={"INNOVATION WITH AUTOMATION"}
          CustomClasstext={"!w-[90%] lg:!w-[70%]  !mx-auto"}
        
          subheading={
            "We craft efficient and responsive business models using proactive, multi-dimensional solutions. Our automated frameworks and business intelligence empower enterprises to achieve greater efficiency and success."
          }
        />
        <div class="flex flex-wrap justify-evenly  mt-4 sm:pt-20 ">
          {Carditems.map((item, index) => (
            <Servicescard
              icon={item.icon}
              Cardheadibg={item.Cardheadibg}
              para={item.Cardpara}
              Customstylepara={""}
            />
          ))}
        </div>
      </MainWrapper>
      <MainWrapper CustomClass={ " !w-[100%] sm:!w-[90%] mx-auto !px-4"}>
        <Imagesection
          CustomClass="sm:!gap-x-2"
          ImageClass=" md:!w-[85%] object-cover  "
          image={frameimage}
          heading="OUR MISSION"
          para="  At Devlynx, our mission is to lead in delivering innovative and
            transformative technology solutions that empower businesses to
            excel. We specialize in web development, eCommerce platforms, CMS
            solutions, and healthcare mobile apps and websites, enhancing your
            digital presence and helping you achieve your strategic goals in a
            rapidly evolving digital landscape."
            CustomStyletext ={" !text-center"}
        />
      </MainWrapper>

      <MainWrapper CustomClass={"!px-8 md:!px-20"}>
        <Ourservicessection />
      </MainWrapper>
      <MainWrapper CustomClass={"!px-2 md:!px-20"}>
        <Heading
           CustomClasstext={" w-[90%]  md:!w-[90%] lg:!w-[80%]  !mx-auto"}
          heading={"BEST SOLUTION IN RIGHT TIME AND BUDGET"}
          CustomClasshea ={""}
          subheading={
            "Time is running out. Don’t waste it on thinking too much. Share your problems with us.Our expert professionals offer you complete guidance about the right solutions to your problems in minimum time and through cost-efficient approaches designed to generate business growth."
          }
        />
        <div class="flex flex-wrap justify-center self-stretch !pt-20 w-[90%]  mx-auto">
          {BestCarditem.map((item, index) => (
            <Solutioncard
              icon={item.icon}
              Cardheadibg={item.Cardheadibg}
              para={item.Cardpara}
              CustomClass=""
            />
          ))}
        </div>
      </MainWrapper>
    </>
  );
};

export default Home;
