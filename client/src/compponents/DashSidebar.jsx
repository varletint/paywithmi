import { React, useState, useEffect } from "react";
import ItemCard from "./ItemCard";

export default function DashSidebar() {
  const [items, setItems] = useState();
  const api = "/api/item/getitems";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`${api}`);
        const newData = await res.json();

        if (!res.ok) {
          return;
        }
        if (res.ok) {
          setItems(newData.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);
  return (
    <div className='md:w-full  '>
      {/* {items && items.length > 0 && ( */}
      <div className='md:border-b-2 p-4 border-white '>
        <h1 className=' text-xl font-bold mt-2'> Dashboard</h1>
        <h1 className=' text-xl px-2 font-bold mt-2'> Overview</h1>
        <h1 className=' text-l px-4 mt-top font-bold mt-5'> Items Category</h1>
        <div className='py-1 px-6 flex-col flex gap-'>
          {/* {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))} */}
          <div className=' font-semibold'>Books and Manuals</div>
          <div className='font-semibold'>Dept. Fees</div>
          <div className='font-semibold'>Field Trip</div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}
