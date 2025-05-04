import React, { useEffect, useState } from "react";

export default function ItemCard({ item }) {
  return (
    <div>
      <div
        className='py-[1.2rem] px-4 bg-[#f2f2f2] flex justify-between
                 items-center font-medium text-lg pointer rounded-3xl'>
        <p className='text-tag'>{item.itemName}</p>
        <p
          className='price-tag text-white bg-green-600 font-bold 
                  py-1 px-2 text-base rounded-xl'>
          <span>NGN </span>
          {item.priceTag}
        </p>
      </div>
    </div>
  );
}
