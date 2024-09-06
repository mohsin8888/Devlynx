import React from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Button from "../components/Buttons/Button";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Aboutimg1 from "../asset/images/about/aboutimage1.svg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Bannersection } from "../components/About/Bannersection";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // ensures the count happens only once
  });

  return (
    <>
      <MainWrapper CustomClass={"px-4"}>
        <div className="max-[95%] mx-auto text-center">
          <h2 className="text-4xl poppins font-[600] leading-[54px]  mb-4 text-[#000]">
            Work with one of the fastest-growing
          </h2>
          <h3 className="text-[2rem]  poppins font-[400] sm:font-[600] leading-[45px]  text-[#2B76C1] mb-4">
            digital consultancies in EU
          </h3>
          <p className="max-w-3xl  mb-12 text-lg poppins font-[400] text-[#000]  ">
            We design and develop web and mobile applications for our clients
            worldwide, focusing on outstanding user experience.
          </p>
          <Button
            value={"Lets’s work together!"}
            customClass={
              "poppins font-[700] text-sm bg-[#2B76C1] whitespace-nowrap !w-52 rounded-md border border-transparent leading-normal hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1] transition-all duration-300"
            }
          />
        </div>
      </MainWrapper>
      <MainWrapper>
        <div className="   w-[90%] mx-auto  mb-20 flex flex-col  lg:flex-row justify-center md:justify-start  space-y-4 lg:space-y-0 lg:space-x-12">
          <div className="  w-[80%] mx-auto lg:w-[45%]">
            <h1 className="text-[1.5rem] md:text-[2.25rem] poppins font-[600]">
              Building software for World
              <span className="text-[#2B76C1]"> changers </span>
            </h1>
          </div>
          <div className=" w-[80%] mx-auto lg:w-[45%] ">
            <p className="text-[#626262] poppins font-[400]  text-base">
              We help deliver digital excellence at every stage of the product
              journey, from early ideation to research, prototyping, testing,
              launch, and ongoing support. Explore our end-to-end services
              designed to improve business metrics and deliver delightful
              digital experiences.
            </p>
          </div>
        </div>
        <div className="w-[95%] mb-20">
          <div className=" w-full md:w-[60%] flex flex-col items-start">
            <div className="flex items-center lg:items-start">
              <FaQuoteLeft className="text-blue-400 text-[1rem] md:text-[4rem] mb-40 " />
              <p className="text-gray-700 text-[24px]  ml-4 inline">
                Since the beginning, our main goal was to help entrepreneurs
                build new software solutions that matter. Building and shipping
                products that are helpful for people, making the world a better
                place, for everyone, including ourselves.
                <FaQuoteRight className="text-blue-400 text-xl inline" />
              </p>
            </div>
          </div>
        </div>

        {/* Add ref to this section */}
        <div
          ref={ref}
          className="flex flex-wrap justify-around items-center py-10 gap-20 bg-white"
        >
          <div className="text-center">
            <p className="text-[2rem] poppins font-[400] leading-[70px] text-[#2B76C1]">
              {inView && <CountUp start={0} end={5} duration={5.75} />}+
            </p>
            <p className="text-gray-600">Years on the market</p>
          </div>
          <div className="border-l border-l-blue-400 h-24 hidden md:block"></div>
          <div className="text-center">
            <p className="text-[2rem] poppins font-[600] leading-[70px] text-[#2B76C1]">
              {inView && <CountUp start={0} end={100} duration={2.75} />}+
            </p>
            <p className="text-gray-600">People on board</p>
          </div>
          <div className="border-l border-l-blue-400 h-16 hidden md:block"></div>
          <div className="text-center">
            <p className="text-[2rem] poppins font-[600] leading-[70px] text-[#2B76C1]">
              {inView && <CountUp start={0} end={200} duration={2.75} />}+
            </p>
            <p className="text-gray-600">Projects delivered</p>
          </div>
          <div className="border-l border-l-blue-400 h-16 hidden md:block"></div>
          <div className="text-center">
            <p className="text-[2rem] poppins font-[600] leading-[70px] text-[#2B76C1]">
              {inView && <CountUp start={0} end={50} duration={3.75} />}+
            </p>
            <p className="text-gray-600">Current NPS score</p>
          </div>
        </div>
      </MainWrapper>
      <MainWrapper>
        <div className=" w-[95%] lg:w-[90%] mx-auto flex flex-col   lg:flex-row  justify-center items-center gap-x-12  space-y-4 lg:space-y-0">
          {/* <!-- Image Section --> */}
          <div className="w-full lg:w-[50%] flex justify-center items-center">
            <img
              src={Aboutimg1}
              className=" w-[700px] lg:w-[750px] object-cover "
              alt="Mission Image"
            />
          </div>

          {/* <!-- Text Section --> */}
          <div className="lg:w-[70%] w-full">
            <h2 className="text-[40px] poppins font-[600] leading-[60px]">
              Visit our office <span className="text-blue-600">in Lahore</span>
            </h2>
            <p className="mt-2 inter  text-[2rem] lg:text-[2rem] font-[400] text-[#000]  ">
              Office 504, 4th floor, Link Arcade,
              <br />
              Model Town Link Road, Lahore
            </p>
          </div>
        </div>
      </MainWrapper>
      <Bannersection
        heading={"A recognizable & awarded partner"}
        text={
          " Own the change in the market with AI-assisted productivity, rapid prototyping, low-code development, and next-gen design."
        }
        imagetextstyle = {"max-w-xl"}
        headingstyle ={"max-w-[89%]  !mx-auto !text-center"}
      />
    </>
  );
};

export default About;
