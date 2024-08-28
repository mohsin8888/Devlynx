import React from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import Web from "../asset/images/home/webdevelopment.svg";
import frameimg from "../asset/images/home/frame-img.svg";
import Reacticon from "../asset/images/home/reactjs-icon.svg";
import Nodeicon from "../asset/images/home/nodejs-icon.svg";
import Htmlicon from "../asset/images/home/html-icon.svg";
import Bootsrapicon from "../asset/images/home/bootstrap-icon.svg";
import Typescripticon from "../asset/images/home/typescript-icon.svg";
import Angularicon from "../asset/images/home/angular-icon.svg";
import Reactnativeicon from "../asset/images/home/reactjs-icon.svg";
import Fluttericon from "../asset/images/home/flutterio-icon .svg";
import Switicon from "../asset/images/home/swift-icon.svg";
import photoshopicon from "../asset/images/home/photoshopicon.svg";
import Figmaicon from "../asset/images/home/figma-icon.svg";
import AdobeXDicon from "../asset/images/home/adobe-xdicon.svg";
import Illustratoricon from "../asset/images/home/Illustratoricon.svg";
import Vueicon from "../asset/images/home/vuejs-icon.svg";
import wts from "../asset/images/home/wts.svg";
import location from "../asset/images/home/location.svg";
import emailicon from "../asset/images/home/emailicon.svg";
import webicon from "../asset/images/home/webicon.svg";
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
      <MainWrapper CustomClass={"!py-28"} >
        <HeroSection
           CustomClass="!px-12"
          para="Our primary goal is to develop smart, intelligent solutions that transform your business. We specialise in creating innovative technologies that address complex business challenges, and significantly enhance productivity. Partner with us to unlock the full potential of your business through expert development"
          CustomClaspara=""
        />
      </MainWrapper>
      <MainWrapper>
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
          CustomClass=" pt-20"
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
