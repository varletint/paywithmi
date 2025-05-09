import React from "react";
import DashSidebar from "../compponents/DashSidebar";
import DashComp from "../compponents/DashComp";

export default function Dashboard() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div
        className='md:w-48 p-7 border-b md:border-r 
      md:min-h-screen border-gray-200 h-40 bg-gray-50'>
        <DashSidebar />
      </div>
      <div className='w-full'>
        <div
          className='flex flex-col gap-4 min-h-screen   p-4
        '>
          <div
            className=' flex flex-row items-center px-4 justify-evenly
    bg-white w-full h-[14rem] shadow rounded-lg'>
            <div className='lg:w-[20rem] md:w-[15rem] h-[10rem] shadow-md'></div>
            <div className='lg:w-[20rem] md:w-[15rem] h-[10rem] shadow-md'></div>
            <div className='lg:w-[20rem] md:w-[15rem] h-[10rem] shadow-md'></div>
          </div>
          <div className='bg-white w-full h-[14rem] shadow rounded-lg'></div>
          <div className='bg-white w-full h-[14rem] shadow rounded-lg'></div>
        </div>
      </div>
    </div>
  );
}

// <div className=' flex flex-col md:flex-row  w-[100%] min-h-screen bg-[#f1f7f3]'>
//   <div
//     className='bg-[#4dce49]
//   md:w-60  md:h-[100vh] h-[7rem] border--4 md:border-r- md:shadow-lg shadow'>
//     <DashSidebar />
//   </div>
//   <div className='w-full flex flex-col gap-4 min-h-screen bg-blue-200  p-4'>
//     <div
//       className=' flex flex-row items-center px-4 justify-evenly
//     bg-white w-full h-[14rem] shadow rounded-lg'>
//       {/* <div className='w-[20rem] h-[10rem] shadow-md'></div>
//       <div className='w-[20rem] h-[10rem] shadow-md'></div>
//       <div className='w-[20rem] h-[10rem] shadow-md'></div> */}
//     </div>
//     <div className='bg-white w-full h-[14rem] shadow rounded-lg'></div>
//     <div className='bg-white w-full h-[14rem] shadow rounded-lg'></div>
//   </div>
// </div>
