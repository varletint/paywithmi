import React from "react";

export default function AvailableItems() {
  return (
    <div
      className=' grid-cols-12 border p-4 
  rounded-xl shadow-sm lg:overflow-hidden overflow-x-scroll scrollbar
        scrollbar-track-slate-100 scrollbar-thumb-slate-300'>
      <div className='flex justify-between items-center mb-4 sticky'>
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
        <th className='text-start p-1.5 whitespace-nowrap'>{"Items"}</th>
        <th className='text-start p-1.5 whitespace-nowrap'>{"Category"}</th>
        <th className='text-start p-1.5 whitespace-nowrap'>{"Price"}</th>
        <th className='text-start p-1.5 whitespace-nowraps'>{"Date"}</th>
      </tr>
    </thead>
  );
};

const TableRow = ({ item, price, category }) => {
  return (
    <tr className='text-[0.73rem] font-medium text-stone-700'>
      <td className='p-1.5 whitespace-nowrap'> {item} </td>
      <td className='p-1.5 whitespace-nowrap'> {category} </td>
      <td className='p-1.5 whitespace-nowrap'>
        <span className='line-through whitespace-nowrap'>N</span>
        {price}
      </td>
      <td className='p-1.5 whitespace-nowrap'>
        {"Not available at the moment"}
      </td>
    </tr>
  );
};
