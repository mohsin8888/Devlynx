import React from 'react'
import { Link } from 'react-router-dom'
export const Subfooter = () => {
  return (
   <>
   <div class="bg-gray-100 py-8">
  <div class=" w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between">
    <p className="text-sm inter font-[400] text-[#000000]">
      © 2024 Devlynx. All rights reserved.
    </p>
    <div className="flex space-x-4 mt-2 md:mt-0">
    <Link to="#" className=" whitespace-nowrap hover:underline text-sm inter font-[400] text-[#000000]">Privacy Policy</Link>
    <Link to="#" className=" whitespace-nowrap hover:underline text-sm inter font-[400] text-[#000000]">Terms of Use</Link>
    <Link to="#" className=" whitespace-nowrap hover:underline text-sm inter font-[400] text-[#000000]">Sales and Refunds</Link>
    <Link to="#" className=" whitespace-nowrap hover:underline text-sm inter font-[400] text-[#000000]">Legal</Link>
    <Link to="#" className=" whitespace-nowrap hover:underline text-sm inter font-[400] text-[#000000]">Site Map</Link>
</div>
    <div class=" whitespace-nowrap mt-2 md:mt-0 text-sm inter font-[400] text-[#000000]">
      United States
    </div>
  </div>
</div>

   </>
  )
}
