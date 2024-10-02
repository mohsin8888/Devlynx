import React from "react";
import { useOutletContext } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Servicescard from "../components/Card/Servicescard";
import { Carditems } from "../components/Card/Carditems";
import { Imagesection } from "../components/Home/ImageSection/Imagesection";
import frameimage from "../asset/images/home/frameimage.png";
import circleimage from "../asset/images/home/circleimage.svg";
import { BestCarditem } from "../data/BEST SOLUTION Section/BestCarditem";
import { Solutioncard } from "../components/Card/Solutioncard";
import { Ourservicessection } from "../components/Home/OurservicesSection/Ourservicessection";
import { Projectcard } from "../components/Card/Projectcard";
import Headinghome from "../components/Home/Headinghome";
import { Link } from "react-router-dom";
import Button from "../components/Buttons/Button";
import zz from "../asset/images/home/backgroundimg.svg";

const Home = () => {
  const { setIsMenuOpen } = useOutletContext(); // Use this to get setIsMenuOpen
  return (
    <div onClick={() => setIsMenuOpen(false)}>
      <MainWrapper CustomClass={"!px-2 py-12 sm:!py-20"}>
        <div className="w-full lg:w-[90%] mx-auto text-center">
          <h2 className="text-[2rem] lato font-[800] leading-[40px] mb-2 sm:mb-4 text-[#000]">
            We Do
            <span className="text-[#2b76c1] lato font-[800]">
              {" "}
              Development{" "}
            </span>
          </h2>

          <p className="sm:w-[70%] lg:w-[60%] mx-auto mb-6 sm:mb-8 text-lg poppins font-[400] text-[#8C8E94]">
            At Devlynx we develop smart and intelligent solution for your
            business. our solutions solve business problems and improve
            productivity
          </p>

          <Link
            to="https://api.whatsapp.com/send?phone=923166618694"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              value={"Lets GO"}
              customClass={
                "lato font-[600] text-[12px] bg-[#2B76C1] !py-2 whitespace-nowrap !w-28 rounded-md border border-transparent leading-normal hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1] transition-all duration-300"
              }
            />
          </Link>
        </div>
      </MainWrapper>

      <MainWrapper CustomClass={" !px-4 sm:!px-20  md:!px-28 lg:!px-40 !py-0"}>
        <Headinghome
          Heading="Our Commitment"
          subheading="What we serve"
          text="At Devlynx we develop efficient and responsive business models through proactive and multi-dimensional solutions."
        />
      </MainWrapper>
      <MainWrapper CustomClass={" !px-4 lg:!px-28 !py-0 sm:!py-16"}>
        <div className="flex flex-wrap  mt-4 sm:pt-20 w-[100%] mx-auto py-8 sm:py-0 justify-center">
          {Carditems.services.map((item, index) => (
            <Servicescard
              key={index}
              icon={item.image}
              Cardheading={item.heading}
              para={item.description}
            />
          ))}
        </div>
      </MainWrapper>

      <MainWrapper CustomClass={"!px-0"}>
        <Imagesection
          ImageClass="md:!w-[85%] object-cover"
          image={frameimage}
          heading="OUR MISSION"
          para="Provide an optimal solution to enhance the business growth of our clients, improve their working strategies, introduce them to cost efficient and reliable approaches and take their business to next level."
          CustomStyletext=""
        />
      </MainWrapper>
      <MainWrapper CustomClass={" !px-5 sm:!px-20 lg:!px-40 !py-0"}>
        <Headinghome
          Heading="Our Project"
          subheading="What We Made"
          text="At DevLynx, we specialize in delivering top-notch web design, web development, and app development services.With a portfolio of successful projects, we bring innovation and quality to every solution we create"
        />
      </MainWrapper>

      <MainWrapper CustomClass={"!px-0 !sm:px-20  "}>
        <div className="flex flex-wrap  mt-4 sm:pt-20 w-[85%] mx-auto justify-center  ">
          {Carditems.projects.map((item, index) => (
            <Projectcard
              key={index}
              icon={item.image}
              Cardheading={item.heading}
              para={item.description}
            />
          ))}
        </div>
      </MainWrapper>
      <MainWrapper CustomClass={"!px-0"}>
        <Imagesection
          ImageClass="md:!w-[85%] object-cover"
          image={circleimage}
          heading="BEST SOLUTION IN RIGHT TIME AND BUDGET"
          para="Time is running out. Don’t waste it on thinking too much. Share your problems with us. Our expert professionals offer  you complete guidance about the right solutions to your problems in minimum time and through cost-efficient approaches designed to generate business growth."
          CustomStyletext=""
        />
      </MainWrapper>
      <MainWrapper CustomClass={" !px-1 sm:!px-20 lg:!px-40 !py-0 "}>
        <Headinghome
          Heading="Contact details"
          subheading="How to Approach"
          subheadingstyle="!w-[100%]"
          text="Looking for top-notch web development, app development, or UI/UX design? Contact DevLynx today and let us transform your vision into reality with our expert solutions!"
        />
      </MainWrapper>
      <MainWrapper CustomClass={"!px-2 md:!px-20"}>
        <div className="flex flex-wrap justify-center self-stretch !pt-20 w-[90%] mx-auto">
          {BestCarditem.map((item, index) => (
            <Solutioncard
              key={index}
              icon={item.icon}
              link={item.link}
              Cardheadibg={item.Cardheadibg}
              para={item.Cardpara}
              CustomClass=""
            />
          ))}
        </div>
      </MainWrapper>
    </div>
  );
};

export default Home;
