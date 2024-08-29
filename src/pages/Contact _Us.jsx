import React from 'react'
import { Link } from 'react-router-dom'
import MainWrapper from "../components/Wrapper/MainWrapper";
import Heading from '../components/Heading/Heading';
import { Socialmediaitem } from '../data/footer/Socialmediaitem';
import Button from "../components/Buttons/Button";
const Contact_Us = () => {
  return (
    <>
         <MainWrapper>
           <Heading
           heading={"Contact"}
           CustomClasshea ={"!text-6xl !text-[#000] !pb-16"}
           />
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
           
        <div class="md:w-1/2 mb-8 md:mb-0">
            <h2 class="text-2xl font-bold mb-4">Bringing your dream digital ideas to life with our expertise</h2>
            <h1 class="text-[2rem] font-extrabold mb-6">Devlynx Technologies</h1>
            <p class="text-lg mb-4">Office 504, 4th floor, Link Arcade, Model Town, Link Road, Lahore</p>
            <p class="text-lg font-semibold mb-4">connect@devlynxtech.com</p>
            {Socialmediaitem.map((item, index) => (
        <div key={index}>
          <ul className="flex  space-x-4">
            <li>
              <Link to="#">
                <img src={item.linkdin} alt="LinkedIn" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={item.facebook} alt="Facebook" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={item.insta} alt="Instagram" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={item.twitter} alt="Twitter" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={item.whatsappfooter} alt="WhatsApp" className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
      ))}
        </div>

      
        <div class="md:w-1/2">
            <form action="#" method="POST">
                <div class="mb-4">
                    <input type="text" name="name" placeholder="Your Name"  className="w-full p-3 border border-gray-300 rounded-lg"/>
                </div>
                <div class="mb-4">
                    <input type="text" name="company_name" placeholder="Company Name (Optional)" class="w-full p-3 border border-gray-300 rounded-lg"/>
                </div>
                <div class="mb-4">
                    <input type="email" name="email" placeholder="Company Email" className="w-full p-3 border border-gray-300 rounded-lg"/>
                </div>
                <div class="mb-4">
                    <input type="number" name="phone" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg"/>
                </div>
                <div class="mb-4">
                    <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
                </div>
                <Button
    value={"Submit"}
    customClass={
      "rounded-md border border-transparent leading-normal hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1] transition-all duration-300"
    }
  />
            </form>
        </div>
    </div>
    </MainWrapper>

    </>
  )
}

export default Contact_Us