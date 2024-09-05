import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainWrapper from "../components/Wrapper/MainWrapper";
import Heading from '../components/Heading/Heading';
import { Socialmediaitem } from '../data/footer/Socialmediaitem';
import Button from "../components/Buttons/Button";

const Contact_Us = () => {
  // State to store form data and errors
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error message when typing
  };

  // Form validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = 'Please fill this field';
    if (!formData.email) newErrors.email = 'Please fill this field';
    if (!formData.phone) newErrors.phone = 'Please fill this field';
    if (!formData.message) newErrors.message = 'Please fill this field';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Construct WhatsApp message
      const whatsappMessage = `Name: ${formData.name}%0ACompany: ${formData.company_name || 'N/A'}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;

      // WhatsApp link with form data
      const whatsappLink = `https://api.whatsapp.com/send?phone=923058665565&text=${whatsappMessage}`;

      // Redirect user to WhatsApp
      window.location.href = whatsappLink;
    }
  };

  return (
    <>
      <MainWrapper  CustomClass={" !px-2 sm:!px-16 text-center sm:text-start"}>
        <Heading heading={"Contact"} CustomClasshea={" sm:!text-[4rem] md:!text-[5rem] !text-[#000] !pb-4 sm:!pb-12 md:!pb-16"} />
        <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className=" poppins font-[400] text-[1.5rem] mb-4">Bringing your dream digital ideas to life with our expertise</h2>
            <h1 className="poppins font-[600] text-[2.5rem] mb-6">Devlynx Technologies</h1>
            <p className="text-lg mb-4">Office 504, 4th floor, Link Arcade, Model Town, Link Road, Lahore</p>
            <p className="text-[1.2rem] poppins font-[400] mb-4">connect@devlynxtech.com</p>
            {Socialmediaitem.map((item, index) => (
              <div key={index}>
                <ul className="flex space-x-4  justify-center sm:justify-start">
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
                    <Link to={item.whatsappfooterlink}>
                      <img src={item.whatsappfooter} alt="WhatsApp" className="w-6 h-6" />
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name (Optional)"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Company Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                   className="w-full p-3 border border-gray-300 rounded-lg"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                   className="w-full p-3 border border-gray-300 rounded-lg"
                ></textarea>
                {errors.message && <p className="text-red-500">{errors.message}</p>}
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
  );
};

export default Contact_Us;
