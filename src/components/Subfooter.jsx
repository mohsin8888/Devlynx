import React from 'react'

export const Subfooter = () => {
  return (
   <>
   <footer class="bg-gray-100 py-8">
  <div class=" w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between">
    <p class="text-gray-600 text-sm">
      © 2024 Apple Inc. All rights reserved.
    </p>
    <div class="flex space-x-4 mt-2 md:mt-0">
      <a href="#" class="text-gray-600 text-sm hover:underline">Privacy Policy</a>
      <a href="#" class="text-gray-600 text-sm hover:underline">Terms of Use</a>
      <a href="#" class="text-gray-600 text-sm hover:underline">Sales and Refunds</a>
      <a href="#" class="text-gray-600 text-sm hover:underline">Legal</a>
      <a href="#" class="text-gray-600 text-sm hover:underline">Site Map</a>
    </div>
    <div class="mt-2 md:mt-0 text-gray-600 text-sm">
      United States
    </div>
  </div>
</footer>

   </>
  )
}
