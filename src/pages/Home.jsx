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
import { SiKotlin } from "react-icons/si";
import { Ourservicessection } from "../components/Home/OurservicesSection/Ourservicessection";
import { LottieAnimation } from "../components/Home/HeroSection/LottieAnimation";
import { HeroSection } from "../components/Home/HeroSection/HeroSection";
const Home = () => {
  return (
    <>

      <MainWrapper CustomClass={" CustomClass= md:!px-28 !mt-16"} >
        <HeroSection
           CustomClass=""
          para="Our primary goal is to develop smart, intelligent solutions that transform your business. We specialise in creating innovative technologies that address complex business challenges, and significantly enhance productivity. Partner with us to unlock the full potential of your business through expert development"
          CustomClaspara=""
        />
      </MainWrapper>
      <MainWrapper  CustomClass={"!px-8 md:!px-28"}>
        <Heading
          heading={"INNOVATION WITH AUTOMATION"}
          subheading={
            "We craft efficient and responsive business models using proactive, multi-dimensional solutions. Our automated frameworks and business intelligence empower enterprises to achieve greater efficiency and success."
          }
        />
        <div class="flex flex-wrap justify-evenly items-center pt-20 ">
          {Carditems.map((item, index) => (
            <Servicescard
              icon={item.icon}
              Cardheadibg={item.Cardheadibg}
              para={item.Cardpara}
            />
          ))}
        </div>
      </MainWrapper>
      <MainWrapper CustomClass={"!w-[95%] mx-auto"}>
        <Imagesection
          CustomClass=""
          ImageClass=" w-[500px] object-cover  "
          image={frameimage}
          heading="OUR MISSION"
          para="  At Devlynx, our mission is to lead in delivering innovative and
            transformative technology solutions that empower businesses to
            excel. We specialize in web development, eCommerce platforms, CMS
            solutions, and healthcare mobile apps and websites, enhancing your
            digital presence and helping you achieve your strategic goals in a
            rapidly evolving digital landscape."
        />
      </MainWrapper>

      <MainWrapper CustomClass={"!px-8 md:!px-20"}>
        <Ourservicessection />
      </MainWrapper>
      <MainWrapper>
        <Heading
          CustomClass=""
          heading={"BEST SOLUTION IN RIGHT TIME AND BUDGET"}
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
