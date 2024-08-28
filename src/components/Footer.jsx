import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo/Logo'
import { Socialmediaitem } from '../data/footer/Socialmediaitem';
import { Servicesitem } from '../data/footer/Servicesitem';
import { Contactusitems } from '../data/footer/Contactusitems';

export const Footer = () => {
  return (
   <>
   <div className="bg-gray-100 py-8">
   <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center md:justify-start md:items-start">

      {Socialmediaitem.map((item, index) => (
        <div key={index}>
          <h2 className="text-xl font-bold text-gray-800">{item.heading}</h2>
          <p className="text-gray-600 mt-4">{item.subheading}</p>
          <ul className="flex mt-4 space-x-4">
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
              <Link to="#" className="text-gray-600 hover:text-gray-800">
                <img src={item.whatsappfooter} alt="WhatsApp" className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
      ))}

      {Servicesitem.map((item,index)=> (
        <div key={index}>
          <h2 className="text-xl font-bold text-gray-800">{item.heading}</h2>
          <ul className="mt-4 space-y-2 underline">
            <li><Link to="#" className="text-gray-600 hover:text-gray-800">{item.Weblink}</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-gray-800">{item.Applink}</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-gray-800">{item.Graphicslink}</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-gray-800">{item.Supportlink}</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-gray-800">{item.Technicallink}</Link></li>
          </ul>
        </div>
      ))}

      {Contactusitems.map((item,index) => (
        <div key={index}>
          <h2 className="text-xl font-bold text-gray-800">{item.heading}</h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-3">
              <Link to="#">
                <img src={item.phoneimage} alt="Phone" className="w-6 h-6" />
              </Link>
              <span className="text-gray-600">{item.phoneimagetext}</span>
            </li>
            <li className="flex items-center gap-3">
              <Link to="#">
                <img src={item.envlopimage} alt="Email" className="w-6 h-6" />
              </Link>
              <span className="text-gray-600">{item.envlopimagetext}</span>
            </li>
            <li className="flex items-center gap-3">
              <Link to="#">
                <img src={item.locationimage} alt="Location" className="w-8 h-8" />
              </Link>
              <span className="text-gray-600">{item.locationimagetext}</span>
            </li>
          </ul>
        </div>
      ))}
    
    </div>
   </div>
   </>
  )
}
