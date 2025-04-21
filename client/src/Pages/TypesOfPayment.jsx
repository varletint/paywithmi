import React from "react";

export default function TypesOfPayment() {
  return (
    <div className=' mt-10 px-3 min-h-screen max-w-3xl mx-auto flex flex-col gap-10'>
      <div className=''>
        <h1
          className=' text-center font-semibold
        text-xl'>
          Manuals and LogBooks
        </h1>
        <div className='lists flex flex-col gap-3 bg-white p-4 mt-2 rounded-3xl'>
          <div
            className='py-[1.3rem] px-7 bg-[#f2f2f2] 
           font-medium text-lg rounded-3xl'>
            Manual 108
          </div>
          <div
            className='py-[1.3rem] px-7 bg-[#f2f2f2] 
           font-medium text-lg rounded-3xl'>
            Manual 203
          </div>
          <div
            className='py-[1.3rem] px-7 bg-[#f2f2f2] 
           font-medium text-lg rounded-3xl'>
            Manual 210
          </div>
          <div
            className='py-[1.3rem] px-7 bg-[#f2f2f2] 
           font-medium text-lg rounded-3xl'>
            Project Logbook
          </div>
        </div>
      </div>
      <div className=''>
        <h1
          className=' text-center font-semibold
        text-xl'>
          Field Trips
        </h1>
        <div className='lists flex flex-col gap-3 bg-white p-4 mt-2 rounded-3xl'>
          <div
            className='py-[1.3rem] px-7 bg-[#f2f2f2] 
           font-medium text-lg rounded-3xl'>
            Pay for your 100 Level Trip
          </div>
          <div
            className='py-[1.3rem] px-7 bg-[#f2f2f2] 
           font-medium text-lg rounded-3xl'>
            Pay for your 300 Level Trip
          </div>
          <div
            className='py-[1.3rem] px-7 bg-[#f2f2f2] 
           font-medium text-lg rounded-3xl'>
            Pay for your 400 Level Trip
          </div>
        </div>
      </div>
    </div>
  );
}
