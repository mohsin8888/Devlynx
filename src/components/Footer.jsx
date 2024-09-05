import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'
import { Socialmediaitem } from '../data/footer/Socialmediaitem';
import { Servicesitem } from '../data/footer/Servicesitem';
import { Contactusitems } from '../data/footer/Contactusitems';
import { Subfooter } from './Subfooter';
export const Footer = () => {
  return (
   <>
   <div className="bg-gray-100 py-8 b">
     <div className=" w-[80%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center  justify-center md:text-left">
      
      {Socialmediaitem.map((item, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-[24px] inter font-[600] text-[#000]">{item.heading}</h2>
          <p className="text-base inter font-[400] text-black">{item.subheading}</p>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li>
              <Link to={item.linkdinlink}>
                <img src={item.linkdin} alt="LinkedIn" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to={item.facebooklink}>
                <img src={item.facebook} alt="Facebook" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to={item.instalink}>
                <img src={item.insta} alt="Instagram" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to={item.twitterlink}>
                <img src={item.twitter} alt="Twitter" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to={item.whatsappfooter} className="text-gray-600 hover:text-gray-800">
                <img src={item.whatsappfooter} alt="WhatsApp" className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
      ))}

      {Servicesitem.map((item,index)=> (
        <div key={index} className="space-y-4 md:ml-8">
          <h2 className="text-[24px] inter font-[600] text-[#000]">{item.heading}</h2>
          <ul className="  space-y-1">
            <li><Link to="#" className=" hover:underline text-base inter font-[400] text-[#000000]">{item.Weblink}</Link></li>
            <li><Link to="#" className=" hover:underline text-base inter font-[400] text-[#000000]">{item.Applink}</Link></li>
            <li><Link to="#" className=" hover:underline text-base inter font-[400] text-[#000000]">{item.Graphicslink}</Link></li>
            <li><Link to="#" className=" hover:underline text-base inter font-[400] text-[#000000]">{item.Supportlink}</Link></li>
            <li><Link to="#" className=" hover:underline text-base inter font-[400] text-[#000000]">{item.Technicallink}</Link></li>
          </ul>
        </div>
      ))}

      {Contactusitems.map((item,index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-[24px] inter font-[600] text-[#000]">{item.heading}</h2>
          <ul className="space-y-3">
          <li className="flex justify-center md:justify-start items-center">
         <Link to={item.phonelink} className="flex items-center gap-3">
      <img src={item.phoneimage} alt="Phone" className="w-6 h-6 sm:w-4 sm:h-4" />
    <span className="text-base inter font-[400] text-[#000000]">{item.phoneimagetext}</span>
       </Link>
      </li>
        <li className="flex justify-center md:justify-start items-center">
  <Link to={item.envloplink} className="flex items-center gap-3">
    <img src={item.envlopimage} alt="Email" className="w-6 h-6 sm:w-4 sm:h-4" />
    <span className="text-base inter font-[400] text-[#000000]">{item.envlopimagetext}</span>
  </Link>
</li>
           
            <li className="flex justify-center md:justify-start items-center gap-3">
              <Link to="#">
                <img src={item.locationimage} alt="Location" className=" w-8 h-8 sm:w-6  sm:h-6" />
              </Link>
              <span className="text-[#000000] text-base font-[400] flex items-center">{item.locationimagetext}</span>
            </li>
          </ul>
        </div>
      ))}
     
    </div>
   </div>
   <div className='bg-gray-100'>
   <hr className='  w-[85%] mx-auto bg-gray-200  p-[1px]'></hr>
   </div>
   <Subfooter/>
   </>
  )
}
