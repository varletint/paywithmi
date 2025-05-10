import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className=' border-b px-4 mb-4 mt-1
  pb-4 border-[#f1f7f3]'>
      <div className=' sm:flex block font-semibold  justify-between items-center'>
        <div className=''>
          <span className=' font-semibold text-sm block'>varletint</span>
          <span
            className='text-xs font-semibold bg-[#0db445]
        px-2 py-1 rounded text-white'>
            Active
          </span>
        </div>
        <div className='sm:mt-0 mt-2 flex gap-1.5'>
          <FaExclamationTriangle className=' text-red-500' />
          <span
            className='text-xs  
      text-red-500 '>
            For better experience set your device to Desktop view
          </span>
        </div>
      </div>
    </div>
  );
}
