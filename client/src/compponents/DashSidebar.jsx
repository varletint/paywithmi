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
    <div className='md:w-full lg:w-full  '>
      {items && items.length > 0 && (
        <div className=''>
          <h1 className='title mt-top py-6 px-4 font-bold mt-10'> My Items</h1>
          <div className='lis mt-4 flex-col flex gap-5'>
            {items.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
