import { useEffect } from "react";
import TopBar from "./TopBar";
import Grid from "./Grid";
import RecentTransactions from "./RecentTransactions";

export default function Dashboard() {
  useEffect(() => {
    document.title = "dashboard";
  }, []);
  return (
    <div className='bg-white rounded-lg pb-4 shadow '>
      <TopBar />
      <Grid />
    </div>
  );
}
