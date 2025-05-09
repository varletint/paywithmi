import React from "react";

export default function RecentTransactions() {
  const date = new Date();
  console.log(date);
  return (
    <div
      className='grid-cols-1 p-4 border 
  shadow-sm rounded-xl lg:overflow-hidden overflow-x-scroll scrollbar
        scrollbar-track-slate-100 scrollbar-thumb-slate-300 '>
      <div className='mb-4 flex items-center justify-between'>
        <h3
          className='flex items-center gap-1.5
         font-medium'>
          Recent Transactions
        </h3>
        <button
          className='text-sm text-violet-500
              hover:underline font-medium'>
          See all
        </button>
      </div>
      <table className=' w-full table-auto'>
        <TableHead />
        <tbody>
          <TableRow
            matric={"u20/fns/csc/1110"}
            item={"Manual 103"}
            category={"Manuals and Books"}
            amount={1200}
            // date={date}
          />
        </tbody>
      </table>
    </div>
  );
}

const TableHead = () => {
  return (
    <thead>
      <tr className=' text-sm font-normal text-stone-500'>
        <th className='text-start p-1.5 '>Matric NO</th>
        <th className='text-start p-1.5 '>Item</th>
        <th className='text-start p-1.5 '>Category</th>
        <th className='text-start p-1.5'>Date</th>
        <th className='text-start p-1.5'>Amount</th>
        <th className='w-8'></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ matric, category, date, amount, item }) => {
  return (
    <tr className='text-sm font-medium'>
      <td className='p-1.5 uppercase'>{matric}</td>
      <td className='p-1.5 uppercase'>{item}</td>
      <td className='p-1.5 capitalize'>{category}</td>
      <td className='p-1.5'>{date}</td>
      <td className='p-1.5'>{amount}</td>
    </tr>
  );
};
