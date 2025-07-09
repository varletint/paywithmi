import React, { useEffect, useState } from "react";

export default function TypesOfPayment({ onClose }) {
  const api = "/api/item/getitems";

  const [item, setItems] = useState([]);
  console.log(item);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`${api}`);
        const data = await res.json();

        if (!res.ok) {
          return;
        }
        if (res.ok) {
          setItems(data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);
  return (
    <div
      className=' mt-10 px-3 min-h-screen max-w-3xl mx-auto flex flex-col gap-10'
      onClick={onClose}>
      <div className=''>
        <h1
          className=' text-center font-semibold
        text-xl'>
          Manuals and LogBooks
        </h1>
        <div className='lists flex flex-col gap-3 bg-white p-4 mt-2 rounded-3xl'>
          <div
            className='py-[1.2rem] px-4 bg-[#f2f2f2] flex justify-between
           items-center font-medium text-lg pointer rounded-3xl'>
            <p className='text-tag'>Manual 108</p>
            <p
              className='price-tag text-white bg-green-600 font-bold 
            py-1 px-2 text-base rounded-xl'>
              <span>NGN </span>2300
            </p>
          </div>
          <div
            className='py-[1.2rem] px-4 bg-[#f2f2f2] flex justify-between
           items-center font-medium text-lg pointer rounded-3xl'>
            <p className='text-tag'>Manual 208</p>
            <p
              className='price-tag text-white bg-green-600 font-bold 
            py-1 px-2 text-base rounded-xl'>
              <span>NGN </span>2300
            </p>
          </div>
          <div
            className='py-[1.2rem] px-4 bg-[#f2f2f2] flex justify-between
           items-center font-medium text-lg pointer rounded-3xl'>
            <p className='text-tag'>Manual 211</p>
            <p
              className='price-tag text-white bg-green-600 font-bold 
            py-1 px-2 text-base rounded-xl'>
              <span>NGN </span>2300
            </p>
          </div>
          <div
            className='py-[1.2rem] px-4 bg-[#f2f2f2] flex justify-between
           items-center font-medium text-lg pointer rounded-3xl'>
            <p className='text-tag'>Manual 308</p>
            <p
              className='price-tag text-white bg-green-600 font-bold 
            py-1 px-2 text-base rounded-xl'>
              <span>NGN </span>2300
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <h1
          className=' text-center font-semibold
        text-xl'>
          Dept. Fee
        </h1>
        <div className='lists flex flex-col gap-3 bg-white p-4 mt-2 rounded-3xl'>
          <div
            className='py-[1.2rem] px-4 bg-[#f2f2f2] flex justify-between
           items-center font-medium text-lg pointer rounded-3xl'>
            <p className='text-tag'>Dept. fee </p>
            <p
              className='price-tag text-white bg-green-600 font-bold 
            py-1 px-2 text-base rounded-xl'>
              <span>NGN </span>1300
            </p>
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
          <h1 className='alert text-center font-medium text-red-600'>
            {" "}
            No payment at the moment :-)
          </h1>
        </div>
      </div>
    </div>
  );
}
