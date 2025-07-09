import React from "react";

export default function Testing() {
  return (
    <div
      className='grid gap  grid-cols-[170px,_1fr] sm: 
     
      '>
      <div className='bg-yellow-400 h-screen sticky right-0 top-0 p-4'>
        yellow
      </div>
      <div className=' p-4 h-[200vh] w-[600px] overflow-x-scroll'>
        green
        <div className='grid grid-cols-3 gap-3 shadow p-4 bg-blue-50'>
          <div className='bg-red-100  shadow'>red</div>
          <div className='bg-red-100 shadow'></div>
          <div className='bg-red-100 shadow'></div>
        </div>
      </div>
    </div>
  );
}
