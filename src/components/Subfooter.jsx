import React from "react";
import { Link } from "react-router-dom";
export const Subfooter = () => {
  return (
    <>
      <div className="bg-gray-100 py-8">
  <div className="w-[85%] mx-auto flex items-center justify-between">
    <p className=" flex items-center gap-3 text-sm inter font-[400] text-[#000000]">
      © 2024 Devlynx. All rights reserved. 
      <Link to="#" className="hover:underline text-sm inter font-[400] text-[#000000] ml-2">
        
      </Link>
    </p>

    <div className="whitespace-nowrap mt-2 md:mt-0 text-sm inter font-[400] text-[#000000]">
      Pakistan
    </div>
  </div>
</div>
    </>
  );
};
