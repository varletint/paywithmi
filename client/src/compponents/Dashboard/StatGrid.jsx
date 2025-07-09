import React from "react";

export default function StatGrid() {
  return (
    <>
      <Card title={"Total Balance"} value={"124,000"} period={"This Month"} />
      <Card period={"Last Month"} value={"278,000"} />
      <Card title={"coming soon"} />
    </>
  );
}

const Card = ({ title, value, pillText, trend, period }) => {
  return (
    <div className=' p-4 bg-[#f1f7f3] col-span-4 rounded-xl shadow'>
      <div className='flex mb-8 items-start justify-between'>
        <div className=''>
          <h3 className='text-[#4a6352] mb-1 text-xs font-semibold'>{title}</h3>
          <p className='text-xl font-bold'>
            <span className=' line-through'>N</span>
            {value}
          </p>
        </div>
      </div>
      <p className='text-xs font-semibold text-[#92ac9a] '>{period}</p>
    </div>
  );
};
