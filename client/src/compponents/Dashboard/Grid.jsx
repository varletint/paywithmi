import React from "react";
import StatGrid from "./StatGrid";
import RecentTransactions from "./RecentTransactions";
import AvailableItems from "./AvailableItems";

export default function Grid() {
  return (
    <div className=' gap-3 px-4 grid'>
      <div className=' grid-cols-1 grid gap-3 md:grid-cols-12'>
        <StatGrid />
      </div>

      <RecentTransactions />
      <AvailableItems />
    </div>
  );
}
