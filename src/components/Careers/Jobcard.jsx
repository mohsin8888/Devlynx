import React from "react";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";
export const Jobcard = ({
  type,
  value,
  onClick,
  CustomClass,
  Cardheading,
  Cardpara,
}) => {
  return (
    <div class={`flex justify-center items-center pb-8 ${CustomClass}`}>
      <div class="bg-white shadow-xl rounded-lg p-6 w-[80%]">
        <h3 class="text-xl font-semibold mb-4">{Cardheading}</h3>
        <p class="text-gray-600 mb-4">{Cardpara}</p>
        <Link to="mailto:connect@devlynxtech.com">
          <Button
            value={"Apply Now"}
            customClass={
              "rounded-md border border-transparent  !w-40 hover:bg-white hover:text-[#2B76C1] hover:font-[400] hover:border-[#2B76C1] transition-all duration-300"
            }
          />
        </Link>
      </div>
    </div>
  );
};
