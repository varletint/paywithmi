import React from "react";
import StatGrid from "./StatGrid";
import RecentTransactions from "./RecentTransactions";

export default function Grid() {
  return (
    <div className=' gap-3 px-4 grid'>
      <div className=' sm:grid-cols-1 grid gap-3 lg:grid-cols-12'>
        <StatGrid />
      </div>
      <div className=''>
        <RecentTransactions />
      </div>
    </div>
  );
}
