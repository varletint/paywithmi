import React from "react";

export default function MadeByV() {
  return (
    <div
      className=' text-xs
  text-[#084d2c] py-2 px-2 sticky justify-end
  top-[calc(100vh_-_48px_-_16px)]  border-[#c7e9d9] z-[-1]
  md:border-none border-b-4'>
      <div className='flex items-center justify-between '>
        <div className=''>
          <p className=' font-bold'>varletint</p>
          <p className='text-xs text-[#8aa197] z-0 '>junior web.dev</p>
          <button>Log out</button>
        </div>
      </div>
    </div>
  );
}
