import React from "react";

export default function AvailableItems() {
  return (
    <div
      className=' grid-cols-12 border p-4 
  rounded-xl shadow-sm overflow-x-scroll'>
      <div className='flex justify-between items-center mb-4'>
        <h3
          className=' font-semibold flex
        items-center text-sm gap-1.5'>
          Available transactions
        </h3>
        <button className='text-sm font-semibold text-[#0db445]'>
          See all
        </button>
      </div>
      <table className=' table-auto w-full'>
        <TableHead />
        <tbody>
          <TableRow
            item={"Manual 103"}
            price={2200}
            category={"Manual and Books"}
          />
          <TableRow
            item={"Manual 403"}
            price={1200}
            category={"Manual and Books"}
          />
          <TableRow
            item={"Dept. fee"}
            price={1300}
            category={"Departmental fee O1"}
          />
        </tbody>
      </table>
    </div>
  );
}

const TableHead = ({}) => {
  return (
    <thead>
      <tr className='text-sm font-normal text-stone-500'>
        <th className='text-start p-1.5 '>{"Items"}</th>
        <th className='text-start p-1.5 '>{"Category"}</th>
        <th className='text-start p-1.5 '>{"Price"}</th>
        <th className='text-start p-1.5 '>{"Date"}</th>
      </tr>
    </thead>
  );
};

const TableRow = ({ item, price, category }) => {
  return (
    <tr className='text-[0.73rem] font-medium text-stone-700'>
      <td className='p-1.5'> {item} </td>
      <td className='p-1.5'> {category} </td>
      <td className='p-1.5'>
        <span className='line-through'>N</span>
        {price}
      </td>
      <td className='p-1.5'> {"Not available at the moment"} </td>
    </tr>
  );
};
